import ProductDetailPage from "@/components/product/product-detail-page"
import { getProductsById } from "@/api/products"

interface Props {
    params: { id: string }
}

export default async function ProductPage({ params }: Props) {
    const id = (params.id)

    const product = await getProductsById(id)

    if (!product) return <div>Product Not Found</div>

    return <ProductDetailPage product={product} />
}
