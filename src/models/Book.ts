export interface Book {
    id: number,
    title: string,
    author: string,
    price: number,
}

export interface BookInCart extends Book {
    // BookInCart hereda Book y se le agrega 'qty' que representa la cantidad de libros en el carro
    qty: number
}