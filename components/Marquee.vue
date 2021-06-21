<template>
  <div>
    <h3>Marquee</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  props: {
    slice: Object,
  },
}
</script>
