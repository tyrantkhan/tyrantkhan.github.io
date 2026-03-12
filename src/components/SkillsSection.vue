<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal('.skill-card')

const groups = [
  {
    level: 'Exceptional',
    items: ['Kotlin / Java / Go', 'AWS / Terraform / Docker', 'Kafka / Event-Driven Architecture', 'API Development', 'OAuth & Third-Party Integrations'],
  },
  {
    level: 'Strong',
    items: ['Vue.js / Frontend Development', 'CI/CD (Jenkins, GitHub Actions)', 'MongoDB', 'Elasticsearch', 'AI/ML Integration (LLM pipelines, AI-assisted code review)'],
  },
  {
    level: 'Familiar',
    items: ['Python / PHP / Ruby', 'API Documentation', 'K8s / EKS', 'Databricks', 'Airflow'],
  },
]
</script>

<template>
  <section id="skills" class="py-24 px-8 bg-bg">
    <div class="max-w-[960px] mx-auto">
      <p class="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Expertise</p>
      <h2 class="font-serif font-normal tracking-tight mb-14 leading-tight" style="font-size: clamp(2rem, 4vw, 3rem)">
        What I work with
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(group, i) in groups"
          :key="i"
          class="skill-card p-8 bg-card border border-border rounded-2xl opacity-0 translate-y-5 transition-all duration-600 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-transparent"
        >
          <p class="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-accent mb-5 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-border">
            {{ group.level }}
          </p>
          <ul class="flex flex-col gap-2.5 list-none">
            <li
              v-for="(item, j) in group.items"
              :key="j"
              class="text-[0.9rem] text-muted"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
