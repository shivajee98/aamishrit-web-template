"use client"


import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ArrowRight, ShoppingCart } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/react-redux/store"
import { removeFromCart, updateQuantity } from "@/react-redux/slices/cartSlice"
import EmptyState from "@/components/global/empty-state"

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cartReducer.items)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleRemoveItem = (id: string, name: string) => {
    dispatch(removeFromCart(id))
    toast.success(`${name} removed from cart`)
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const tax = subtotal * 0.05
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <EmptyState
          title="Your cart is empty"
          description="Looks like you haven't added anything to your cart yet."
          icon="shopping-cart"
          action={
            <Button onClick={() => router.push("/")} className="rounded-full bg-brand-600 hover:bg-brand-700">
              Continue Shopping
            </Button>
          }
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
        Your Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm overflow-hidden">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl text-gray-900">Cart Items ({cartItems.length})</CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-6 group">
                    <div className="relative h-24 w-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={item.productImages[0] || "/placeholder.svg?height=96&width=96"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <Link
                          href={`/product/${item.id}`}
                          className="font-medium text-gray-900 hover:text-brand-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <span className="font-medium">₹{(item.price * item.quantity)}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        ₹{item.price} × {item.quantity}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-full overflow-hidden">
                          <button
                            className="px-3 py-1 hover:bg-gray-100 hover:text-brand-600"
                            onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-4 py-1 border-x">{item.quantity}</span>
                          <button
                            className="px-3 py-1 hover:bg-gray-100 hover:text-brand-600"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="rounded-full border-gray-200 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200"
            >
              Continue Shopping
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/checkout")}
              className="rounded-full border-gray-200 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="border-0 shadow-sm sticky top-8">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xl text-gray-900">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (5%)</span>
                <span className="font-medium">₹{tax}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <Button
                className="w-full mt-6 rounded-full bg-brand-600 hover:bg-brand-700"
                onClick={() => router.push("/checkout")}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>

              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p>Free shipping on orders over ₹500</p>
                <p>Taxes calculated at checkout</p>
                <p>Secure payments with all major credit cards</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
