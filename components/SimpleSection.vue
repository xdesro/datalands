<template>
  <section
    class="section-simple"
    :style="`--background: ${slice.primary.background};`"
  >
    <h2 class="section-simple__header">{{ slice.primary.header }}</h2>

    <div
      class="section-simple__content"
      v-html="$prismic.asHtml(slice.primary.content)"
    />
  </section>
</template>

<script>
export default {
  name: 'SimpleSection',
  props: {
    slice: Object,
  },
}
</script>
