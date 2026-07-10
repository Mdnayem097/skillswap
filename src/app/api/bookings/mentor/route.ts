import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/Booking";
import { authProxy } from "@/lib/authProxy";

export async function GET() {
  try {
    // ১. মেন্টর সেশন চেক
    const user = await authProxy();
    if (!user || user.role !== "mentor") {
      return NextResponse.json({ error: "Unauthorized. Mentors only." }, { status: 403 });
    }

    await dbConnect();

    // ২. এই মেন্টরের সমস্ত বুকিং খুঁজে বের করা এবং সেশনের টাইটেল সহ পপুলেট (Populate) করা
    const mentorBookings = await Booking.find({ mentorId: user.userId })
      .populate("sessionId", "title duration price") 
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, bookings: mentorBookings }, { status: 200 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Failed to fetch bookings";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}