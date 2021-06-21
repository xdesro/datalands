<template>
  <div :style="`--background: ${slice.primary.background};`">
    <h3>Symbols Bar</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </div>
</template>

<script>
export default {
  name: 'SymbolsBar',
  props: {
    slice: Object,
  },
}
</script>
