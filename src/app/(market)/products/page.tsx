
import Link from "next/link";


export default async function Products() {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay for loading effect
    const productsId = 100;
    return (
        <>
            <h1 className="text-2xl font-bold text-center">Products Page</h1>
            <div className="w-4xl mx-auto">
                {Array.from({ length: productsId }, (_, i) => (
                    <div
                        key={i}
                        className="p-4 mb-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-xl font-semibold">
                            Product {i + 1}
                        </h2>
                        <Link href={`/products/${i + 1}`} className="text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}