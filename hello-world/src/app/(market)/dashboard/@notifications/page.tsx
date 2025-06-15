import { Card } from "@/components/card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card >
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <p className="text-gray-600">You have no new notifications.</p>
      <div className="">
        <Link href="/dashboard/archived" className="mt-4 inline-block">
          <p className="text-blue-500 hover:underline">Go to Archived</p>
        </Link>
      </div>
    </Card>
  );
}