import ProductDetailPage from "@/components/product/product-detail-page"
import { getProductsById } from "@/api/products"

interface Props {
    params: { id?: string }
}

export default async function ProductPage({ params }: Props) {
    const id = Number(params?.id)

    if (isNaN(id)) {
        return <div>Invalid Product ID</div>
    }

    const product = await getProductsById(id)

    if (!product) return <div>Product Not Found</div>

    return <ProductDetailPage product={product} />
}
