<template>
  <div
    class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[340px] h-[68px] bg-white rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.15)] flex justify-around items-center px-4 z-50"
  >
    <div
      @click="$router.push('/')"
      :class="[$route.path === '/' ? 'text-seen-accent' : 'text-gray-300', 'text-2xl cursor-pointer transition-colors']"
    >
      🏠
    </div>

    <div class="text-gray-300 text-2xl">📊</div>

    <div
      class="w-14 h-14 bg-seen-accent rounded-full flex items-center justify-center text-white shadow-[0_8px_20px_rgba(99,90,217,0.4)] -mt-12 border-[5px] border-white cursor-pointer active:scale-90 transition-transform"
    >
      <span class="text-xl">⇄</span>
    </div>

    <div
      @click="$router.push('/cards')"
      :class="[
        $route.path === '/cards' ? 'text-seen-accent' : 'text-gray-300',
        'text-2xl cursor-pointer transition-colors',
      ]"
    >
      💳
    </div>

    <div class="text-gray-300 text-2xl">⠿</div>
  </div>
</template>
