import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../App"
import { getById } from "../service/getProducts"

interface Props {
    products: Array<{
        _id: string,
        title: string,
        img: {
            src: string,
            alt: string
        },
        price: number,
        createdAt: string,
        updatedAt: string
    }>
}


const ProductDetails = () => {
    const { productId } = useParams<{ productId: string | undefined }>()
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (productId) {
            getById(productId)
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productId]);



    return (
        <>
            <h3>Detalle del Producto</h3>
            <div className="card-detail">
                <img src={product?.img.src} alt={product?.img.alt} />
                <h2>{`$${product?.price}`}</h2>
                <p>{product?.title}</p>
            </div>
        </>

    )
}

export default ProductDetails