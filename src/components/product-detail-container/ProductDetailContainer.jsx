import { useGetProduct } from "../../hooks/useGetProduct"
import ProductDetail from "../product-detail/ProductDetail"
import { useParams } from "react-router-dom"

const ProductDetailContainer = () => {
    const {productId} = useParams()
    const { product, loading } = useGetProduct(productId)

    if (loading) return <p>Cargando...</p>

    return (
        <ProductDetail product={product} />
    )
}

export default ProductDetailContainer