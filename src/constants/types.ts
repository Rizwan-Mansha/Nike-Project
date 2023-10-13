import { StaticImageData } from "next/image"


interface Image{
    id: number,
    url:StaticImageData[]
}

export type product ={
    id: number,
    name: string,
    tagline: string,
    price: number,
    category: string,
    image: Image[];
    
}

