
export default function DashboardPage({
  users,
  notifications,
  revenue,
}: {
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

    </>
  );
}