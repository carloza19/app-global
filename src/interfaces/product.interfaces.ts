export interface ProductInterface {
    _id: string,
    title: string,
    price: number, //TODO: Pasar a int
    description: string,
    img: {
        src: string,
        alt: string
    },
    createdAt: string,
    updatedAt: string
}