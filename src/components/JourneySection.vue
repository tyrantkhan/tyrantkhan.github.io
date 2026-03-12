<script setup>
import { ref } from 'vue'

function getRotationDeg(el) {
  const st = window.getComputedStyle(el)
  const m = st.transform
  if (!m || m === 'none') return 0
  const values = m.split('(')[1].split(')')[0].split(',')
  const a = parseFloat(values[0])
  const b = parseFloat(values[1])
  return Math.round(Math.atan2(b, a) * (180 / Math.PI))
}

function startSpin(e) {
  const img = e.currentTarget.querySelector('.logo-spin')
  if (!img) return
  const deg = getRotationDeg(img)
  img.classList.remove('spinning')
  // Force reflow so removing/adding class works
  void img.offsetWidth
  img.style.setProperty('--spin-start', `${deg}deg`)
  img.classList.add('spinning')
}

function stopSpin(e) {
  const img = e.currentTarget.querySelector('.logo-spin')
  if (!img) return
  const deg = getRotationDeg(img)
  img.classList.remove('spinning')
  img.style.transform = `rotate(${deg}deg)`
}

const milestones = [
  {
    year: '2007 — 2011',
    period: 'Graduated May 2011',
    role: 'B.S. Computer & Systems Engineering',
    company: 'Rensselaer Polytechnic Institute',
    location: 'Troy, NY',
    current: false,
    logo: '/logos/rpi.png',
    logoPad: 'sm',
    summary: 'Bachelor of Computer and Systems Engineering. Phalanx Honor Society.',
  },
  {
    year: '2011 — 2013',
    period: '2011 — 2013',
    role: 'Engineer II',
    company: 'Cisco Systems',
    location: 'San Jose',
    current: false,
    logo: '/logos/cisco.svg',
    logoPad: true,
    summary: 'Shipped the Cross-OS Library — a translation layer across five operating systems. Focused on Network, Utility, and Data Structure APIs.',
  },
  {
    year: '2015 — 2018',
    period: '2015 — 2018',
    role: 'Lead Engineer',
    company: 'Innio',
    location: 'New York',
    current: false,
    logo: '/logos/innio.svg',
    logoPad: true,
    summary: 'Architected the subscription and payments platform. Rebuilt the SSO system from CAS to OAuth.',
  },
  {
    year: '2018 — 2020',
    period: '2018 — 2020',
    role: 'Principal Software Engineer',
    company: 'ASICS Digital',
    location: 'Boston',
    current: false,
    logo: '/logos/asics.svg',
    logoPad: true,
    summary: 'Led infrastructure and backend for OneASICS SSO. Migrated 50M+ users from Runkeeper. Designed the microservice architecture powering all ASICS APIs.',
  },
  {
    year: '2020 — Present',
    period: '2020 — Present',
    role: 'Staff Software Engineer',
    company: 'Traackr',
    location: 'New York',
    current: true,
    logo: '/logos/traackr.svg',
    logoPad: true,
    spin: true,
    summary: 'Supported a 10-fold growth of creators by migrating a monolithic content tracker to microservices across 7 social platforms. Delivered Benchmark v2 analytics (Vue.js dashboard serving L\u2019Oréal, Coty), OAuth integrations, Developer Experience platform, and AI Content Insights — from R&D to production.',
  },
]

const activeIndex = ref(milestones.length - 1)
</script>

