<template>
  <section
    class="partners"
    :style="`--background: ${slice.primary.background};`"
  >
    <div class="partners__inner">
      <h2 class="partners__title">{{ slice.primary.main }}</h2>
      <div class="partners__slider">
        <div
          v-for="({ client_logo: { url, alt } }, index) in [
            ...slice.items,
            ...slice.items,
            ...slice.items,
            ...slice.items,
            ...slice.items,
            ...slice.items,
          ]"
          :key="`${alt}${index}`"
          class="partners__logo-container"
        >
          <img :src="url" class="partners__logo" />
        </div>
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
