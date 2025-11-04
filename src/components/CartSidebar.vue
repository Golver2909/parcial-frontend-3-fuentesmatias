<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['close'])
</script>

<template>
    <!-- Overlay -->
    <div v-if="open" @click="emit('close')" class="fixed inset-0 bg-black bg-opacity-40 transition-opacity z-40"></div>

    <!-- Sidebar -->
    <aside
        class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col"
        :class="open ? 'translate-x-0' : 'translate-x-full'">
        <!-- Header -->
        <div class="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-emerald-700">Tu Carrito</h2>
            <button @click="emit('close')" class="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Lista de libros -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
            <div v-for="n in 3" :key="n"
                class="flex items-center justify-between bg-emerald-50 border border-emerald-100 p-3 rounded-lg">
                <div>
                    <h3 class="font-medium text-gray-800">Libro {{ n }}</h3>
                    <p class="text-sm text-gray-500">$ {{ n * 2000 }}</p>
                </div>
                <button class="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Totales -->
        <div class="p-4 border-t border-gray-200 bg-emerald-100">
            <div class="flex justify-between mb-2">
                <span class="font-medium text-gray-700">Total de items:</span>
                <span>3</span>
            </div>
            <div class="flex justify-between mb-4">
                <span class="font-medium text-gray-700">Total:</span>
                <span class="font-semibold text-emerald-700">$6000</span>
            </div>
            <button class="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                Finalizar compra
            </button>
        </div>
    </aside>
</template>
