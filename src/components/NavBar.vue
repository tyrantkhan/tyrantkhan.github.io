<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)

const links = [
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#beyond', label: 'Beyond' },
  { href: '#contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400"
    :class="scrolled
      ? 'bg-bg/85 backdrop-blur-xl border-b border-border py-3 px-8'
      : 'py-5 px-8'"
  >
    <RouterLink to="/" class="font-serif text-xl font-bold text-dark tracking-tight no-underline relative inline-flex flex-col items-center">
      <svg class="w-5 h-3 text-accent -mb-1.5" viewBox="0 0 24 14" fill="currentColor">
        <path d="M2 12 L4 4 L8 8 L12 2 L16 8 L20 4 L22 12 Z" />
      </svg>
      HK
    </RouterLink>
    <ul class="hidden md:flex list-none gap-8 items-center">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="text-muted text-xs font-medium uppercase tracking-widest no-underline hover:text-accent transition-colors duration-300"
        >
          {{ link.label }}
        </a>
      </li>
      <li>
        <RouterLink
          to="/resume"
          class="text-muted text-xs font-medium uppercase tracking-widest no-underline hover:text-accent transition-colors duration-300"
        >
          Resume
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
