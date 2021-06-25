<template>
  <section
    class="case-study"
    :style="`--background: ${slice.primary.highlight_color};`"
  >
    <div class="case-study__slides">
      <img
        v-for="item in slice.items"
        :key="item.project_image.url"
        :src="item.project_image.url"
        class="case-study__slide"
      />
    </div>
    <div class="case-study__meta">
      <dl>
        <div class="case-study__meta-tag">
          <dt>Client:</dt>
          <dd>{{ slice.primary.client }}</dd>
        </div>
        <div class="case-study__meta-tag">
          <dt>Year:</dt>
          <dd>{{ slice.primary.project_date | getYear }}</dd>
        </div>
      </dl>
      <p class="case-study__lede">{{ slice.primary.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudy',
  props: {
    slice: Object,
  },

  filters: {
    getYear(string) {
      return new Date(string).getFullYear()
    },
  },
}
</script>
