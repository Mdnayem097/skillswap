import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Session from "@/models/Session";
import { authProxy } from "@/lib/authProxy";

export async function POST(req: Request) {
  try {
    const user = await authProxy();
    if (!user || user.role !== "mentor") {
      return NextResponse.json(
        { error: "Unauthorized. Only mentors can add sessions." },
        { status: 403 },
      );
    }

    await dbConnect();
    const {
      title,
      shortDescription,
      fullDescription,
      category,
      price,
      duration,
      imageUrl,
    } = await req.json();

    if (
      !title ||
      !shortDescription ||
      !category ||
      !price ||
      !duration ||
      !imageUrl
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 },
      );
    }

    const newSession = await Session.create({
      mentorId: user.userId,
      title,
      shortDescription,
      fullDescription: fullDescription || shortDescription,
      category,
      price: Number(price),
      duration: Number(duration),
      imageUrl,
      rating: 5.0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Session added successfully!",
        sessionId: newSession._id,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
