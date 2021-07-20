<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
let Splitting = null
if (process.client) {
  Splitting = require('splitting')
}
export default {
  mounted() {
    document.body.style.setProperty(
      '--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`
    )
    setTimeout(() => {
      Splitting()
    }, 10)
  },
}
</script>
