<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const boringMode = ref(route.query.mode === 'boring')

const pdfUrl = computed(() =>
  boringMode.value ? '/Haris_Khan_Resume.pdf' : '/Haris_Khan_Resume_Styled.pdf'
)

const pdfFilename = computed(() =>
  boringMode.value ? 'Haris_Khan_Resume.pdf' : 'Haris_Khan_Resume_Styled.pdf'
)

const jobs = [
  {
    role: 'Staff Software Engineer',
    company: 'Traackr',
    period: '2020 — Present',
    location: 'New York, NY',
    details: [
      'Supported a 10-fold growth of creators in the database by migrating a monolithic content tracker to a microservices architecture spanning 7 social platforms, deploying Kafka (MSK) via Terraform to replace RabbitMQ for message replayability and pipeline resilience',
      'Delivered Benchmark v2 analytics end-to-end — VIT scoring algorithm, Boosted Content, Influencer Tier segmentation, and GraphQL APIs serving enterprise brands including L\u2019Oréal and Coty, built as a Vue.js dashboard',
      'Built the Facebook, Instagram, and Twitch OAuth integrations and designed a reusable auth pattern adopted across all third-party platform connections',
      'Founded the Developer Experience platform — Go CLI with self-updating binaries, Kubernetes API service, CI/CD pipelines, and AI-assisted code review — standardizing developer workflows org-wide',
      'Delivered an AI Content Insights product from R&D to production — transcript ingestion pipeline, bulk analysis API, and Vue.js frontend enabling AI-powered content analysis at scale',
      'Routinely picked up frontend implementation (Vue.js) to unblock delivery when bandwidth was tight rather than letting work stall',
    ],
  },
  {
    role: 'Principal Software Engineer',
    company: 'ASICS Digital',
    period: '2018 — 2020',
    location: 'Boston, MA',
    details: [
      'Technical lead for all infrastructure and backend architecture of the OneASICS Identity Management / SSO platform',
      'Migrated over 50 million users from Runkeeper to OneASICS, developing APIs to support the transition',
      'Created a microservice architecture for all future ASICS API services with PWA frontend support',
    ],
  },
  {
    role: 'Lead Engineer',
    company: 'Innio',
    period: '2015 — 2018',
    location: 'New York, NY',
    details: [
      'Architected the web-based subscription and payments management application',
      'Rebuilt the SSO platform from CAS to OAuth',
    ],
  },
  {
    role: 'Engineer II',
    company: 'Cisco Systems',
    period: '2011 — 2013',
    location: 'San Jose, CA',
    details: [
      'Shipped the Cross-OS Library — a translation layer API across five Cisco-supported operating systems',
      'Developed Network, Utility, and Data Structure APIs',
      'Updated Interface Manager APIs to support write operations',
    ],
  },
]

const skills = {
  exceptional: ['Kotlin / Java / Go', 'AWS / Terraform / Docker', 'Kafka / Event-Driven Architecture', 'API Development', 'OAuth & Third-Party Integrations'],
  strong: ['Vue.js / Frontend Development', 'CI/CD (Jenkins, GitHub Actions)', 'MongoDB', 'Elasticsearch', 'AI/ML Integration (LLM pipelines, AI-assisted code review)'],
  familiar: ['Python / PHP / Ruby', 'API Documentation', 'K8s / EKS', 'Databricks', 'Airflow'],
}
</script>

