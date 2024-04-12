export interface ProductInterface {
    _id: string,
    title: string,
    price: number,
    description: string,
    img: {
        src: string,
        alt: string
    },
    createdAt: string,
    updatedAt: string
}