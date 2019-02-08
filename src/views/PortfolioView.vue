<template>
  <div
    id="portfolio"
    class="portfolio page"
  >
    <full-page
      ref="fullpage"
      :options="fpOptions"
    >
      <div
        v-for="item in work"
        class="section"
        :class="{ visible: isVisible }"
      >
        <portfolio-item
          :id="item.id"
          :key="item.id"
          :work="item"
          @follow-item="followItem"
          @goto-next="gotoNext"
          @goto-prev="gotoPrev"
        />
      </div>
    </full-page>
  </div>
</template>

<script>
import router from "../router"
import dataSrc from '@/../static/source.json'

export default {
  name: 'PortfolioView',
  data() {
    return {
      isVisible: false,
      work: {},
      fpOptions: {
        licenseKey: '63A6F8EE-8C0447C8-B6EDE9AC-7FB304CC',
        navigation: true,
        scrollingSpeed: 450,
        css3: false,
        autoScrolling: false,
        afterLoad: this.afterLoad
      },
    }
  },
  created() {
    this.work = dataSrc[0].work
  },
  methods: {
    afterLoad(origin, destination) {
      destination.item.style.opacity = 1;
    },
    followItem(id) {
      router.push('/work/' + id)
    },
    gotoNext() {
      this.$refs.fullpage.api.moveSectionDown()
    },
    gotoPrev() {
      this.$refs.fullpage.api.moveSectionUp()
    }
  },
  beforeRouteLeave (to, from, next) {
    document.getElementById('html').classList.add("allow-scroll")
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$refs.fullpage.api.setAutoScrolling(true)
    })
    document.getElementById('html').classList.remove("allow-scroll")
  }
}
</script>

<style lang="scss" >
.section {
  opacity: 0;
  transition-property: opacity;
  transition-duration: 2s;

  &.active {
    opacity: 1;
  }
}

.fullpage-wrapper {
  padding: 0 85px;
  text-align: center;
}

// Temporarily disable full-page navigation and functions

.allow-scroll {
  overflow : visible !important;
  height : initial !important;
  body {
    overflow : visible !important;
    height : initial !important;
  }
  #fp-nav {
    display: none;
  }
}

// Responsive styles

@media all and (max-width: 800px) {
  .fullpage-wrapper {
    padding: 0 60px;
  }
}
@media all and (max-width: 550px) {

  #fp-nav.fp-right {
    right: 2px !important;
  }

  .fullpage-wrapper {
    padding: 0 30px 20px 20px;
  }
}
</style>
