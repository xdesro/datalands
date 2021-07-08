<template>
  <MarqueeText :reverse="reverse" :duration="duration">
    <slot></slot>
  </MarqueeText>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
  props: ['reverse', 'duration'],
  components: {
    MarqueeText,
  },
  mounted() {
    // exists only on client:
    console.log(MarqueeText)
  },
}
</script>
