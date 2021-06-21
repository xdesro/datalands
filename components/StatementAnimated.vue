<template>
  <section :style="`--background: ${slice.primary.background};`">
    <h3>Statement — Animated</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </section>
</template>

<script>
export default {
  name: 'StatementAnimated',
  props: {
    slice: Object,
  },
}
</script>
