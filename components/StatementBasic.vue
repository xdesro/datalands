<template>
  <section class="statement-basic">
    <h2 class="statement-basic__title">{{ slice.primary.main }}</h2>
    <footer class="statement-basic__footer">{{ slice.primary.footer }}</footer>
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
