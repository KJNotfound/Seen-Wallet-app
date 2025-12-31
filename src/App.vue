<script setup>
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <div class="min-h-[100dvh] bg-white flex flex-col">
    <router-view class="flex-1 overflow-y-auto" />

    <BottomNav />
  </div>
</template>

<style>
@import 'tailwindcss';

@theme {
  --color-seen-accent: #635ad9;
}
</style>
