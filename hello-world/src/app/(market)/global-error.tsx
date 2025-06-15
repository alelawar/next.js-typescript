"use client";

import "../globals.css";

export default function GlobalError() {
    return (
        <html>
            <body>
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-red-600 mb-4">Global Error</h1>
                        <p className="text-lg text-gray-700">An unexpected error occurred.</p>
                        <pre className="mt-4 text-sm text-gray-500">Please try again later.</pre>
                        <button onClick={() => window.location.reload() }>Refresh</button>
                    </div>
                </div>
            </body>
        </html>
    )
}