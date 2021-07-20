<template>
  <section
    class="case-study"
    :style="`--background: ${slice.primary.highlight_color};`"
  >
    <div class="case-study__slides">
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
    <div class="case-study__meta">
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
      <p class="case-study__lede">{{ slice.primary.description }}</p>
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
    }
  },
  computed: {
    slide() {
      return this.slides[this.currentActiveSlide]
    },
  },
  mounted() {
    this.preloadImages()
  },
  methods: {
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
