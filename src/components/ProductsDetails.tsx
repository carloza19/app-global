interface Props {
    product: {
        id: string,
        title: string,
        thumbnail: string,
        price: number
    }
}

const ProductDetails = ({ product }: Props) => {
    return (
        <div className="card-detail">
            <img src={product.thumbnail} alt='Imagen del producto' />
            <h2>{`$${product.price}`}</h2>
            <p>{product.title}</p>
        </div>
    )
}

export default ProductDetails