"use client"

import { DeleteProduct } from "@/actions/products";
import Link from "next/link";
import { useOptimistic } from "react";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
};

export const ProductsDetail = ({products}: {
    products: Product[]
}) => {

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter((product) => product.id !== productId)
    })

    const removeProductById = async (productId: number) => {
        setOptimisticProducts(productId)
        await DeleteProduct(productId)
    }

    return (
        <div>
            <ul className="p-4 gap-8">
                {optimisticProducts.map((product) => (
                    <li key={product.id} className="p-4 my-4 bg-white shadow-md rounded-lg text-black">
                        <h2 className="text-xl font-semibold">
                            <Link href={`/products-db/${product.id}`} >
                                {product.title}
                            </Link>
                        </h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">{product.price}</p>
                        <form action={removeProductById.bind(null, product.id)}>
                            <button
                            type="submit"
                            className="px-4 py-2 mt-5 bg-red-500 hover:bg-red-600 rounded-lg text-white"
                            >
                                Delete
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    )


}