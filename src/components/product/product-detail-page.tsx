"use client"

import { useState } from "react"
import Image from "next/image"
import { Product } from "@/types"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setCart } from "@/store/cartSlice"

export default function ProductDetailPage({ product }: { product: Product }) {
  const images = product.images?.length ? product.images : ["/placeholder.svg"]
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const dispatch = useDispatch();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value)
    if (!isNaN(val) && val > 0) setQuantity(val)
  }

  const handleAddToCart = () => {
    dispatch(setCart({ product, quantity }))
    router.push("/checkout")

  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* 🖼️ Left: Image Gallery */}
      <div>
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl shadow overflow-hidden">
          <Image
            src={selectedImage}
            alt={`Main image of ${product.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-thin">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 ${img === selectedImage ? "border-black" : "border-transparent"}`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1} of ${product.name}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 📦 Right: Product Info */}
      <div className="flex flex-col justify-start gap-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <label htmlFor="quantity" className="text-lg font-medium">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="border px-4 py-2 rounded-lg text-lg"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Dynamic Price */}
        <div className="text-2xl font-semibold text-green-600">
          ₹{(product.price * quantity).toLocaleString("en-IN")}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-fit bg-black text-white px-6 py-3 rounded-xl shadow hover:scale-105 active:scale-95 transition-transform"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
