<template>
  <div>
    <Header :text="page.intro_text" />

    <SliceZone
      :slices="page.body"
      :resolver="({ sliceName }) => slices[sliceName]"
    />
    <Footer
      :instagram="page.instagram_url"
      :facebook="page.facebook_url"
      :twitter="page.twitter_url"
      :text="[page.footer_text_left, page.footer_text_right]"
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
        page: document.data,
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
}
</script>
