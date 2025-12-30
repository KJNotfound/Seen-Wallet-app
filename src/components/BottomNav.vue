<template>
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[68px] bg-white shadow-[0_-5px_20px_0px_rgba(0,0,0,0.05)] flex items-center justify-around px-4 z-50 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-6 after:h-6 after :bg-transparent pb-[env(safe-area-inset-bottom)] >"
    <!--
    Home
    --
  >
    <div
      @click="$router.push('/')"
      :class="[
        isActive('/') ? 'text-purple-500' : 'text-gray-400',
        'w-10 h-10 flex items-center justify-center text-2xl cursor-pointer transition-colors',
      ]"
    >
      🏠
    </div>

    <!-- Stats -->
    <div class="w-10 h-10 flex items-center justify-center text-2xl text-gray-400">📊</div>

    <!-- Center Action -->
    <div
      class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl cursor-pointer transition-transform active:scale-95"
    >
      ⇄
    </div>

    <!-- Cards -->
    <div
      @click="$router.push('/cards')"
      :class="[
        isActive('/cards') ? 'text-purple-500' : 'text-gray-400',
        'w-10 h-10 flex items-center justify-center text-2xl cursor-pointer transition-colors',
      ]"
    >
      💳
    </div>

    <!-- More -->
    <div class="w-10 h-10 flex items-center justify-center text-2xl text-gray-400">⠿</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
