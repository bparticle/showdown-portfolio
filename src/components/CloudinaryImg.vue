<template>
  <img
    class="cloudinary-img"
    :class="scaleClass"
    alt=""
    :sizes="hSpace"
    :src="`https://res.cloudinary.com/${ baseData.cloudinary.accountName }/image/upload/w_${ sizes.small }/v1549027560/${ baseData.cloudinary.imgFolder }/${name}.jpg`"
    :srcset="`
      https://res.cloudinary.com/${ baseData.cloudinary.accountName }/image/upload/w_${ sizes.small }/v1549027560/${ baseData.cloudinary.imgFolder }/${name}.jpg ${ sizes.small }w,
      https://res.cloudinary.com/${ baseData.cloudinary.accountName }/image/upload/w_${ sizes.medium }/v1549027560/${ baseData.cloudinary.imgFolder }/${name}.jpg ${ sizes.medium }w,
      https://res.cloudinary.com/${ baseData.cloudinary.accountName }/image/upload/w_${ sizes.large }/v1549027560/${ baseData.cloudinary.imgFolder }/${name}.jpg ${ sizes.large }w,
      https://res.cloudinary.com/${ baseData.cloudinary.accountName }/image/upload/w_${ sizes.xlarge }/v1549027560/${ baseData.cloudinary.imgFolder }/${name}.jpg ${ sizes.xlarge }w
    `"
  >
</template>

<script>
import dataSrc from '@/../static/source.json'

export default {
  name: 'PortfolioItem',
  props: {
    name: {
      type: String,
      required: true
    },
    sizes: {
      type: Object,
      required: true,
      default: () => []
    },
    layout: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      baseData: {},
      isActive: ''
    }
  },
  computed: {
    scaleClass: function () {
      return 'cloudinary-img--' + this.layout
    },
    hSpace: function () {
      return (this.layout == 0) ? 100 : 50
    }
  },
  created() {
    this.baseData = dataSrc[0].base
  }
}
</script>

<style lang="scss">
  .cloudinary-img {
      width: 100%;
      vertical-align: top;
      &--0 {
        width: 100%;
      }
      &--1 {
        width: 50%;
      }
      &--2 {
        width: 33.3%;
      }
  }
</style>
