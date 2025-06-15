export default function ArchivedNotificationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Archived Notifications</h1>
      <p className="text-gray-600">You have no archived notifications.</p>
      <div className="mt-4">
        <a href="/dashboard" className="text-blue-500 hover:underline">
          Go back to Dashboard
        </a>
      </div>
    </div>
  );
}