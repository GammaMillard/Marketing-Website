export interface Product {
    name : string,
    img : string,
    price : number,
    id: number
}

export const products : Array<Product> = [
    {
        name : 'Orange Juice',
        img : '/orangeJuice.jpg',
        price : 4,
        id : 1
    },
    {
        name : 'Apple Juice',
        img : '/appleJuice.jpg',
        price : 9,
        id: 2
    },
    {
        name : 'Grape Juice',
        img : '/grapeJuice.jpg',
        price : 12,
        id : 3
    },
]

