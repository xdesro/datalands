<template>
  <div>
    <Header :text="page.intro_text" :logo="page.intro_logo" />
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
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.page.seo_title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.seo_title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.seo_description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.page.seo_image.url,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.page.seo_title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.seo_title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.seo_description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.page.seo_image.url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.page.seo_image.url,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.page.seo_title,
        },
      ],
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
