import { authProxy } from "@/lib/authProxy";
import { redirect } from "next/navigation";
import AddSlotFormClient from "./AddSlotFormClient";

export default async function AddSlotPage() {
  const user = await authProxy();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "mentor") {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-red-50 border border-red-200 text-center rounded-2xl space-y-3">
        <span className="text-4xl">🚫</span>
        <h2 className="text-xl font-bold text-red-700">Access Denied</h2>
        <p className="text-sm text-red-600">Only registered Experts (Mentors) can create or add mentorship slots.</p>
      </div>
    );
  }

  return <AddSlotFormClient />;
}