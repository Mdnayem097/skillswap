import { NextResponse } from "next/server";
import { authProxy } from "@/lib/authProxy";

export async function GET() {
  try {
    const user = await authProxy();

    if (!user) {
      return NextResponse.json(
        { isLoggedIn: false, user: null },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        isLoggedIn: true,
        user: { email: user.email, role: user.role },
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { isLoggedIn: false, error: "Auth check failed" },
      { status: 500 },
    );
  }
}
