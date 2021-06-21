<template>
  <section :style="`--background: ${slice.primary.background};`">
    <h3>Marquee</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </section>
</template>

<script>
export default {
  name: 'Marquee',
  props: {
    slice: Object,
  },
}
</script>
