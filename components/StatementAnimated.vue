<template>
  <section
    class="statement-animated"
    :style="`--background: ${slice.primary.background};`"
  >
    <div class="statement-animated__inner">
      <h2 class="statement-animated__title">
        <span class="statement-animated__title-wrapped">
          {{ slice.primary.top_text }}
        </span>
        <svg
          class="statement-animated__svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -2 274.4 270"
        >
          <path
            d="M0 1h23.9a29.4 29.4 0 0129.5 29.4V42a29.5 29.5 0 0029.4 29.4h12.4a29.4 29.4 0 0129.5 29.5v11.8A29.5 29.5 0 00154 142h12.4a29.5 29.5 0 0129.5 29.5v11.4a29.4 29.4 0 0029.4 29.5h12.4a29.5 29.5 0 0129.5 29.4v20.8"
            fill="none"
            class="statement-animated__svg-line-main"
            :stroke="slice.primary.line"
            stroke-dasharray="440"
            stroke-miterlimit="10"
          />
          <path
            :fill="slice.primary.line"
            class="statement-animated__svg-line-secondary"
            d="M274.4 261.6h-14.3l7.2 7.2 7.1-7.2z"
          />
        </svg>

        <span class="statement-animated__positioned">
          {{ slice.primary.bottom_text }}
        </span>
      </h2>
      <footer class="statement-animated__footer">
        {{ slice.primary.footer }}
      </footer>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  name: 'StatementAnimated',
  props: {
    slice: Object,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    // eslint-disable-next-line new-cap
    new gsap.timeline({
      scrollTrigger: {
        trigger: '.statement-animated',
        start: 'top center',
        end: '+=500',
        scrub: 0.8,
      },
    })
      .from('.statement-animated__svg-line-main', { strokeDashoffset: 440 })
      .from('.statement-animated__svg-line-secondary', { opacity: 0 })
      .from(
        '.statement-animated__positioned',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          y: '100%',
        },
        '<'
      )
  },
}
</script>
