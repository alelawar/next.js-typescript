import { MetaData } from "next";

type Props = {
    params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<MetaData> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iMac ${id} `);
        }, 4000)
    })
    return {
        title: `Product ${title} detail`,
    }
}


export default async function ProductDetail({ params }: Props) {
    const { productId } = await params;

    return (
        <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">Product Detail Page for Product {productId}</h1>
        </div>
    );
}