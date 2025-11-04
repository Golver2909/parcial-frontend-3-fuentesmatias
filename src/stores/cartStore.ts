import type { Book, BookInCart } from "@/models/Book";
import { defineStore } from "pinia";

interface BookCartState {
    isLoading: boolean,
    data: BookInCart[],
    error: string | null,
}


export const useBookCartStore = defineStore('bookCart',
    {
        state: (): BookCartState => ({
            isLoading: false,
            data: [],
            error: null
        }),
        actions: {
            addBook(book:Book):void{
                const exist = this.data.some((b)=>b.id === book.id)

                //Verifico si el libro existe para aumentar su cantidad
                if(exist){
                    const bookFound = this.data.findIndex((b)=>b.id === book.id)
                    this.data[bookFound].qty++
                    return
                }

                //Creo un modelo de 'BookInCart' usando el 'Book' recibido
                const cartBook:BookInCart = {
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    price: book.price,
                    qty:1
                }

                this.data.push(cartBook)
            },
            removeBook(id:number):void{
                const bookIndex = this.data.findIndex((b)=>b.id === id)

                if(this.data[bookIndex].qty===1){
                    this.data.splice(bookIndex,1)
                }else{
                    this.data[bookIndex].qty--
                }
            },
            clearCart():void{
                this.data = []
            }
        },
        getters: {
            getBooks(): BookInCart[] {
                return this.data
            },
            getQtyBooks():number{
                let totalQty:number = 0
                this.data.forEach((b) => totalQty+=b.qty)
                return totalQty
            },
            getTotalValue():number{
                let total:number = 0
                this.data.forEach((b) => total+=(b.qty*b.price))
                return total
            }
        }
    }
)