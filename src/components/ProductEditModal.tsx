import React, { useState } from 'react';
import { ProductInterface } from '../interfaces/product.interfaces';


interface Props {
  product: ProductInterface;
  onSave: (updatedProduct: ProductInterface) => void;
  onClose: () => void;
}

const ProductEditModal: React.FC<Props> = ({ product, onSave, onClose }) => {
  const [editedProduct, setEditedProduct] = useState<ProductInterface>({ ...product });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <div className="modal">
      <div className='overlay'></div>
      <div className="modal-container">
        <h2>Editar Producto</h2>
        <form className='form'>
          <div className='form-item'>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedProduct.title}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-item'>
            <label htmlFor="description">Descripción</label>
            <input
              type="text"
              id="description"
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-item'>
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              id="price"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className="button-container">
          <button onClick={handleSave}>Guardar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductEditModal;