<script setup>
import { ref, h } from 'vue'

const PlusIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M12 5v14M5 12h14' }),
    ])
  },
}

const SwapIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M16 3l5 5-5 5' }),
      h('path', { d: 'M8 21l-5-5 5-5' }),
      h('path', { d: 'M21 8H3' }),
      h('path', { d: 'M3 16h18' }),
    ])
  },
}

const DownloadIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M12 3v12' }),
      h('path', { d: 'M7 10l5 5 5-5' }),
      h('path', { d: 'M5 21h14' }),
    ])
  },
}

const DotsIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
      h('circle', { cx: 12, cy: 5, r: 2 }),
      h('circle', { cx: 12, cy: 12, r: 2 }),
      h('circle', { cx: 12, cy: 19, r: 2 }),
    ])
  },
}

const actions = [
  { label: 'Add', icon: PlusIcon },
  { label: 'Transfer', icon: SwapIcon },
  { label: 'Withdraw', icon: DownloadIcon },
  { label: 'More', icon: DotsIcon },
]

const transactions = ref([
  { id: 1, name: 'Apple Pay', time: '05:24, 10 January', amount: '-$27.89', icon: '', color: 'bg-black' },
  { id: 2, name: 'Google Pay', time: '12:01, 09 January', amount: '-$46.00', icon: 'G', color: 'bg-green-600' },
])
</script>

<template>
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Header -->
    <div class="h-[500px] bg-mesh-gradient relative flex flex-col pt-12 shrink-0">
      <div class="px-6 flex items-center gap-3">
        <img src="https://ui-avatars.com/api/?name=User" class="w-10 h-10 rounded-full border-2 border-white/20" />

        <!-- Search -->
        <div
          class="flex-1 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center px-4 gap-2 text-white/50"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <span class="text-sm">Search</span>
        </div>

        <!-- Header actions -->
        <div class="flex gap-2">
          <div
            class="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white"
          >
            <component :is="SwapIcon" class="w-4 h-4" />
          </div>
          <div
            class="w-9 h-9 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white"
          >
            <component :is="DotsIcon" class="w-4 h-4" />
          </div>
        </div>
      </div>

      <!-- Balance -->
      <div class="mt-10 text-center text-white">
        <p class="text-xs opacity-60 font-medium">Current Balance</p>
        <h1 class="text-[44px] font-bold mt-1 tracking-tight leading-none">$2,578.13</h1>

        <button
          class="mt-5 bg-white/20 backdrop-blur-xl border border-white/30 px-5 py-2 rounded-full text-[11px] font-bold flex items-center gap-2 mx-auto uppercase tracking-wider"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="5" width="20" height="14" rx="3" />
            <path d="M2 10h20" />
          </svg>
          Accounts
        </button>
      </div>

      <!-- Actions -->
      <div class="flex justify-around px-6 mt-10 text-white">
        <div v-for="item in actions" :key="item.label" class="flex flex-col items-center gap-2">
          <div
            class="w-14 h-14 bg-white/15 backdrop-blur-2xl border border-white/25 rounded-full flex items-center justify-center shadow-lg"
          >
            <component :is="item.icon" class="w-6 h-6" />
          </div>
          <span class="text-[11px] font-semibold opacity-80">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div
      class="flex-1 bg-white -mt-10 rounded-t-[40px] relative z-10 p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
    >
      <!-- Receive assets -->
      <div class="bg-white rounded-2xl p-4 mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-50">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="font-bold text-sm">Receive assets</h3>
            <p class="text-[10px] text-gray-400 mt-1">Copy your Unique address to receive money.</p>
          </div>

          <div class="w-8 h-8 bg-seen-accent/10 rounded-lg flex items-center justify-center text-seen-accent">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </div>
        </div>

        <button
          class="w-full bg-seen-accent text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-seen-accent/20"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <rect x="2" y="2" width="13" height="13" rx="2" />
          </svg>
          Copy Address
        </button>
      </div>

      <!-- Transactions -->
      <div class="flex justify-between items-center mb-5">
        <h3 class="font-extrabold text-[15px]">Transaction History</h3>
        <span class="text-blue-500 text-xs font-extrabold">See All</span>
      </div>

      <div class="space-y-6 overflow-y-auto pb-24">
        <div v-for="tx in transactions" :key="tx.id" class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div
              :class="[
                tx.color,
                'w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-bold',
              ]"
            >
              {{ tx.icon }}
            </div>
            <div>
              <p class="font-bold text-sm">{{ tx.name }}</p>
              <p class="text-[10px] text-gray-400 font-medium mt-0.5">{{ tx.time }}</p>
            </div>
          </div>
          <span class="font-extrabold text-sm text-gray-900">{{ tx.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-mesh-gradient {
  background: radial-gradient(at 0% 0%, #1a0b3e 0%, transparent 50%),
    radial-gradient(at 100% 0%, #3e1c8d 0%, transparent 50%), radial-gradient(at 50% 100%, #7d8435 0%, transparent 100%),
    #2a1362;
}
</style>
