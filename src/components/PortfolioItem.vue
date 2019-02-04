<template>
  <div class="portfolio-item">
    <img
      class="portfolio-item__img"
      alt=""
      :src="`https://res.cloudinary.com/${ baseData.cloudinary }/image/upload/w_1100/v1549027560/${work.img}.jpg`"
      @click="$emit('follow-item', work.id)"
    >
  </div>
</template>

<script>
import dataSrc from '@/../static/source.json'

export default {
  name: 'PortfolioItem',
  props: {
    work: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      baseData: {}
    }
  },
  created() {
    this.baseData = dataSrc[0].base
  }
}
</script>

<style lang="scss">

.portfolio-item {
  margin: auto;

  &__img {
    cursor: pointer;
  }

  img {
    width: auto;
    max-width: 100%;
    max-height: 80vh;
  }
}

</style>
