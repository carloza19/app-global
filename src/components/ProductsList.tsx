interface Props {
    products: Array<{
        id: string,
        title: string,
        thumbnail: string,
        price: number
    }>
}

const ProductList = ({ products }: Props) => {
    return (
        <ul>
            {products.map(product => {
                return (
                    <li key={product.id}>
                        <button>
                            <img src={product.thumbnail} alt='Imagen del producto' />
                            <h2>{`$${product.price}`}</h2>
                            <p>{product.title}</p>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProductList;