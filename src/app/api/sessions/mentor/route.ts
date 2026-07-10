import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Session from "@/models/Session";
import { authProxy } from "@/lib/authProxy";

export async function GET() {
  try {
    const user = await authProxy();
    if (!user || user.role !== "mentor") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await dbConnect();

    const mentorSessions = await Session.find({ mentorId: user.userId }).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, sessions: mentorSessions }, { status: 200 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}