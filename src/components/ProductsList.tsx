import { Link } from "react-router-dom"
import { Product } from "../App"

interface Props {
    products: Array<Product>
}

const ProductList = ({ products }: Props) => {
    return (
        <>
            <h3>Lista de Productos</h3>
            <ul>
                {products.map(product => {
                    return (

                        <li key={product._id} >
                            <Link to={`/detalle/${product._id}`}>
                                <img src={product.img.src} alt={product.img.alt} />
                                <h2>{`$${product.price}`}</h2>
                                <p>{product.title}</p>
                            </Link>
                        </li>

                    )
                })}
            </ul>
        </>

    )
}

export default ProductList;