import Link from "next/link";

export default function F2() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">F2 Page</h1>
            <p className="text-gray-600">This is the F2 page content.</p>
            <Link href="/f4">
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go to F4
                </button>
            </Link>
        </div>
    );
}