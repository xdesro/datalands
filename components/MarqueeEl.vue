<template>
  <MarqueeText :reverse="reverse" :duration="duration">
    <slot></slot>
  </MarqueeText>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component'
export default {
  components: {
    MarqueeText,
  },
  props: ['reverse', 'duration'],
}
</script>
