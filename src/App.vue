<script setup>
import BottomNav from './components/BottomNav.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F0F0F0] flex justify-center items-center overflow-hidden">
    <div
      class="w-[390px] h-[844px] bg-white rounded-[55px] shadow-[0_0_80px_rgba(0,0,0,0.1)] border-[8px] border-white relative overflow-hidden flex flex-col"
    >
      <router-view />

      <BottomNav />

      <div class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[130px] h-1.5 bg-black rounded-full z-50"></div>
    </div>
  </div>
</template>

<style>
@import 'tailwindcss';
@theme {
  --color-seen-accent: #635ad9;
}
</style>