<template>
  <!-- Controls -->
  <div class="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border print:hidden">
    <div class="max-w-[900px] mx-auto px-8 py-3 flex items-center justify-between">
      <button
        @click="router.push('/')"
        class="text-sm text-muted hover:text-accent transition-colors cursor-pointer bg-transparent border-none font-medium"
      >
        &larr; Back to site
      </button>
      <div class="flex items-center gap-4">
        <label class="flex items-center gap-2 text-sm text-muted cursor-pointer">
          <input
            type="checkbox"
            v-model="boringMode"
            class="accent-accent w-4 h-4 cursor-pointer"
          />
          Boring mode
        </label>
        <a
          :href="pdfUrl"
          :download="pdfFilename"
          class="px-5 py-2 text-sm font-semibold rounded-full bg-dark text-white hover:bg-accent transition-colors no-underline"
        >
          Download PDF
        </a>
      </div>
    </div>
  </div>

  <!-- Resume content -->
  <div
    class="max-w-[900px] mx-auto px-8 pt-24 pb-16 print:pt-0"
    :class="boringMode ? 'boring' : ''"
  >
    <!-- Header -->
    <header class="mb-10" :class="boringMode ? '' : 'text-center'">
      <h1
        :class="boringMode
          ? 'text-2xl font-bold mb-1'
          : 'font-serif text-5xl font-normal tracking-tight mb-3'"
      >
        <template v-if="boringMode">Haris Khan</template>
        <template v-else>Haris <em class="italic text-accent">Khan</em></template>
      </h1>
      <div
        class="text-sm text-muted"
        :class="boringMode ? 'flex gap-4 flex-wrap' : 'flex justify-center gap-6 flex-wrap'"
      >
        <span>hello@onekhan.com</span>
        <span>New York, NY</span>
        <a href="https://www.linkedin.com/in/tyrantkhan/" class="hover:text-accent transition-colors">LinkedIn</a>
      </div>
    </header>

    <!-- Experience -->
    <section class="mb-8">
      <h2
        :class="boringMode
          ? 'text-sm font-bold uppercase tracking-widest border-b border-dark pb-1 mb-4'
          : 'font-serif text-2xl font-normal tracking-tight mb-6 text-accent'"
      >
        {{ boringMode ? 'RELEVANT EXPERIENCE' : 'Experience' }}
      </h2>

      <div
        v-for="(job, i) in jobs"
        :key="i"
        :class="boringMode ? 'mb-4' : 'mb-8'"
      >
        <div class="flex justify-between items-baseline flex-wrap gap-x-4 mb-1">
          <h3
            :class="boringMode
              ? 'text-sm font-bold'
              : 'font-serif text-lg font-bold tracking-tight'"
          >
            {{ job.role }}<span class="text-muted font-normal">, {{ job.company }}</span>
          </h3>
          <span
            :class="boringMode
              ? 'text-xs text-muted'
              : 'text-xs text-accent font-semibold tracking-wide'"
          >
            {{ job.period }} &middot; {{ job.location }}
          </span>
        </div>
        <ul
          :class="boringMode
            ? 'list-disc pl-5 text-sm leading-relaxed space-y-0.5'
            : 'list-none space-y-1.5 mt-2'"
        >
          <li
            v-for="(detail, j) in job.details"
            :key="j"
            :class="boringMode
              ? 'text-dark'
              : 'resume-bullet text-sm text-muted'"
          >
            {{ detail }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Skills -->
    <section class="mb-8">
      <h2
        :class="boringMode
          ? 'text-sm font-bold uppercase tracking-widest border-b border-dark pb-1 mb-4'
          : 'font-serif text-2xl font-normal tracking-tight mb-6 text-accent'"
      >
        {{ boringMode ? 'SKILLS' : 'Skills' }}
      </h2>

      <div :class="boringMode ? 'text-sm space-y-1' : 'grid grid-cols-3 gap-6'">
        <template v-if="boringMode">
          <p><strong>Exceptional:</strong> {{ skills.exceptional.join(', ') }}</p>
          <p><strong>Strong:</strong> {{ skills.strong.join(', ') }}</p>
          <p><strong>Familiar:</strong> {{ skills.familiar.join(', ') }}</p>
        </template>
        <template v-else>
          <div v-for="(items, level) in skills" :key="level" class="p-5 bg-bg-alt rounded-xl">
            <p class="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent mb-3">{{ level }}</p>
            <ul class="list-none space-y-1">
              <li v-for="item in items" :key="item" class="text-sm text-muted">{{ item }}</li>
            </ul>
          </div>
        </template>
      </div>
    </section>

    <!-- Education -->
    <section class="mb-8">
      <h2
        :class="boringMode
          ? 'text-sm font-bold uppercase tracking-widest border-b border-dark pb-1 mb-4'
          : 'font-serif text-2xl font-normal tracking-tight mb-6 text-accent'"
      >
        {{ boringMode ? 'EDUCATION' : 'Education' }}
      </h2>

      <div class="flex justify-between items-baseline flex-wrap gap-x-4">
        <div>
          <h3
            :class="boringMode
              ? 'text-sm font-bold'
              : 'font-serif text-lg font-bold tracking-tight'"
          >
            Rensselaer Polytechnic Institute
          </h3>
          <p class="text-sm text-muted">Bachelor of Computer and Systems Engineering</p>
        </div>
        <span
          :class="boringMode
            ? 'text-xs text-muted'
            : 'text-xs text-accent font-semibold tracking-wide'"
        >
          Graduated May 2011 &middot; Troy, NY
        </span>
      </div>
      <p class="text-sm text-muted mt-1">Honors: Phalanx Honor Society</p>
    </section>

    <!-- Open Source -->
    <section class="mb-8">
      <h2
        :class="boringMode
          ? 'text-sm font-bold uppercase tracking-widest border-b border-dark pb-1 mb-4'
          : 'font-serif text-2xl font-normal tracking-tight mb-6 text-accent'"
      >
        {{ boringMode ? 'OPEN SOURCE' : 'Open Source' }}
      </h2>

      <p
        :class="boringMode ? 'text-sm' : 'text-sm text-muted'"
      >
        Maintainer of Concerto Digital Signage &middot; Creator of GoldSplit (Go/Svelte) &middot; Creator of Bitbucket CLI (Go)
      </p>
    </section>
  </div>
</template>

<style scoped>
.resume-bullet {
  padding-left: 1rem;
  position: relative;
}

.resume-bullet::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 5px;
  height: 1.5px;
  background: var(--color-accent);
}
</style>
