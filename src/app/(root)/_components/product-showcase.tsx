import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useProducts } from "@/hooks/useProducts"
import Link from "next/link"

const ProductShowcase = () => {
    const { products, loading, error } = useProducts()

    if (loading) return <div className="text-center py-20">Loading...</div>
    if (error) return <div className="text-center py-20 text-red-600">Error: {error}</div>

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="section-title text-brown-heading">Featured Products</h2>
                <p className="text-center text-brown-text/80 max-w-2xl mx-auto mb-12">
                    Discover our most popular organic products, handcrafted with premium ingredients for your health and
                    enjoyment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:grid-cols-4 lg:gap-12">
                    {products.map((product) => (
                        <Link href={`/product/${product.ID}`} className="block">
                            <div key={product.ID} className="product-card">
                                <div className="relative overflow-hidden h-64">
                                    <Image
                                        src={product.images?.[0] || "/placeholder.svg"}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-luxury-text mb-2">{product.name}</h3>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-lg font-bold text-luxury-dark">₹{product.price.toFixed(2)}</span>
                                        <Button variant="outline" className="border-luxury-medium text-luxury-dark hover:bg-luxury-light">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase
