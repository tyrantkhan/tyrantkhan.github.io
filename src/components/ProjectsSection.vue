<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal('.project-card')

const projects = [
  {
    name: 'Concerto Digital Signage',
    desc: 'An open-source digital signage system used by universities and organizations worldwide. Maintainer of the project and its ecosystem — 450+ stars on GitHub.',
    icon: 'monitor',
    iconColor: 'bg-emerald-500/10 text-emerald-500',
    langs: [{ name: 'Ruby', color: 'bg-[#CC342D]' }],
    url: 'https://github.com/concerto/concerto',
  },
  {
    name: 'GoldSplit',
    desc: 'A lightweight, cross-platform speedrun timer built with Wails. Split comparisons, sum of best, hotkey customization, and always-on-top mode — everything a speedrunner needs, nothing they don\'t.',
    icon: 'timer',
    iconColor: 'bg-red-500/10 text-red-500',
    langs: [{ name: 'Go', color: 'bg-[#00ADD8]' }, { name: 'Svelte', color: 'bg-[#FF3E00]' }],
    url: 'https://github.com/tyrantkhan/goldsplit',
  },
  {
    name: 'Bitbucket CLI',
    desc: 'A fast, interactive CLI for Bitbucket Cloud. Manage repos, pull requests, and pipelines without leaving the terminal. OAuth auth, smart git context, and multiple output formats.',
    icon: 'terminal',
    iconColor: 'bg-blue-500/10 text-blue-500',
    langs: [{ name: 'Go', color: 'bg-[#00ADD8]' }],
    url: 'https://github.com/tyrantkhan/bitbucket-cli',
  },
]
</script>

<template>
  <section id="projects" class="py-24 px-8 bg-bg-alt">
    <div class="max-w-[960px] mx-auto">
      <p class="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Open Source</p>
      <h2 class="font-serif font-normal tracking-tight mb-14 leading-tight" style="font-size: clamp(2rem, 4vw, 3rem)">
        Things I've built
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="project-card group relative flex flex-col p-8 bg-card border border-border rounded-2xl overflow-hidden opacity-0 translate-y-5 transition-all duration-600 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] hover:border-transparent"
        >
          <!-- Top accent bar -->
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <!-- Icon -->
          <div class="mb-4">
            <div :class="['w-10 h-10 rounded-[10px] flex items-center justify-center', project.iconColor]">
              <!-- Timer -->
              <svg v-if="project.icon === 'timer'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <!-- Terminal -->
              <svg v-if="project.icon === 'terminal'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
              <!-- Monitor -->
              <svg v-if="project.icon === 'monitor'" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
          </div>

          <h3 class="font-serif text-xl font-bold mb-2">{{ project.name }}</h3>
          <p class="text-[0.88rem] text-muted leading-relaxed flex-1 mb-5">{{ project.desc }}</p>

          <div class="flex items-center gap-4 flex-wrap">
            <span
              v-for="(lang, j) in project.langs"
              :key="j"
              class="flex items-center gap-1.5 text-xs text-muted font-medium"
            >
              <span :class="['w-2 h-2 rounded-full', lang.color]" />
              {{ lang.name }}
            </span>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="ml-auto text-xs font-semibold text-accent no-underline flex items-center gap-1 hover:gap-2 transition-all duration-300"
            >
              View
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
