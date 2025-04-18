"use client"

import { useAllCategories } from "@/hooks/useCategory"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const ShopSection = () => {
    // Fetch categories using the custom hook
    const { data: categories, isLoading } = useAllCategories();

    // Show loading state if categories are still being fetched
    if (isLoading) return <p>Loading...</p>;

    // Handle case where no categories are available
    if (!categories || categories.length === 0) return <p>No categories found.</p>;

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-brown-heading">Shop by Category</h2>
                    <p className="text-center text-brown-text/80 max-w-2xl mx-auto mb-12">
                        Explore our carefully curated collection of premium organic products, each crafted with attention to quality
                        and sustainability.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {categories.map((category) => (
                        <div key={category.ID} className="product-card flex flex-col">
                            <div className="relative overflow-hidden h-64">
                                {/* Use the first image from the images array, fallback to placeholder */}
                                <Image
                                    src={category.images?.[0] || "/placeholder.svg"}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow bg-white">
                                <h3 className="text-2xl font-semibold text-luxury-dark mb-2">{category.name}</h3>
                                <p className="text-luxury-text/70 mb-4 flex-grow">{category.description || "No description available"}</p>
                                <Link href={`/categories/${category.ID}`}>
                                    <Button className="w-full bg-brown-heading hover:text-brown-background text-brown-light-text hover:bg-brown-heading/80 transition duration-300 ease-in-out">
                                        Browse {category.name}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ShopSection
