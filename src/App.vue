<template>
  <div class="app" :style="{height: '100%'}">
    <div class="main" :style="{height: '100%'}">
      <router-view></router-view>
    </div>
     <footer-nav :showNav="showNav"></footer-nav>
  </div>
</template>

<script>
import { footerNav } from './components/'
export default {
  name: 'app',
  data () {
    return {
      direction: 'forward',
      showNav: true
    }
  },
  components: {
    footerNav
  },
  watch: {
     // 如果路由有变化，会执行该方法
    '$route': function() {
      this.routeChange()
    }
  },
  methods: {
    routeChange () {
      let path = this.$route.path
      if (path === '/' || path === '/cinema' || path === '/me') {
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  },
  created () {
    this.routeChange()
  },
  mounted () {
    window.setTimeout(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 250)
  }
}
</script>

<style>
  body {
    background: #f5f5f5;
  }
</style>

