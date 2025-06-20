import Product from "@/components/Product";
import { Reviews } from "@/components/Reviews";
import { Suspense } from "react";

export default function ProductReviewsPage() {
    return (
        <div className="">
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Bentar</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Bentar</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}