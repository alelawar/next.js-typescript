"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({error, reset}: {
  error: Error
  reset: () => void
}) {
    const router = useRouter()
    const reload = (() => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    })
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-700">An error occurred while fetching product details.</p>
        <pre className="mt-4 text-sm text-gray-500">{error.message}</pre>
        <button onClick={reload} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Try Again
        </button>
      </div>
    </div>
  );
}