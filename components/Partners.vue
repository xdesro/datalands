<template>
  <section :style="`--background: ${slice.primary.background};`">
    <h3>Partners</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    slice: Object,
  },
}
</script>
