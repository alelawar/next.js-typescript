"use client";

import { usePathname } from "next/navigation";

export default function NotFoundPage() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2]; // Assuming the productId is the second segment in the path
    const reviewsId = pathname.split('/')[4]; // Assuming the reviewsId is the fourth segment in the path
    return (
        <h1 className="text-3xl font-bold text-center mt-10">
            404 - Page Not Found
            <br />
            Product ID: {productId}, Review ID: {reviewsId}
        </h1>
    );
}
