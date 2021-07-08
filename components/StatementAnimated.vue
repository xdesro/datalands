<template>
  <section
    class="statement-animated"
    :style="`--background: ${slice.primary.background};`"
  >
    <div class="statement-animated__inner">
      <h2 class="statement-animated__title">
        <span class="statement-animated__title-wrapped">
          {{ slice.primary.top_text }}
        </span>
        <svg
          class="statement-animated__svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -2 336 258"
        >
          <path
            d="M0 1h61.2c12.1 0 21.9 9.8 21.9 21.9v13.2C83.1 48.2 92.9 58 105 58h39.3c12.1 0 21.9 9.8 21.9 21.9v13.2c0 12.1 9.8 21.9 21.9 21.9h39.3c12.1 0 21.9 9.8 21.9 21.9V150c0 12.1 9.8 21.9 21.9 21.9h39.3c12.1 0 21.9 9.8 21.9 21.9v63.5"
            fill="none"
            stroke="#E75650"
            stroke-miterlimit="10"
          />
        </svg>

        <span class="statement-animated__positioned">
          {{ slice.primary.bottom_text }}
        </span>
      </h2>
      <footer class="statement-animated__footer">
        {{ slice.primary.footer }}
      </footer>
    </div>
  </section>
</template>

<script>
import Meanderer from 'meanderer'
export default {
  name: 'StatementAnimated',
  props: {
    slice: Object,
  },
}
</script>
