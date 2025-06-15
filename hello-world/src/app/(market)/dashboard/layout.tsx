export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
  users,
  notifications,
  revenue,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn: boolean = true; // Replace with actual login check logic
  return isLoggedIn ? (

    <div className="p-6">
      <main>{children}</main>

      <div className="mt-10 flex justify-between gap-15">
        <div className="flex flex-col gap-10 w-full">
          <div className="w-full border-2 border-white rounded-2xl">{users}</div>
        <div className="w-full border-2 border-white rounded-2xl">{revenue}</div>
        </div>
          <div className="w-full border-2 border-white rounded-2xl">{notifications}</div>
      </div>
    </div>

  ): (
    login
  );
}
