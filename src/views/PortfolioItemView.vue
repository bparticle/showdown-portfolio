<template>
  <div
    ref="itemWrapper"
    tabindex="0"
    class="portfolio-item-view"
    @keyup.esc="returnHome"
  >
    <a
      alt=""
      class="close-view"
      href="javascript: void(0)"
      @click="returnHome"
    >
      <img src="@/assets/close.svg">
    </a>
    <h1 class="portfolio-item-view__title">{{ work.title }}</h1>
    <div class="portfolio-item-view__content">
      <p>{{ work.description }} <span v-if="work.size">(size: {{ work.size }})</span></p>
    </div>
    <img
      class="portfolio-item-view__image"
      alt=""
      sizes="100vw"
      :src="`https://res.cloudinary.com/${ baseData.cloudinary }/image/upload/w_${ imgSizes.small }/v1549027560/${work.img}.jpg`"
      :srcset="`
        https://res.cloudinary.com/${ baseData.cloudinary }/image/upload/w_${ imgSizes.small }/v1549027560/${work.img}.jpg ${ imgSizes.small }w,
        https://res.cloudinary.com/${ baseData.cloudinary }/image/upload/w_${ imgSizes.medium }/v1549027560/${work.img}.jpg ${ imgSizes.medium }w,
        https://res.cloudinary.com/${ baseData.cloudinary }/image/upload/w_${ imgSizes.large }/v1549027560/${work.img}.jpg ${ imgSizes.large }w,
        https://res.cloudinary.com/${ baseData.cloudinary }/image/upload/w_${ imgSizes.xlarge }/v1549027560/${work.img}.jpg ${ imgSizes.xlarge }w
      `"
    >
  </div>
</template>

<script>
import dataSrc from '@/../static/source.json'
import router from "../router"

export default {
  name: 'PortfolioItem',
  data() {
    return {
      id: this.$route.params.id,
      work: {},
      baseData: {},
      imgSizes: {
        small: 450,
        medium: 800,
        large: 1600,
        xlarge: 1800
      }
    }
  },
  mounted() {
    this.$refs.itemWrapper.focus()
  },
  created() {
    this.work = dataSrc[0].work.find(item => item.id === this.$route.params.id)
    this.baseData = dataSrc[0].base
  },
  methods: {
    returnHome: function () {
      router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.portfolio-item-view {

  width: 100%;
  margin-bottom: 25px;

  &__image {
    width: 100%;
  }

  &__title {
    margin-top: 0;
    padding-top: 65px;
    padding-left: 15px;
    color: gray;
  }

  &__content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 0;
  }

}

@media all and (max-width: 1130px) {

  .portfolio-item-view {
    padding: 0 15px;

    &__title {
      padding-left: 0;
    }
  }

}

</style>
