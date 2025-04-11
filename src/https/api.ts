import axios from "axios"
import { Product } from "@/types"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000" // Adjust as needed

export async function getProductById(id: string | number): Promise<Product | null> {
    try {
        const res = await axios.get(`${BASE_URL}/api/products/${id}`)
        return res.data
    } catch (err) {
        console.error("Error fetching product", err)
        return null
    }
}
