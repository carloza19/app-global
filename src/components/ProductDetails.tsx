import { ProductInterface } from "../interfaces/product.interfaces"


interface Props {
    product: ProductInterface | null;
}


const ProductDetails: React.FC<Props> = ({ product }) => {
    return (
        <>
            <img src={product?.img.src} alt={product?.img.alt} />
            <h2>{`$${product?.price}`}</h2>
            <p>{product?.title}</p>
            <p>{product?.description.toString()}</p>
        </>
    )
}

export default ProductDetails