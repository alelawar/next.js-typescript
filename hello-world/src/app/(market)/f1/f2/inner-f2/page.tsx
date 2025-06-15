import Link from "next/link";

export default function InnerF2() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Inner F2 Page</h1>
            <p className="text-gray-600">This is the inner F2 page content.</p>
            <Link href="/f5" className="text-blue-500 hover:underline">
                Go to F5 Page
            </Link>
        </div>
    );
}   