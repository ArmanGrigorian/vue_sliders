<script setup lang="ts">
const cards = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
</script>

<template>
  <div
    class="relative flex h-[1000px] flex-col items-center justify-center bg-orange-100"
  >
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      :style="{ animationDelay: `calc(${-index * 5000}ms)` }"
      class="absolute inset-0 m-auto aspect-video w-96 animate-cardsVerticalSliding bg-emerald-200 opacity-0"
    ></div>
  </div>
</template>
