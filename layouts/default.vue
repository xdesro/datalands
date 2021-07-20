<template>
  <div>
    <Nuxt />
    <client-only>
      <Splitting />
    </client-only>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.style.setProperty(
      '--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`
    )
  },
}
</script>
