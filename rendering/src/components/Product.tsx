
export default async function Product() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return <div className="">Product</div>
}