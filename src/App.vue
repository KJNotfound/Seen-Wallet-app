<script setup>
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <router-view />
    <BottomNav />
  </div>
</template>

<style>
@import 'tailwindcss';
@theme {
  --color-seen-accent: #635ad9;
}
</style>
