import { Card } from "@/components/card";

export default function UsersPage() {
  console.log("UsersPage rendered");
  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">Users | default content</h1>
      <p className="text-gray-600">You have no new user updates.</p>
    </Card>
  );
}   