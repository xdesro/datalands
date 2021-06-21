<template>
  <div class="container">
    <ul>
      <li v-for="(slice, index) in body" :key="index">
        {{ JSON.stringify(slice) }}
      </li>
    </ul>
    hello
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle('home')

    if (document) {
      return { body: document.data.body }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  mounted() {
    console.log(this.body)
  },
}
</script>
