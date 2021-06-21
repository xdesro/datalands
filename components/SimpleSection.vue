<template>
  <section :style="`--background: ${slice.primary.background};`">
    <h3>Simple Section</h3>
    <p>{{ JSON.stringify(slice) }}</p>
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
