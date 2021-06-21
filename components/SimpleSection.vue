<template>
  <div>
    <h3>Simple Section</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </div>
</template>

<script>
export default {
  name: 'SimpleSection',
  props: {
    slice: Object,
  },
}
</script>
