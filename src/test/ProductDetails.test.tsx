import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails'
import { ProductInterface } from '../interfaces/product.interfaces'
import { MemoryRouter } from 'react-router-dom'



const product: ProductInterface = {
    _id: 'idtest123456',
    title: 'Este es un titulo test',
    description: "Touch Gen Doble Protección 1",
    img: {
        src: "http://http2.mlstatic.com/D_677045-MLA50877229591_072022-I.jpg",
        alt: "Imagen de Funda ipod"
    },
    createdAt: "2024-04-13T23:37:10.359Z",
    updatedAt: "2024-04-13T23:43:49.373Z",
    price: 6600
}


describe('ProductDetail component', () => {
    it('renders product details correctly', async () => {
        const { getByText } = render(<MemoryRouter><ProductDetails product={product} /></MemoryRouter>);

        expect(getByText('Este es un titulo test')).toBeInTheDocument();
        expect(getByText('Touch Gen Doble Protección 1')).toBeInTheDocument();

    },);

    it('renders image with correct alt text', () => {
        const { getByAltText } = render(<MemoryRouter><ProductDetails product={product} /></MemoryRouter>);
        const image = getByAltText('Imagen de Funda ipod');
        const src = image.getAttribute('src');
        expect(src).toBe('http://http2.mlstatic.com/D_677045-MLA50877229591_072022-I.jpg');
        expect(image).toBeInTheDocument();
    })
});