<template>
  <section class="marquee" style="--drift: 0">
    <!-- <vue-loop-scroll
      class="marquee__inner"
      direction="left"
      :speed="15"
      :index="0"
      :mouse-stop="false"
    > -->
    <client-only>
      <marquee-el class="marquee__inner">
        <span
          v-for="{ element } in slice.items"
          :key="element"
          class="marquee__tag"
        >
          {{ element }}
        </span>
        <!-- </vue-loop-scroll> -->
      </marquee-el>
    </client-only>
  </section>
</template>

<script>
export default {
  name: 'Marquee',
  components: {
    'marquee-el': () => import('@/components/MarqueeEl.vue'),
  },
  props: {
    slice: Object,
  },
}
</script>
