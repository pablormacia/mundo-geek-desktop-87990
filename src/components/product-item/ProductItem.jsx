import Card from "../card/Card"

const ProductItem = ({product}) => {
  return (
    <Card>
        <p>{product.title}</p>
    </Card>
  )
}

export default ProductItem