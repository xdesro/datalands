<template>
  <section class="marquee">
    <div class="marquee__inner">
      <span class="marquee__tag" v-for="{ element } in slice.items">
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
}
</script>
