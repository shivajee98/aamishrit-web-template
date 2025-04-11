// /src/app/(root)/product/[id]/page.tsx

import ProductDetailPage from "@/components/product/product-detail-page"
import { getProductById } from "@/https/api" // Should talk to real backend

interface Props {
    params: { id?: string }
}

export default async function ProductPage(props: Props) {
    const idStr = props?.params?.id
    const idNum = Number(idStr)

    if (isNaN(idNum)) {
        console.error("Invalid product ID:", idStr)
        return <div>Invalid product ID</div>
    }

    const product = await getProductById(idNum)

    if (!product) return <div>Product Not Found</div>

    return <ProductDetailPage product={product} />
}
