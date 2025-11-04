import type { Book } from "@/models/Book";
import { defineStore } from "pinia";

interface BookState {
    isLoading: boolean,
    data: Book[],
    error: string | null,
}

export const useBookStore = defineStore('book',
    {
        state: (): BookState => ({
            isLoading: false,
            data: [],
            error: null
        }),
        actions: {
            setInitialData(books: Book[]) {
                this.data = books
            }
        },
        getters: {
            getBooks(): Book[] {
                return this.data
            }
        }
    }
)