import { useParams } from "react-router-dom"

interface Props {
    products: Array<{
        id: string,
        title: string,
        thumbnail: string,
        price: number
    }>
}


const ProductDetails = ({products}: Props) => {
    const { productId } = useParams()
    const productFilter = products.find((p) => p.id === productId)

    return (
        <div className="card-detail">
            <img src={productFilter?.thumbnail} alt='Imagen del producto' />
            <h2>{`$${productFilter?.price}`}</h2>
            <p>{productFilter?.title}</p>
        </div>
    )
}

export default ProductDetails