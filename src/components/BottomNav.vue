<template>
  <div
    class="fixed bottom-0 left-0 w-full bg-white shadow-[0_-5px_20px_0px_rgba(0,0,0,0.05)] z-50 pb-[env(safe-area-inset-bottom)]"
  >
    <div class="h-[68px] flex items-center justify-around px-4 relative">
      <!-- Home -->
      <div
        @click="$router.push('/')"
        :class="[
          isActive('/') ? 'text-purple-500' : 'text-gray-400',
          'w-10 h-10 flex items-center justify-center cursor-pointer transition-colors',
        ]"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>

      <!-- Stats -->
      <div class="w-10 h-10 flex items-center justify-center text-gray-400">
        <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
          <path d="M3 17h4V7H3v10zm7 0h4V3h-4v14zm7 0h4v-6h-4v6z" />
        </svg>
      </div>
      <!-- Center Placeholder -->
      <div class="w-12 h-12"></div>

      <!-- Center Action -->
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl cursor-pointer transition-transform active:scale-95"
      >
        ⇄
      </div>

      <!-- Cards -->
      <div
        @click="$router.push('/cards')"
        :class="[
          isActive('/cards') ? 'text-purple-500' : 'text-gray-400',
          'w-10 h-10 flex items-center justify-center cursor-pointer transition-colors',
        ]"
      >
        <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
          <path
            d="M21 7H3c-1.1 0-2 .9-2 2v6
              c0 1.1.9 2 2 2h18
              c1.1 0 2-.9 2-2V9
              c0-1.1-.9-2-2-2zm0
              8H3v-6h18v6zm-3-2h-4v-2h4v2z"
          />
        </svg>
      </div>

      <!-- More -->
      <div class="w-10 h-10 flex items-center justify-center text-gray-400">
        <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
          <path
            d="M3 3h8v8H3V3zm10 0h8v8h-8V3z
              M3 13h8v8H3v-8zm10 0h8v8h-8v-8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
