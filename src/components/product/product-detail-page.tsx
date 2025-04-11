import { Product } from "@/types"
import Image from "next/image"

export default function ProductDetailPage({ product }: { product: Product }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-lg font-semibold text-green-700">₹{product.price}</p>
      {product.productImages?.length > 0 && (
        <Image
          src={product.images?.[0] || "/placeholder.svg"}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-xl"
        />
      )}

    </div>
  )
}
