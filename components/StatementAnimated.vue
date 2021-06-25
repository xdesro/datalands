<template>
  <section
    class="statement-animated"
    :style="`--background: ${slice.primary.background};`"
  >
    <h2 class="statement-animated__title">
      {{ slice.primary.top_text }}
      <span class="statement-animated__positioned">{{
        slice.primary.bottom_text
      }}</span>
    </h2>
    <footer class="statement-animated__footer">
      {{ slice.primary.footer }}
    </footer>
  </section>
</template>

<script>
export default {
  name: 'StatementAnimated',
  props: {
    slice: Object,
  },
}
</script>
