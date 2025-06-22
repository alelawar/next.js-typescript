"use client"
// import { ServerSideFunction } from "@/utils/server-utils"

import { useTheme } from "@/components/theme-provider"
import React from "react";

import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
    // const result = ServerSideFunction()
    const theme = useTheme();
    const result = clientSideFunction();
    const settings = {
        dots: true,
    };
    return (
        <>
            <h1 className="my-8 text-center" style={{ color: theme.colors.primary }}>Image Slider Client Components</h1>
            <p>{result}</p>
        </>
    )
}