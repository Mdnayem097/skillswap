import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Session from "@/models/Session";
import mongoose from "mongoose";

export async function GET() {
  try {
    await dbConnect();
    
    await Session.deleteMany({});

    const mockSessions = [
      {
        mentorId: new mongoose.Types.ObjectId(),
        title: "Next.js 15 & Production Architecture Review",
        shortDescription: "Get your project reviewed by an expert. Learn Server Actions, Caching, and App Router optimization tactics.",
        fullDescription: "Detailed review...",
        category: "Development",
        price: 49,
        duration: 45,
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
        rating: 4.9
      },
      {
        mentorId: new mongoose.Types.ObjectId(),
        title: "UI/UX Design Systems in Figma",
        shortDescription: "Master auto-layout, components, and design tokens to create highly scalable UI kits for tech products.",
        fullDescription: "Detailed review...",
        category: "Design",
        price: 35,
        duration: 60,
        imageUrl: "https://images.unsplash.com/photo-1561070791-26c113006238?w=500",
        rating: 4.8
      },
      {
        mentorId: new mongoose.Types.ObjectId(),
        title: "System Design & Microservices Roadmap",
        shortDescription: "Learn how to scale applications using horizontal scaling, Redis caching, and message queues.",
        fullDescription: "Detailed review...",
        category: "Architecture",
        price: 75,
        duration: 90,
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
        rating: 5.0
      }
    ];

    await Session.insertMany(mockSessions);
    return NextResponse.json({ message: "Database seeded successfully with 3 sessions!" });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Seed failed";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}