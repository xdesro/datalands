<template>
  <section
    class="partners"
    :style="`--background: ${slice.primary.background};`"
  >
    <div class="partners__inner">
      <h2 class="partners__title">{{ slice.primary.main }}</h2>
    </div>

    <MarqueeEl reverse :duration="30">
      <div class="partners__slider">
        <div
          v-for="({ client_logo: { url, alt } }, index) in [...slice.items]"
          :key="`${alt}${index}`"
          class="partners__logo-container"
        >
          <img :src="url" class="partners__logo" :alt="alt || ''" />
        </div>
      </div>
    </MarqueeEl>
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
