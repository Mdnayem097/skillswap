import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Session from "@/models/Session";
import { authProxy } from "@/lib/authProxy";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    const session = await Session.findById(id);

    if (!session) {
      return NextResponse.json({ success: false, error: "Session not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, session }, { status: 200 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Failed to fetch session";
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}

// ১. DELETE API: স্লট ডিলিট করার জন্য
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authProxy();
    if (!user || user.role !== "mentor") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await dbConnect();
    const { id } = await params;

    // নিশ্চিত হওয়া যে এই স্লটটি এই মেন্টরেরই তৈরি কিনা
    const session = await Session.findOne({ _id: id, mentorId: user.userId });
    if (!session) {
      return NextResponse.json({ error: "Session not found or unauthorized to delete" }, { status: 404 });
    }

    await Session.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Session deleted successfully" }, { status: 200 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Delete failed";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

// 📝 ২. PUT API: স্লট আপডেট বা এডিট করার জন্য
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await authProxy();
    if (!user || user.role !== "mentor") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await dbConnect();
    const { id } = await params;
    const updates = await request.json();

    // চেক করা এই স্লটের মালিক এই মেন্টর কিনা
    const session = await Session.findOne({ _id: id, mentorId: user.userId });
    if (!session) {
      return NextResponse.json({ error: "Session not found or unauthorized to edit" }, { status: 404 });
    }

    const updatedSession = await Session.findByIdAndUpdate(id, updates, { new: true });
    return NextResponse.json({ success: true, message: "Session updated successfully", session: updatedSession }, { status: 200 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Update failed";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}