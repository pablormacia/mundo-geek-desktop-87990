import { useGetCategories } from "../../hooks/useGetCategories"
import CategoryItem from "../category-item/CategoryItem"

const CategoriesListContainer = () => {
    const { categories, loading } = useGetCategories()
    //console.log("Categories y loading desde hook: ", categories, loading)

    if (loading) return <p>Cargando...</p>

    return (
        <>
            {
                categories.map((category, index) => <CategoryItem key={index} category={category} />)
            }
        </>
    )
}

export default CategoriesListContainer