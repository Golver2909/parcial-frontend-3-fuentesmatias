<script setup lang="ts">

import { defineEmits, ref } from 'vue'
const emit = defineEmits(['toggle-cart'])
const isOpen = ref(false)

</script>

<template>
    <nav class="bg-emerald-600 shadow-md text-white">
        <div class="container mx-auto flex items-center justify-between px-4 py-3">
            <h1 class="text-xl font-semibold tracking-wide">BookStore</h1>

            <div class="hidden md:flex space-x-6">
                <a href="#" class="hover:text-emerald-200">Inicio</a>
                <a href="#" class="hover:text-emerald-200">Libros</a>
                <a href="#" class="hover:text-emerald-200">Contacto</a>
            </div>

            <div class="flex items-center space-x-2">
                <!-- Botón carrito -->
                <button @click="emit('toggle-cart')"
                    class="relative p-2 bg-emerald-700 rounded-sm hover:bg-emerald-800">

                    <!-- ACA INDICAMOS EN EL ICONO DEL CARRO CUANTOS LIBROS HAY EN EL CARRO -->
                    <!-- CAMBIAR 'false' por sintaxis: si hay mas de 0 -> true -->
                    <div v-if="false"
                        class="p-1 h-4 bg-red-600 rounded-full text-white absolute z-10 -top-2 -right-2 flex justify-center items-center text-sm font-semibold">
                        <!-- VARIABLE PARA INDICAR CANTIDAD VA ACA -->
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                </button>

                <!-- Botón móvil -->
                <button @click="isOpen = !isOpen" class="md:hidden p-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Menú móvil -->
        <div v-if="isOpen" class="md:hidden px-4 pb-3 space-y-2 bg-emerald-700">
            <a href="#" class="block py-1 hover:text-emerald-200">Inicio</a>
            <a href="#" class="block py-1 hover:text-emerald-200">Libros</a>
            <a href="#" class="block py-1 hover:text-emerald-200">Contacto</a>
        </div>
    </nav>
</template>
