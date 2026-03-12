<script setup>
const activities = ['Eating Ice Cream', 'Cycling', 'Hiking', 'Running', 'Reading', 'Drinking Tea']
</script>

<template>
  <section id="beyond" class="py-24 px-8 bg-bg-alt">
    <div class="max-w-[960px] mx-auto text-center">
      <p class="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Beyond the code</p>
      <h2 class="font-serif font-normal tracking-tight mb-14 leading-tight" style="font-size: clamp(2rem, 4vw, 3rem)">
        When I'm offline
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[480px] mx-auto">
        <span
          v-for="activity in activities"
          :key="activity"
          class="px-4 py-1.5 bg-card border border-border rounded-full text-sm text-muted font-medium text-center hover:-translate-y-0.5 transition-transform duration-300"
        >
          {{ activity }}
        </span>
      </div>
    </div>
  </section>
</template>
