<template>
  <section>
    <h3>Statement — Basic</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </section>
</template>

<script>
export default {
  name: 'StatementBasic',
  props: {
    slice: Object,
  },
}
</script>
