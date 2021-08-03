<template>
  <section
    :class="`case-study${hidden ? ' case-study--hidden' : ''}
    ${slides.length > 1 ? ' case-study--has-slides' : ''}`"
    :style="`--background: ${slice.primary.highlight_color};`"
  >
    <div class="case-study__slides">
      <img
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.url"
        class="case-study__slide-mobile"
      />

      <transition name="case-study__slide-container">
        <div :key="slide.url" class="case-study__slide-container">
          <img :src="slide.url" class="case-study__slide" />
        </div>
      </transition>
      <button
        v-if="slides.length > 1"
        class="case-study__slide-action"
        @click="incrementSlide"
      >
        <ArrowButton class="case-study__slide-action-icon" />
      </button>
    </div>
    <div class="case-study__meta" ref="meta">
      <dl>
        <div class="case-study__meta-tag">
          <dt class="visually-hidden">Client:</dt>
          <dd>{{ slice.primary.client }}</dd>
        </div>
        <div class="case-study__meta-tag">
          <dt class="visually-hidden">Year:</dt>
          <dd>{{ slice.primary.project_date | getYear }}</dd>
        </div>
      </dl>
      <p class="case-study__lede" data-splitting="lines">
        {{ slice.primary.description }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudy',
  filters: {
    getYear(string) {
      return new Date(string).getFullYear()
    },
  },
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      currentActiveSlide: 0,
      slides: [...this.slice.items].map((item) => item.project_image),
      observer: undefined,
      hidden: false,
    }
  },
  computed: {
    slide() {
      return this.slides[this.currentActiveSlide]
    },
  },
  mounted() {
    this.preloadImages()
    this.hidden = true
    this.observer = new IntersectionObserver(this.handleObserve, {
      threshold: 1.0,
    })
    this.observer.observe(this.$refs.meta)
  },
  methods: {
    handleObserve(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          this.hidden = false
        } else {
          this.hidden = true
        }
      })
    },
    preloadImages() {
      this.slides.forEach((slide) => {
        const image = new Image()
        image.src = slide.url
      })
    },
    incrementSlide() {
      this.currentActiveSlide =
        (this.currentActiveSlide + 1) % this.slides.length
    },
  },
}
</script>
