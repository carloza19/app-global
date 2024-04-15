import { Link } from "react-router-dom"
import { ProductInterface } from "../interfaces/product.interfaces"
import ProductDetails from "./ProductDetails"

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
                                <ProductDetails product={product}/>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

export default ProductList;