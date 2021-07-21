<template>
  <footer class="footer">
    <div class="footer__row-top">
      <span>Elsewhere</span>
    </div>
    <ul class="footer__links">
      <li v-if="instagram.url">
        <a :href="instagram.url" class="footer__link footer__link--instagram">
          Instagram
        </a>
      </li>
      <li v-if="facebook.url">
        <a :href="facebook.url" class="footer__link footer__link--facebook">
          Facebook
        </a>
      </li>
      <li v-if="twitter.url">
        <a :href="twitter.url" class="footer__link footer__link--twitter">
          Twitter
        </a>
      </li>
    </ul>
    <div
      :class="`footer__form-wrapper ${
        !formActive ? 'footer__form-wrapper--inactive' : ''
      }`"
    >
      <transition-group name="footer__form" mode="in-out">
        <button
          v-if="!formActive"
          key="activator"
          class="footer__form-activator"
          @click="setFormActive(true)"
        >
          Sign up for updates
        </button>
        <form
          v-if="formActive"
          key="form"
          action="https://datalands.us5.list-manage.com/subscribe/post?u=8b60ada3fce422484fd1e0e0b&amp;id=51ec3d656b"
          method="post"
          class="footer__form"
        >
          <div class="footer__form-input-wrapper">
            <input
              type="email"
              value=""
              name="EMAIL"
              class="email footer__form-input"
              id="mce-EMAIL"
              placeholder="Your email here"
              required
            />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_8b60ada3fce422484fd1e0e0b_51ec3d656b"
              tabindex="-1"
              value=""
            />
          </div>
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button footer__form-submit"
          />
          <div @click="setFormActive(false)" class="footer__form-cancel">
            cancel
          </div>
        </form>
      </transition-group>
    </div>
    <div class="footer__row-bottom">
      <span>{{ text[0] }}</span>
      <span>{{ text[1] }}</span>
      <div class="footer__brand">
        <abbr title="Datalands">DL</abbr>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['instagram', 'facebook', 'twitter', 'text'],
  data() {
    return {
      formActive: false,
    }
  },
  methods: {
    setFormActive(state) {
      console.log('test')
      this.formActive = state
    },
  },
}
</script>
