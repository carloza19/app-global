import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor, fireEvent  } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails'
import { ProductInterface } from '../interfaces/product.interfaces'
import { MemoryRouter } from 'react-router-dom'
import { getById } from '../service/products.services';


const productsList: ProductInterface = {
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

// Mock para la función que trae el producto
const mockFetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(productsList)
});

// Mock global fetch
global.fetch = mockFetch as jest.Mock;


describe('ProductDetail component', () => {
    it('renders product details correctly', async () => {
        const handleEdit = jest.fn();
        const { getByText, getByTestId } = render(<MemoryRouter><ProductDetails stateUpdate={handleEdit} /></MemoryRouter>);
        
        // Wait for the component to fetch data
        await waitFor(() => {
            expect(getByText('Este es un titulo test')).toBeInTheDocument();
            expect(getByText('Touch Gen Doble Protección 1')).toBeInTheDocument();
            expect(getById('idtest123456')).toBeInTheDocument();
        });

        /*fireEvent.click(getByTestId('edit-button'));
        expect(handleEdit).toHaveBeenCalled();*/
        
    },);
});