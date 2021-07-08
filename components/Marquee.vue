<template>
  <section class="marquee" style="--drift: 0">
    <MarqueeEl class="marquee__inner" :duration="30">
      <span
        v-for="({ element }, index) in slice.items"
        :key="`${element}${index}`"
        class="marquee__tag"
      >
        {{ element }}
      </span>
    </MarqueeEl>
  </section>
</template>

<script>
export default {
  name: 'Marquee',
  components: {},
  props: {
    slice: Object,
  },
}
</script>
