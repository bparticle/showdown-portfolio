<template>
  <div class="portfolio-item-view" ref="itemWrapper" v-on:keyup.esc="returnHome" tabindex="0">
    <a class="close-view" href="javascript: void(0)" @click="returnHome"><img src="@/assets/close.svg" alt=""></a>
    <h1 class="portfolio-item-view__title">{{ work.title }}</h1>
    <div class="portfolio-item-view__content">
      <p>{{ work.description }} <span v-if="work.size">(size: {{ work.size }})</span></p>
    </div>
    <img class="portfolio-item-view__image" :src="`https://res.cloudinary.com/bparticle/image/upload/w_${imgW}/v1549027560/${work.img}.jpg`" alt="">
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
      imgSizes: {
        small: 450,
        medium: 800,
        large: 1600,
        xlarge: 2000
      },
      bW: 0
    }
  },
  computed: {
    imgW: function () {
      return (this.bW < this.imgSizes.small) ? this.imgSizes.small
      : (this.bW >= this.imgSizes.small && this.bW <= this.imgSizes.medium) ? this.imgSizes.medium
      : (this.bW >= this.imgSizes.medium && this.bW <= this.imgSizes.large) ? this.imgSizes.large
      : (this.bW >= this.imgSizes.large && this.bW <= this.imgSizes.xlarge) ? this.imgSizes.xlarge
      : this.imgSizes.xlarge
    }
  },
  methods: {
    returnHome: function () {
      router.push('/')
    }
  },
  created() {
    this.work = dataSrc[0].work.find(item => item.id === this.$route.params.id)
  },
  mounted() {
    this.$refs.itemWrapper.focus()
    this.bW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
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
