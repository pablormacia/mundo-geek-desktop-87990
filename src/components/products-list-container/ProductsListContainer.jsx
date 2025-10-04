import { useGetProducts } from "../../hooks/useGetProducts"
import ProductItem from "../product-item/ProductItem"
import { useParams } from "react-router-dom"

const CategoriesListContainer = () => {
    /* const params = useParams()
    console.log("Params: ", params) */
    const {categoryId} = useParams()
    const { productsFilteredByCategory, loading } = useGetProducts(categoryId)

    if (loading) return <p>Cargando...</p>

    return (
        <>
            {
                productsFilteredByCategory.map((product, index) => <ProductItem key={index} product={product} />)
            }
        </>
    )
}

export default CategoriesListContainer