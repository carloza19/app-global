import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductsList'
import { ProductInterface } from '../interfaces/product.interfaces'
import { MemoryRouter } from 'react-router-dom'

const productsList: ProductInterface[] = [
    {
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
    },
    {
        _id: 'idtest789456',
        title: 'Este es un titulo test',
        description: "Touch Gen Doble Protección 2",
        img: {
            src: "http://http2.mlstatic.com/D_677045-MLA50877229591_072022-I.jpg",
            alt: "Imagen de Funda ipod"
        },
        createdAt: "2024-04-13T23:37:10.359Z",
        updatedAt: "2024-04-13T23:43:49.373Z",
        price: 6600
    }
]



describe('Component ProductList', () => {
    it('renderiza la lista de productos correctamente con varios items mostrando el mismo titulo', () => {
        render(<MemoryRouter><ProductList products={productsList} /></MemoryRouter>);
        const productListItems = screen.getAllByText('Este es un titulo test');
        productListItems.forEach((item: HTMLElement) => {
            expect(item).toBeInTheDocument();
        });
    });

    it('renderiza la lista de productos correctamente con varios items mostrando destinta descripción', () => {
        const { getByText } = render(<MemoryRouter><ProductList products={productsList} /></MemoryRouter>);

        // Verificar si los nombres y precios de los productos se renderizan correctamente
        expect(getByText('Touch Gen Doble Protección 1')).toBeInTheDocument();
        expect(getByText('Touch Gen Doble Protección 2')).toBeInTheDocument();
    });
})