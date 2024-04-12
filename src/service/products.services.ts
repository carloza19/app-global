import { ProductInterface } from "../interfaces/product.interfaces"

const API_URL = 'http://localhost:3002/v1/products'

export const getAll = async (): Promise<ProductInterface[]> => {
    const res = await fetch(API_URL)
    const productsList = await res.json()
    return productsList
}


export const getById = async (id: string): Promise<ProductInterface> => {
    const res = await fetch(`${API_URL}/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return await res.json()
}

export const updateProduct = async (data: ProductInterface): Promise<ProductInterface> => {

    const res = await fetch(`${API_URL}/${data._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) {
        throw new Error('Failed to update product');
    }
    return await res.json()
}