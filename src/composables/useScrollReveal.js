import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector, { threshold = 0.15, stagger = 120 } = {}) {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement
            const siblings = parent.querySelectorAll(selector)
            const index = Array.from(siblings).indexOf(entry.target)
            entry.target.style.transitionDelay = `${index * stagger}ms`
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
