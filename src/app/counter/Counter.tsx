"use client";
import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return (
        <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">Counter Page</h1>
            <p className="mt-4">Current Count: {count}</p>
            <button onClick={increment} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Increment
            </button>
        </div>
    );
}