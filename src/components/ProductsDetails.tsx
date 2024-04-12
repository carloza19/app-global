import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductInterface } from "../interfaces/product.interfaces"
import { getById } from "../service/products.services"


const ProductDetails = () => {
    const { productId } = useParams<{ productId: string | undefined }>()
    const [product, setProduct] = useState<ProductInterface | null>(null);

    useEffect(() => {
        if (productId) {
            getById(productId)
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productId]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <h3>Detalle del Producto</h3>
            <div className="card-detail">
                <img src={product?.img.src} alt={product?.img.alt} />
                <h2>{`$${product?.price}`}</h2>
                <p>{product?.title}</p>
                <p>{product?.description.toString()}</p>
            </div>
        </>

    )
}

export default ProductDetails