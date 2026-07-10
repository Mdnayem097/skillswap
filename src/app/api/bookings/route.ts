import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/Booking";
import Session from "@/models/Session";
import { authProxy } from "@/lib/authProxy";

export async function POST(req: Request) {
  try {
    // ১. চেক করা ইউজার লগইন আছে কিনা
    const user = await authProxy();
    if (!user) {
      return NextResponse.json({ error: "Please log in to book a session." }, { status: 401 });
    }

    await dbConnect();
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID is required." }, { status: 400 });
    }

    // ২. সেশনটি ডাটাবেজে আছে কিনা তা চেক এবং মেন্টর আইডি বের করা
    const session = await Session.findById(sessionId);
    if (!session) {
      return NextResponse.json({ error: "Mentorship session not found." }, { status: 404 });
    }

    // নিজের স্লট নিজে বুক করা আটকানো (Optional)
    if (session.mentorId.toString() === user.userId) {
      return NextResponse.json({ error: "You cannot book your own mentorship slot." }, { status: 400 });
    }

    // ৩. নতুন বুকিং ডাটাবেজে ইনসার্ট করা
    const newBooking = await Booking.create({
      sessionId: session._id,
      mentorId: session.mentorId,
      learnerId: user.userId,
      learnerName: user.email.split("@")[0],
      learnerEmail: user.email,
      status: "confirmed",
    });

    return NextResponse.json({
      success: true,
      message: "🎉 Session booked successfully!",
      bookingId: newBooking._id,
    }, { status: 201 });

  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Booking process failed";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}