"use server"

import { addProduct, deleteProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Error = {
    title?: string;
    price?: string;
    description?: string;
}

export type FormState = {
    errors: Error;
}

export async function CreateProduct(prevState: FormState, formData: FormData) {

    const errors: Error = {}

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    if (!title) {
        errors.title = "Title is required"
    }
    if (!price) {
        errors.price = "price is required"
    }
    if (!description) {
        errors.description = "description is required"
    }

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    await addProduct(title, parseInt(price), description)
    return redirect("/products-db")

}
export async function EditProduct(id: number,prevState: FormState, formData: FormData) {

    const errors: Error = {}

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    if (!title) {
        errors.title = "Title is required"
    }
    if (!price) {
        errors.price = "price is required"
    }
    if (!description) {
        errors.description = "description is required"
    }

    if (Object.keys(errors).length > 0) {
        return { errors }
    }

    await updateProduct(id, title, parseInt(price), description)
    return redirect("/products-db")

}


export async function DeleteProduct(id:number) {
    await deleteProduct(id)
    revalidatePath("products-db")
}
