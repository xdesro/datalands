<template>
  <div>
    <h3>Statement — Basic</h3>
    <p>{{ JSON.stringify(slice) }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatementBasic',
  props: {
    slice: Object,
  },
}
</script>
