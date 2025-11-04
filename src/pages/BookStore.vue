<script setup lang="ts">
import { books } from '@/mock/books';
import { computed, onMounted } from 'vue';
import { useBookStore } from '@/stores/bookStore';
import Book from '@/components/Book.vue';
const store = useBookStore();

onMounted(() => {
    store.setInitialData(books)
})
const availableBooks = computed(() => store.getBooks)

</script>

<template>
    <section>
        <h2 class="text-2xl font-semibold mb-2 text-emerald-700">Nuestros Libros</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Book v-for="book in availableBooks" :key="book.id" :book="book" />
        </div>
    </section>
</template>
