<template>
  <img
    class="cloudinary-img"
    :class="scaleClass"
    alt=""
    :sizes="hPerc"
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
    hspace: {
      type: Number,
      default: 100
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
      return 'cloudinary-img--' + this.hspace
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
      vertical-align: bottom;
      &--50 {
        width: 50%;
      }
      &--33 {
        width: 33.33%;
      }
  }
</style>
