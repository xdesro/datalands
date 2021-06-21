<template>
  <div>
    <h3>Case Study</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </div>
</template>

<script>
export default {
  name: 'CaseStudy',
  props: {
    slice: Object,
  },
}
</script>
