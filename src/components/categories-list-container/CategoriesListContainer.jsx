import { useGetCategories } from "../../hooks/useGetCategories"
import CategoryItem from "../category-item/CategoryItem"
import styles from './CategoriesListContainer.module.css'

const CategoriesListContainer = () => {
    const { categories, loading } = useGetCategories()
    if (loading) return <p>Cargando...</p>
    return (
        <div className={styles.container}>
            {
                categories.map((category, index) => <CategoryItem key={index} category={category} />)
            }
        </div>
    )
}

export default CategoriesListContainer