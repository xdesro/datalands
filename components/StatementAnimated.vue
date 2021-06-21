<template>
  <div>
    <h3>Statement — Animated</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatementAnimated',
  props: {
    slice: Object,
  },
}
</script>
