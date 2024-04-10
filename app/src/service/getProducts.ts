import { Product } from "../App";

const API_URL = 'https://api.jsonbin.io/v3/b/63ff3a52ebd26539d087639c'

export const getAll = async (): Promise<Product[]> => {
    const res = await fetch(API_URL)

    const INITIALSTATE = [{
        id: "MLA899081746",
        title: "Apple AirPods (segunda Generacion) Con Estuche De Carga - Blanco - Distribuidor Autorizado",
        thumbnail: "http://http2.mlstatic.com/D_923638-MLA54361048207_032023-I.jpg",
        price: 224999.55,
    },
    {
        id: "MLA1148411397",
        title: "Funda Compatible iPod Touch Gen 5 - 6 - 7 - Doble Protección",
        thumbnail: "http://http2.mlstatic.com/D_677045-MLA50877229591_072022-I.jpg",
        price: 6600,
    }]
    
    const { record: products } = await res.json() as { record: Product[] }
    return INITIALSTATE
}