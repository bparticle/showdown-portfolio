<template>
  <div class="portfolio-item">
    <img class="portfolio-item__img" @click="$emit('follow-item', work.id)" :src="`https://res.cloudinary.com/bparticle/image/upload/w_1100/v1549027560/${work.img}.jpg`" alt="">
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  data () {
    return {
    }
  },
  props: {
    work: {}
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
