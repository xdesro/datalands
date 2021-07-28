<template>
  <section
    ref="statement"
    :class="`statement-basic ${hidden ? 'statement-basic--hidden' : ''}`"
  >
    <div class="statement-basic__inner">
      <h2
        class="statement-basic__title"
        data-splitting="lines"
        v-html="renderedText"
      >
        {{ slice.primary.main }}
      </h2>
      <footer class="statement-basic__footer" data-splitting="lines">
        {{ slice.primary.footer }}
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatementBasic',
  props: {
    slice: Object,
  },
  data() {
    return {
      hidden: false,
      observer: null,
    }
  },
  computed: {
    renderedText() {
      return this.$prismic
        .asHtml(this.slice.primary.main_text)
        .replace(/<\/?p*>|<.+[\W]>/g, '')
    },
  },
  mounted() {
    this.hidden = true
    this.observer = new IntersectionObserver(this.handleObserve, {
      threshold: [0.25, 0.5, 0.75, 1.0],
    })
    this.observer.observe(this.$refs.statement)
  },
  methods: {
    handleObserve(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          this.hidden = false
        } else {
          this.hidden = true
        }
      })
    },
  },
}
</script>
