<script setup lang="ts"></script>

<template>
  <header class="relative">
    <video autoplay loop muted>
      <source src="/videos/ocean.mp4" type="video/mp4" />
    </video>

    <div class="absolute left-40 top-40 h-fit max-w-min">
      <h1 class="text-7xl font-normal text-white">
        Perfect
        <p
          class="flex flex-col h-28 overflow-hidden text-8xl font-bold"
        >
          <span class="animate-wordsVerticalSliding pb-4">Ocean</span>
          <span class="animate-wordsVerticalSliding pb-4">Sun</span>
          <span class="animate-wordsVerticalSliding pb-4">Beach</span>
          <span class="animate-wordsVerticalSliding pb-4">Ocean</span>
        </p>
      </h1>
    </div>
  </header>
</template>

<style scoped></style>
