import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductInterface } from "../interfaces/product.interfaces"
import { getById } from "../service/products.services"
import ProductEditModal from './ProductEditModal';



const ProductDetails = () => {
    const { productId } = useParams<{ productId: string | undefined }>()
    const [product, setProduct] = useState<ProductInterface | null>(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState<Boolean>(false);

    useEffect(() => {
        if (productId) {
            getById(productId)
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productId]);

    const handleSaveProduct = (updatedProduct: ProductInterface) => {
        // Save the updated product data (e.g., make API call)
        console.log('Updated Product:', updatedProduct);
        // For demonstration purposes, we'll just update the state directly
        setProduct(updatedProduct);
    };

    const handleOpenEditPopup = () => {
        setIsEditPopupOpen(true);
    };

    const handleCloseEditPopup = () => {
        setIsEditPopupOpen(false);
    };

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
                <button onClick={handleOpenEditPopup}>Edit</button>
                {isEditPopupOpen && (
                    <ProductEditModal
                        product={product}
                        onSave={handleSaveProduct}
                        onClose={handleCloseEditPopup}
                    />
                )}
            </div>
        </>

    )
}

export default ProductDetails