<template>
  <section class="marquee">
    <div class="marquee__inner">
      <span
        v-for="{ element } in slice.items"
        :key="element"
        class="marquee__tag"
      >
        {{ element }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Marquee',
  props: {
    slice: Object,
  },
  mounted() {
    // requestAnimationFrame()
  },
}
</script>
