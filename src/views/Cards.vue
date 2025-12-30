<template>
  <div class="flex-1 flex flex-col bg-white overflow-hidden pt-12 px-6">
    <header class="flex justify-between items-center mb-8">
      <button
        @click="$router.push('/')"
        class="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-xl"
      >
        ←
      </button>
      <h2 class="font-extrabold text-lg">Cards</h2>
      <div class="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-xs">⠿</div>
    </header>

    <div class="flex gap-8 mb-8 text-sm font-bold border-b border-gray-100 pb-1">
      <span class="text-black border-b-2 border-black pb-3 -mb-1">Accounts</span>
      <span class="text-gray-300">Cards</span>
      <span class="text-gray-300">Statement</span>
    </div>

    <div class="mb-8">
      <div
        class="bg-gradient-to-br from-[#635ad9] to-[#21114a] rounded-[35px] p-7 text-white h-52 shadow-2xl flex flex-col justify-between relative overflow-hidden"
      >
        <div class="flex justify-between items-start">
          <span class="text-[10px] font-bold uppercase tracking-widest opacity-80">Seen Card</span>
          <span class="text-xl italic font-serif">VISA</span>
        </div>
        <div class="text-xl tracking-[0.25em] font-medium text-center">•••• •••• •••• 3700</div>
        <div class="flex justify-between items-end">
          <div class="text-left">
            <p class="text-[8px] opacity-40 uppercase mb-1">Card Holder</p>
            <p class="text-xs font-bold tracking-wide">Leo Carder</p>
          </div>
          <div class="text-[10px] bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl font-bold">Show details</div>
        </div>
      </div>
      <button
        class="w-full mt-4 py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 text-xs font-bold hover:bg-gray-50 transition"
      >
        + Add Card
      </button>
    </div>

    <div class="flex-1 overflow-y-auto pb-28 space-y-4">
      <div class="bg-gray-50 rounded-[25px] p-5 flex justify-between items-center">
        <div class="text-left">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-1">Card Balance</p>
          <p class="text-2xl font-black text-gray-900">$2,578.13</p>
        </div>
        <button
          class="bg-white border border-gray-100 text-[11px] px-5 py-2.5 rounded-2xl font-extrabold shadow-sm active:scale-95 transition"
        >
          Add Balance
        </button>
      </div>

      <div class="space-y-3">
        <div
          v-for="item in [
            { i: '⚙️', t: 'Card Settings', c: 'bg-blue-50 text-blue-500' },
            { i: '✿', t: 'Linked Accounts', c: 'bg-green-50 text-green-500' },
          ]"
          class="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-[22px] hover:shadow-md transition cursor-pointer"
        >
          <div class="flex items-center gap-4">
            <div :class="[item.c, 'w-10 h-10 rounded-full flex items-center justify-center text-sm']">{{ item.i }}</div>
            <span class="text-sm font-extrabold text-gray-800">{{ item.t }}</span>
          </div>
          <span class="text-gray-300 text-xl font-light">›</span>
        </div>
      </div>
    </div>
  </div>
</template>
