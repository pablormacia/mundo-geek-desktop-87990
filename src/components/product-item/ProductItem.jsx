import Card from "../card/Card"
import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
            <Card>
                <p>{product.title}</p>
            </Card>
        </Link>
    )
}

export default ProductItem