import Card from "../card/Card"
import { Link } from "react-router-dom"

const CategoryItem = ({ category }) => {
  return (
    <Link to={`/products/${category.id}`}>
      <Card>
        <img src={category.image} alt="Imagen de categoría" />
        <p>{category.title}</p>
      </Card>
    </Link>
  )
}

export default CategoryItem