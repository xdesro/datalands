<template>
  <section class="marquee" style="--drift: 0">
    <vue-loop-scroll
      class="marquee__inner"
      direction="left"
      :speed="15"
      :index="0"
      :mouse-stop="false"
    >
      <span
        v-for="{ element } in slice.items"
        :key="element"
        class="marquee__tag"
      >
        {{ element }}
      </span>
    </vue-loop-scroll>
  </section>
</template>

<script>
export default {
  name: 'Marquee',
  props: {
    slice: Object,
  },
}
</script>
