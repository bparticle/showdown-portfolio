<template>
  <div id="app">
    <header class="header">
      <h1 class="header__title">
        <router-link to="/">{{ baseData.title }}</router-link>
      </h1>
    </header>
    <aside class="aside"><h1 class="aside__title"><router-link to="/about">ABOUT</router-link></h1></aside>
    <content>
      <transition name="router-anim">
        <keep-alive exclude="PortfolioItem">
          <router-view />
        </keep-alive>
      </transition>
    </content>
    <router-link to="/">
      <img
        class="logo"
        src="@/assets/logo.svg"
      >
    </router-link>
  </div>
</template>

<script>
import dataSrc from '@/../static/source.json'

export default {
  name: 'App',
  data() {
    return {
      baseData: {}
    }
  },
  created() {
    this.baseData = dataSrc[0].base
  }
}
</script>

<style lang="scss" >

* {
  box-sizing: border-box;
}

#app {
  font-family: 'IBMPlexSans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden; // hide scroll bar on transition
}

body {
  margin: 0;
}

a {
  color: darkgray;
}

h1 {
  font-family: 'IBMPlexSans';
  font-weight: 700;
  color: #4D4D4D;
}

p {
  font-size: 21px;
  line-height: 1.58;
}

.header {
  position: fixed;
  z-index: 5;
  padding-left: 15px;

  &__title {
    font-family: 'IBMPlexSans';
    font-weight: 700;
    color: #4D4D4D;
    font-size: 50px;
    margin-top: 5px;
    a {
      text-decoration: none;
    }
  }
}

.aside {
  position: fixed;
  transform: rotate(-90deg);
  -webkit-transform-origin: 0% 0%;
  transform-origin: 0% 0%;
  bottom: 0;
  z-index: 50;

  &__title {
    font-family: 'IBMPlexSans';
    font-weight: 700;
    color: #4D4D4D;
    font-size: 30px;
    margin-top: 5px;
    a {
      text-decoration: none;
    }  }
}
:focus {
  outline: 0;
}

.close-view {
  position: absolute;
  right: 15px;
  top: 15px;
}

.logo {
  position: fixed;
  right: 27px;
  bottom: 25px;
}

// Responsive

@media all and (max-width: 800px) {}

@media all and (max-width: 550px) {

  header {
    margin-top: 15px;
  }

  .header {
    text-align: center;

    &__title {
      font-size: 35px;
    }
  }
}

// Typography

@font-face {
  font-family: 'IBMPlexSans';
  src:
    url('./assets/fonts/ibmplexsans/IBMPlexSans.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans.woff') format('woff'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Regular.ttf')  format('truetype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans.svg#IBMPlexSans') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'IBMPlexSans';
  src:
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Bold.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Bold.woff') format('woff'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Bold.ttf')  format('truetype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Bold.svg#IBMPlexSans-Bold') format('svg');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'IBMPlexSans';
  src:
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Medium.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Medium.woff') format('woff'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Medium.ttf')  format('truetype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-Medium.svg#IBMPlexSans-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'IBMPlexSans';
  src:
    url('./assets/fonts/ibmplexsans/IBMPlexSans-MediumItalic.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-MediumItalic.woff') format('woff'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-MediumItalic.ttf')  format('truetype'),
    url('./assets/fonts/ibmplexsans/IBMPlexSans-MediumItalic.svg#IBMPlexSans-MediumItalic') format('svg');
  font-weight: 500;
  font-style: italic;
}

// View Animations
.router-anim {
  &-enter-active {
    animation: coming .9s;
    animation-delay: .5s;
    opacity: 0;
  }

  &-leave-active {
    animation: going .5s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(550px);
      opacity: 0;
    }
  }

  @keyframes coming {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
