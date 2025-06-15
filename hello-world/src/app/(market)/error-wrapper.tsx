"use client";
import "../globals.css";
import { useState } from 'react';

interface WrapperProps {
    children: React.ReactNode
}

const ErrorSimulator = ({message = "error cuy"}: {
    message?: string
}) => {
    const [error, setError] = useState(false)

    if(error) throw new Error(message);

    return <button onClick={() => setError(true)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Simulate Error</button>
};

export const ErrorWrapper = ({children}: WrapperProps) => {
    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-black border-2 border-white p-4 rounded shadow">
                <h2 className="text-lg font-bold">Error Simulation</h2>
                <ErrorSimulator message="Simulate an error in root layout" />
            </div>
        </div>
        {children}
        </>
    )
}