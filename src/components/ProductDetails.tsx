import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductInterface } from "../interfaces/product.interfaces"
import { getById, updateProduct } from "../service/products.services"
import ProductEditModal from './ProductEditModal';

interface Props {
    onChange: (newValue: Boolean) => void;
}

const ProductDetails: React.FC<Props> = ({ onChange }) => {
    const { productId } = useParams<{ productId: string | undefined }>()
    const [product, setProduct] = useState<ProductInterface | null>(null);
    const [isEditPopupOpen, setIsEditPopupOpen] = useState<Boolean>(false);
    const [isUpdate, setIsUpdate] = useState<Boolean>(false)

    useEffect(() => {
        if (productId) {
            getById(productId)
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productId, isUpdate]);

    useEffect(() => {
        onChange(isUpdate)
    }, [isUpdate])

    const handleSaveProduct = (updatedProduct: ProductInterface) => {
        updateProduct(updatedProduct).then((data) => {
            if (data) {
                setIsUpdate(true)
            }
        })
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
                <button onClick={handleOpenEditPopup}>Editar</button>
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