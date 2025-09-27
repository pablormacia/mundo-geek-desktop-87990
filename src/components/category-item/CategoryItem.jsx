import Card from "../card/Card"

const CategoryItem = ({category}) => {
  return (
    <Card>
        <img src={category.image} alt="Imagen de categoría" />
        <p>{category.title}</p>
    </Card>
  )
}

export default CategoryItem