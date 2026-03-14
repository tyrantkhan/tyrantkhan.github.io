<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background gradient base -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background: radial-gradient(ellipse at 65% 50%, rgba(42,191,191,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse at 30% 70%, rgba(232,101,74,0.04) 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 30%, rgba(212,168,67,0.03) 0%, transparent 40%);
      "
    />

    <!-- Avatar as background -->
    <div
      class="hidden lg:block absolute bottom-0 opacity-0 pointer-events-none select-none"
      style="right: clamp(-15%, 20vw - 20%, 8%); animation: fadeUp 1.2s ease forwards 0.1s"
    >
      <img
        src="/avatar-nobg.png"
        alt=""
        class="w-auto object-contain object-bottom"
        style="height: clamp(50vh, 60vw, 85vh)"
      />
    </div>

    <!-- Text content in frosted card -->
    <div class="relative z-10 max-w-[1080px] w-full mx-auto px-8 pt-24 pb-16">
      <div
        class="max-w-[560px] backdrop-blur-md bg-white/70 rounded-2xl p-8 md:p-10 shadow-sm opacity-0"
        style="animation: fadeUp 0.8s ease forwards 0.4s"
      >
        <p
          class="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4"
        >
          Software Engineer
        </p>

        <h1
          class="font-serif font-normal leading-[1.1] tracking-tight mb-6"
          style="font-size: clamp(3rem, 7vw, 5rem)"
        >
          Haris <em class="italic text-accent">Khan</em>
        </h1>

        <p
          class="text-lg text-muted max-w-[480px] mb-10 leading-relaxed"
        >
          Over a decade building systems that scale — from a cross-platform library spanning
          5 operating systems at Cisco, to migrating 50 million users at ASICS, to scaling
          influencer tracking tenfold through event-driven architecture at Traackr. I care
          about clean APIs, solid infrastructure, and shipping things that matter.
        </p>

        <div class="flex gap-4 flex-wrap">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide rounded-full bg-dark text-white no-underline hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(42,191,191,0.25)] transition-all duration-300 flex-1 min-w-[160px] sm:flex-none"
          >
            Get in touch
          </a>
          <a
            href="#journey"
            class="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide rounded-full border-[1.5px] border-border text-dark no-underline hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300 flex-1 min-w-[160px] sm:flex-none"
          >
            View my journey
          </a>
        </div>
      </div>
    </div>

  </section>
</template>
