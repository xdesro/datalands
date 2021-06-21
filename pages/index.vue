<template>
  <div class="container">
    <SliceZone
      :slices="page"
      :resolver="({ sliceName }) => slices[sliceName]"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

import CaseStudy from '../components/CaseStudy'
import Marquee from '../components/Marquee'
import Partners from '../components/Partners'
import SimpleSection from '../components/SimpleSection'
import StatementAnimated from '../components/StatementAnimated'
import StatementBasic from '../components/StatementBasic'
import SymbolsBar from '../components/SymbolsBar'

export default {
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle('home')

    if (document) {
      return {
        page: document.data.body,
        // page: document.data.body.filter(
        //   (slice) => slice.slice_type === 'statement_basic'
        // ),
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      slices: {
        CaseStudy,
        Marquee,
        Partners,
        SimpleSection,
        StatementAnimated,
        StatementBasic,
        SymbolsBar,
      },
    }
  },
  mounted() {
    console.log(this.body)
  },
}
</script>
