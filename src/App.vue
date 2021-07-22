<template>
    <div id="app">
        <!--<keep-alive>-->
            <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
        <!--</keep-alive>-->
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    mounted () {
      if (!this.isMobileAgent()) {
        window.location.href = 'https://www.xjhktv.com'
      }
    },
    methods: {
      isMobileAgent () {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag
      }
    }
  }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    #app {
        width: 100%;
        height: 100%;
    }

    html {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    body {
        background-color: #000;
        width: 100%;
        /*height: 100%;*/
        font-family: "PingFang-SC-Medium";
        overflow: auto !important;
    }

    .van-toast {
        font-size: 32px!important;
        color: #fff!important;
        font-weight: bold!important;
        background-color: rgba(243, 152, 0, 0.8)!important;
    }

    .van-toast--html, .van-toast--text {
        padding: 24px 48px!important;
    }
</style>
