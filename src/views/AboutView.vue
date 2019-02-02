<template>
  <div id="about" class="about page" ref="itemWrapper" v-on:keyup.esc="returnHome">
    <router-link to="/"><img class="close-view" src="@/assets/close.svg" alt=""></router-link>
    <h1 class="about__title">About</h1>
    <div class="about__content">
      <div>John Doe (Memphis Tennessee - USA, 1977)<br />
        Some cool credentials</div>
      <div>
        <p>Artist residencies</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Selected group exhibitions</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>Selected solo exhibitions</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router"

export default {
  name: 'About',
  data() {
    return {}
  },
  methods: {
    returnHome: function () {
      router.push('/')
    }
  },
  mounted() {
    this.$refs.itemWrapper.focus()
  }
}
</script>

<style lang="scss">
  .about {

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

    .about {
      padding: 0 15px;

      &__title {
        padding-left: 0;
      }
    }

  }
</style>
