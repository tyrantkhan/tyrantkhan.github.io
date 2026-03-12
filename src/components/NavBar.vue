<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const menuOpen = ref(false)

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const mq = window.matchMedia('(min-width: 768px)')
function onBreakpoint(e) {
  if (e.matches && menuOpen.value) {
    menuOpen.value = false
  }
}
mq.addEventListener('change', onBreakpoint)

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
    <!-- Desktop nav -->
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

    <!-- Mobile hamburger -->
    <button
      class="md:hidden bg-transparent border-none p-1 cursor-pointer"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path v-if="!menuOpen" stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" d="M6 6l12 12M6 18L18 6" />
      </svg>
    </button>

  </nav>

  <!-- Mobile menu overlay — teleported to body for proper fixed positioning -->
  <Teleport to="body">
    <Transition name="menu">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
      >
        <button
          class="absolute top-5 right-8 bg-transparent border-none p-1 cursor-pointer"
          @click="menuOpen = false"
          aria-label="Close menu"
        >
          <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-dark text-lg font-medium uppercase tracking-widest no-underline hover:text-accent transition-colors duration-300"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
        <RouterLink
          to="/resume"
          class="text-dark text-lg font-medium uppercase tracking-widest no-underline hover:text-accent transition-colors duration-300"
          @click="menuOpen = false"
        >
          Resume
        </RouterLink>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
