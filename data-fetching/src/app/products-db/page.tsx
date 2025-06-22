import { getProducts } from "@/prisma-db";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
    const products: Product[] = await getProducts()

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-black">
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium">{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

    
}