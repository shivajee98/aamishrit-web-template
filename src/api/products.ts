//  api/products.ts
import axios from "axios";
import { Product } from "@/types";

export async function getAllProducts(): Promise<Product[]> {
    const res = await axios.get("/api/products")
    return res.data
}


export async function getProductsById(id: string): Promise<Product[]> {
    const res = await axios.get("/api/products/${id}")
    return res.data
}