<template>
  <section id="journey" class="py-24 px-8 bg-bg-alt">
    <div class="max-w-[1080px] mx-auto">
      <p class="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Experience</p>
      <h2 class="font-serif font-normal tracking-tight mb-16 leading-tight" style="font-size: clamp(2rem, 4vw, 3rem)">
        The path so far
      </h2>

      <!-- Mobile: all cards stacked -->
      <div class="lg:hidden flex flex-col gap-4">
        <div
          v-for="(m, i) in milestones"
          :key="'mobile-' + i"
          class="p-6 bg-card border border-border rounded-2xl flex gap-4 items-start"
        >
          <div
            class="w-11 h-11 shrink-0 rounded-full flex items-center justify-center overflow-hidden border-2 border-border"
          >
            <img
              :src="m.logo"
              :alt="m.company + ' logo'"
              class="w-full h-full object-contain"
              :class="[
                m.logoPad === true ? 'p-1.5 bg-white' : '',
                m.logoPad === 'sm' ? 'p-0.5 bg-white' : '',
              ]"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-serif text-lg font-bold tracking-tight">{{ m.role }}</h3>
            <p class="text-muted font-medium text-sm">{{ m.company }}</p>
            <div class="flex items-center gap-2 mt-1 mb-2">
              <span class="text-xs text-muted">{{ m.location }}</span>
              <span class="text-xs text-accent font-semibold">{{ m.period }}</span>
              <span
                v-if="m.current"
                class="px-2 py-0.5 bg-accent/10 text-accent text-[0.6rem] font-bold uppercase tracking-wider rounded-full"
              >
                Current
              </span>
            </div>
            <p class="text-muted text-sm leading-relaxed">{{ m.summary }}</p>
          </div>
        </div>
      </div>

      <!-- Desktop: horizontal timeline with interactive nodes -->
      <div class="hidden lg:block relative mb-12">
        <div class="absolute top-5 left-0 right-0 h-px bg-border" />
        <div class="relative flex justify-between">
          <button
            v-for="(m, i) in milestones"
            :key="i"
            class="group relative flex flex-col items-center cursor-pointer bg-transparent border-none p-0 outline-none text-center"
            @click="activeIndex = i"
          >
            <div
              class="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 z-10 overflow-hidden"
              :class="[activeIndex === i
                ? 'shadow-[0_0_0_3px_var(--color-accent),0_0_0_6px_rgba(42,191,191,0.15)] scale-110'
                : 'border-2 border-border group-hover:border-accent/50']"
              @mouseenter="m.spin && startSpin($event)"
              @mouseleave="m.spin && stopSpin($event)"
            >
              <img
                :src="m.logo"
                :alt="m.company + ' logo'"
                class="w-full h-full object-contain"
                :class="[
                  m.logoPad === true ? 'p-1.5 bg-white' : '',
                  m.logoPad === 'sm' ? 'p-0.5 bg-white' : '',
                  m.spin ? 'logo-spin' : '',
                ]"
              />
            </div>
            <span
              class="mt-2.5 text-sm font-semibold transition-colors duration-300"
              :class="activeIndex === i ? 'text-accent' : 'text-muted group-hover:text-dark'"
            >
              {{ m.year }}
            </span>
            <span
              class="text-[0.7rem] transition-colors duration-300 mt-0.5 max-w-[100px] text-center leading-tight"
              :class="activeIndex === i ? 'text-dark' : 'text-muted/50'"
            >
              {{ m.company }}
            </span>
          </button>
        </div>
      </div>

      <!-- Desktop: detail card below timeline -->
      <div class="hidden lg:block relative overflow-hidden">
        <TransitionGroup name="card">
          <div
            v-for="(m, i) in milestones"
            v-show="activeIndex === i"
            :key="'desktop-' + i"
            class="p-10 bg-card border border-border rounded-2xl"
          >
            <div class="flex flex-row items-start justify-between gap-4 mb-4">
              <div>
                <h3 class="font-serif text-2xl font-bold tracking-tight">{{ m.role }}</h3>
                <p class="text-muted font-medium">{{ m.company }}</p>
              </div>
              <div class="flex items-center gap-3 shrink-0">
                <span class="text-xs text-muted">{{ m.location }}</span>
                <span class="text-xs text-accent font-semibold tracking-wide">{{ m.period }}</span>
                <span
                  v-if="m.current"
                  class="px-2.5 py-0.5 bg-accent/10 text-accent text-[0.65rem] font-bold uppercase tracking-wider rounded-full"
                >
                  Current
                </span>
              </div>
            </div>
            <p class="text-muted leading-relaxed max-w-[680px]">{{ m.summary }}</p>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 0.35s ease;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.card-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.card-leave-active {
  position: absolute;
  width: 100%;
}
</style>
