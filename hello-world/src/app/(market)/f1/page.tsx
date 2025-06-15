import Link from "next/link";

export default function F1Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">F1 Page</h1>
      <p className="text-gray-600">This is the F1 page content.</p>
      <Link href="/f1/f2" className="text-blue-500 hover:underline">
        Go to F2 Page
      </Link>
      <Link href="/f3" className="text-blue-500 hover:underline">
        Go to F3 Page
      </Link>
    </div>
  );
}