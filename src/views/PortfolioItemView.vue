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
    <cloudinary-img
      :sizes="imgSizes"
      :name="work.img"
    />
    <div class="portfolio-item-view__details">
      <cloudinary-img
        v-for="(img, key) in images"
        :key="key"
        :sizes="imgSizes"
        :layout="imgLayout"
        :name="img"
      />
    </div>
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
      baseData: {}
    }
  },
  computed: {
    images: function () {
      return this.work.images.list
    },
    imgSizes: function () {
      return dataSrc[0].base.imageSizes
    },
    imgLayout: function () {
      return this.work.images.layout
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
  margin-bottom: 0;

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
    margin-bottom: 15px;

    &__title {
      padding-left: 0;
    }
  }

}

</style>
