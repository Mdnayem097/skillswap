import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Session from "@/models/Session";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "latest";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { shortDescription: { $regex: search, $options: "i" } },
      ];
    }

    if (category && category !== "all") {
      query.category = category;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sortOptions: any = { createdAt: -1 }; 
    if (sort === "price-low") sortOptions = { price: 1 };
    if (sort === "price-high") sortOptions = { price: -1 };

    const sessions = await Session.find(query).sort(sortOptions);

    return NextResponse.json({ success: true, count: sessions.length, sessions }, { status: 200 });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Failed to fetch sessions";
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}