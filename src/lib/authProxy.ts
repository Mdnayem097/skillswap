import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

interface AuthUser {
  userId: string;
  email: string;
  role: string;
}

export async function authProxy(): Promise<AuthUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);
    return decoded;
  } catch {
    return null;
  }
}