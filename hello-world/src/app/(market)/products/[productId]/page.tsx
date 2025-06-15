import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>;
}

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export const metadata: Metadata = {
    title: "Product Detail Page",
    description: "Detailed view of a specific product.",
};


export default async function ProductDetail({ params }: Props) {
    const random = getRandomInt(2);
    if (random === 1) {
       throw new Error("An error occurred while fetching product details.");
    }
    const { productId } = await params;

    return (
        <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">Product Detail Page for Product {productId}</h1>
        </div>
    );
}