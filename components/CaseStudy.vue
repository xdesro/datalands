<template>
  <section
    class="case-study"
    :style="`--background: ${slice.primary.highlight_color};`"
  >
    <h3>Case Study</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </section>
</template>

<script>
export default {
  name: 'CaseStudy',
  props: {
    slice: Object,
  },
}
</script>
