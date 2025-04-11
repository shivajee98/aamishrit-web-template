// hooks/useProducts.ts
import { useEffect, useState } from "react"

export interface Product {
    id: number
    name: string
    category: string
    price: number
    images: string
    isNew: boolean
    isBestseller: boolean
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/products")
                if (!res.ok) throw new Error(`HTTP error ${res.status}`)
                const data: Product[] = await res.json()
                setProducts(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return { products, loading, error }
}
