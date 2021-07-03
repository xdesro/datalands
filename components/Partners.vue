<template>
  <section
    class="partners"
    :style="`--background: ${slice.primary.background};`"
  >
    <h2 class="partners__title">{{ slice.primary.main }}</h2>
    <div class="partners__inner">
      <div
        v-for="{ client_logo: { url, alt } } in slice.items"
        :key="alt"
        class="partners__logo-container"
      >
        <img :src="url" class="partners__logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    slice: Object,
  },
}
</script>
