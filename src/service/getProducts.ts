import { Product } from "../App";

const API_URL = 'http://localhost:3002/v1/products'

export const getAll = async (): Promise<Product[]> => {
    const res = await fetch(API_URL)
    const productsList = await res.json()
    return productsList
}


export const getById = async (id: string): Promise<Product> => {
    const res = await fetch(`${API_URL}/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return await res.json()
}