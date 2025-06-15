"use client";
import { useRouter } from "next/navigation";

export default function OrderProductPage() {
    const Router = useRouter();
    function handleClick() {
        // This function will handle the order placement logic
        console.log("Order placed successfully!");
        Router.push("/")
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Order Product Page</h1>
      <p className="text-lg">This is the order product page.</p>
      <button 
      onClick={handleClick}
      className="text-sm text-gray-500 mt-2 hover:text-white "
      >Place Order</button>
    </div>
  );
}