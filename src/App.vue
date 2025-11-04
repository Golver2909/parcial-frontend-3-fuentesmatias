<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import CartSidebar from './components/CartSidebar.vue';
import { ref } from 'vue';

const isCartOpen = ref(false);

</script>

<template>
  <div class="min-h-screen bg-emerald-50 text-gray-800">
    <Navbar @toggle-cart="isCartOpen = !isCartOpen" />
    <main class="container mx-auto px-4 py-6">
      <RouterView />
    </main>
    <CartSidebar :open="isCartOpen" @close="isCartOpen = false" />
  </div>
</template>

<style scoped></style>
