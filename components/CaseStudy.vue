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
      <button class="case-study__slide-action" @click="incrementSlide">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 53"
        >
          <path
            d="M52.0999 22.3H44.7v7.4001h7.3999V22.3zM44.7 22.3H0v7.4001h44.7V22.3zM52.0999 14.9H44.7v7.4h7.3999v-7.4zM44.5999 7.40002H37.2V14.8h7.3999V7.40002zM37.2001 0H29.8v7.4h7.4001V0zM52.0999 29.8H44.7v7.4001h7.3999V29.8zM44.5999 37.2H37.2v7.3999h7.3999V37.2zM37.2001 44.7H29.8v7.3999h7.4001V44.7zM59.5001 22.3h-7.4v7.4001h7.4V22.3z"
          />
        </svg>
      </button>
    </div>
    <div class="case-study__meta">
      <dl>
        <div class="case-study__meta-tag">
          <dt>Client:</dt>
          <dd>{{ slice.primary.client }}</dd>
        </div>
        <div class="case-study__meta-tag">
          <dt>Year:</dt>
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
    slice: Object,
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
        image.onload = function () {
          console.log('loaded: ', image)
        }
      })
    },
    incrementSlide() {
      const nextIndex = (this.currentActiveSlide + 1) % this.slides.length
      this.currentActiveSlide = nextIndex
    },
  },
}
</script>
