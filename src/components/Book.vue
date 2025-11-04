<script setup lang="ts">
import type { Book } from '@/models/Book';
import { defineProps } from 'vue';

const props = defineProps<{ book: Book }>()

</script>

<template>
    <div class="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
        <div class="h-40 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold">
            {{ book.title }}
        </div>
        <h3 class="text-lg font-semibold mt-3">{{ book.title }}</h3>
        <p class="text-sm text-gray-600">por {{ book.author }}</p>
        <p class="mt-2 text-emerald-700 font-medium">${{ book.price }}</p>
        <button class="mt-3 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
            Agregar al carrito
        </button>
    </div>
</template>



<style scoped></style>