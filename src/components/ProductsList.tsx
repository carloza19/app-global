import { Link } from "react-router-dom"
import { Product } from "../App"

interface Props {
    products: Array<Product>
}

const ProductList = ({ products }: Props) => {
    return (
        <ul>
            {products.map(product => {
                return (

                    <li key={product.id} >
                        <Link to={`/detalle/${product.id}`}>
                            <img src={product.thumbnail} alt='Imagen del producto' />
                            <h2>{`$${product.price}`}</h2>
                            <p>{product.title}</p>
                        </Link>
                    </li>

                )
            })}
        </ul>
    )
}

export default ProductList;