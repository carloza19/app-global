import { Link } from "react-router-dom"
import { ProductInterface } from "../interfaces/product.interfaces"

interface Props {
    products: Array<ProductInterface>
}

const ProductList = ({ products }: Props) => {
    return (
        <>
            <h3>Lista de Productos</h3>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product._id} >
                            <Link to={`${product._id}`}>
                                <img src={product.img.src} alt={product.img.alt} />
                                <h2>{`$${product.price}`}</h2>
                                <p>{product.title}</p>
                                <p>{product.description}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

export default ProductList;