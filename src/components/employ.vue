<template>
    <div class="employ-wrapper">
        <div class="header-wrapper" :class="{headerFixed:isHeaderFixed}">
            <div class="menu-wrapper">
                <img :src="isHeaderFixed ? menuFixed : menu" alt="menu" id="menu" @click="showNavi">
            </div>
            <img class="logo" src="../../src/assets/image/logo.png" alt="logo">
            <div class="navigation" style="display: none" id="navigation">
                <span @click="menuLocation('index')">首页</span>
                <span class="mt44" @click="menuLocation(0)">公司简介</span>
                <span class="mt44" @click="menuLocation(1)">品牌特色</span>
                <span class="mt44" @click="menuLocation(3)">发展历程</span>
                <span class="mt44" @click="menuLocation(4)">门店分布</span>
                <span class="mt44" @click="menuLocation('join')">招商加盟</span>
                <span class="mt44" @click="menuLocation('employ')">招贤纳士</span>
            </div>
        </div>
        <div :class="{h80:isHeaderFixed}"></div>
        <img class="employ-bg" src="../../src/assets/image/employ-bg.jpg" alt="employ">
        <div class="employ-title">
            <div class="title">
                招贤纳士
            </div>
            <div class="recruit">
                Recruit talents
            </div>
        </div>
        <!--招聘tab-->
        <div class="employ-tabs">
            <div class="tab" :class="{active:type === '1'}" @click="tabChange('1')">
                门店招聘
            </div>
            <div class="split"></div>
            <div class="tab" :class="{active:type === '2'}" @click="tabChange('2')">
                总部招聘
            </div>
        </div>
        <!--招聘list-->
        <div class="employ-list">
            <div class="list-wrapper" v-for="(item, index) in list" :key="item.id" @click="gotoDetail(item.id)">
                <div class="header">
                    <div class="header-left">
                        <div class="title">
                            {{item['name']}}
                        </div>
                        <div class="employ-detail">
                            <span>部门:{{item['department_id']}}</span>
                            <span class="employ-split"></span>
                            <span>职能:{{item['function_id']}}</span>
                            <span class="employ-split"></span>
                            <span>地点:{{item['work_place']}}</span>
                        </div>
                    </div>
                    <img src="../../src/assets/image/employ-arrow.png" alt="employ">
                </div>
                <div class="middle-split"></div>
                <div class="duty">
                    <div class="d-title">
                        工作职责:
                    </div>
                    <div class="d-detail mt4" v-for="(data, i) in item['description']" :key="i">
                        {{data}}
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-wrapper">
            <div class="navigation-wrapper">
                <span @click="menuLocation('index')">首页</span>
                <!--<span class="navi-split"></span>-->
                <span @click="menuLocation(0)">公司简介</span>
                <!--<span class="navi-split"></span>-->
                <span @click="menuLocation(1)">品牌特色</span>
                <!--<span class="navi-split"></span>-->
                <span @click="menuLocation(3)">发展历程</span>
                <!--<span class="navi-split"></span>-->
                <span @click="menuLocation(4)">门店分布</span>
                <!--<span class="navi-split"></span>-->
                <span @click="menuLocation('join')">招商加盟</span>
                <!--<span class="navi-split"></span>-->
                <span @click="menuLocation('employ')">招贤纳士</span>
            </div>
            <div class="contact-link">
                <div class="logo-contact">
                    <div class="party-logo"></div>
                    <div class="contact-wrapper">
                        <div class="contact-container">
                            <img class="application" src="../../src/assets/image/application.png" alt="application">
                            <div class="ml8">
                                加盟申请：18912275555
                            </div>
                        </div>
                        <div class="contact-container">
                            <img class="qrcode" src="../../src/assets/image/contact-us.png" alt="contact">
                            <div class="ml8">
                                联系我们：0512-62728500
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mini-qrcode">
                    <img src="../../src/assets/image/mini.png" alt="mini">
                    <img class="ml12" src="../../src/assets/image/qrcode.png" alt="qrcode">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CommonApi from '../../src/config/action/common'

  export default {
    name: 'Employ',
    components: {},
    data () {
      return {
        isHeaderFixed: false,
        menuFixed: require('../../src/assets/image/menu.png'),
        menu: require('../../src/assets/image/menu-black.png'),
        type: '1',
        list: [],
        recruitList: []
      }
    },

    computed: {},

    created () {},

    destroyed () {
      window.removeEventListener('scroll', this.handleScroll, true)
    },

    mounted () {
      window.scrollTo(0, 0)
      window.addEventListener('scroll', this.handleScroll, true)
      window.addEventListener('click', (e) => {
        let isShow = document.getElementById('navigation').style.display
        if (isShow === 'block' && !document.getElementById('navigation').contains(e.target) && !document.getElementById('menu').contains(e.target)) {
          document.getElementById('navigation').style.display = 'none'
        }
      })
      CommonApi.getRecruitList().then(res => {
        if (res && res['code'] === 200) {
          this.recruitList = res['data']
          res['data'].forEach(item => {
            if (item['type_id'] === '1') {
              this.list = item['list']
            }
          })
        }
      })
    },

    methods: {
      menuLocation (key) {
        switch (key) {
          case 'index':
            this.$router.push({path: '/'})
            break
          case 0:
          case 1:
          case 3:
          case 4:
            this.$router.push({path: '/detail', query: {key}})
            break
          case 'join':
            this.$router.push({path: '/join'})
            break
          case 'employ':
            this.$router.push({path: '/employ'})
            break
        }
        document.getElementById('navigation').style.display = 'none'
      },
      gotoDetail (id) {
        this.$router.push({path: '/eDetail', query: {id}})
      },
      tabChange (type) {
        this.type = type
        this.recruitList.forEach(item => {
          if (item['type_id'] === type) {
            this.list = item['list']
          }
        })
      },
      showNavi () {
        let isShow = document.getElementById('navigation').style.display
        document.getElementById('navigation').style.display = isShow === 'none' ? 'block' : 'none'
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
        if (scrollTop > 0) {
          this.isHeaderFixed = true
        } else {
          this.isHeaderFixed = false
        }
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
    .employ-wrapper {
        height: auto;
        overflow-x: hidden;
        background-color: #F7F7F7;
        .h80 {
            height: 80px;
        }
        .ml8 {
            margin-left: 8px;
        }
        .ml12 {
            margin-left: 12px;
        }
        /* footer style */
        .footer-wrapper {
            width: 100%;
            background-color: rgba(20, 20, 20, 1);
            .contact-link {
                padding: 30px 24px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .logo-contact {
                    display: flex;
                    flex-direction: row;
                }
                .mini-qrcode {
                    display: flex;
                    align-items: center;
                    img {
                        height: 86px;
                        width: 86px;
                    }
                }
                .contact-wrapper {
                    margin-left: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .contact-container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 46px;
                        color: #C3C3C3;
                        .application {
                            width: 26.75px;
                            height: 26.75px;
                        }
                        .qrcode {
                            width: 26.53px;
                            height: 27.64px;
                        }
                    }
                }
                .party-logo {
                    width: 124px;
                    height: 124px;
                    background: url("../../src/assets/image/party-logo.png") no-repeat;
                    background-size: cover;
                    background-position: center center;
                }
            }
            .navigation-wrapper {
                height: 66px;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                font-size: 20px;
                font-weight: 400;
                line-height: 46px;
                color: #FFFFFF;
                letter-spacing: 2px;
                border-bottom: 2px solid #2E2E2E;
                .navi-split {
                    margin: 0 12px;
                    height: 20px;
                    width: 2px;
                    background-color: rgba(255, 255, 255, 1);
                }
            }
        }

        .mt4 {
            margin-top: 4px;
        }
        .employ-bg {
            width: 750px;
            height: 527px;
        }
        .employ-list {
            padding: 0 24px;
            margin: 33px 0 21px;
            .list-wrapper {
                margin-bottom: 22px;
                padding: 20px;
                /*height: 237px;*/
                background: #FFF;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
                .duty {
                    .d-title {
                        font-size: 22px;
                        font-weight: 500;
                        line-height: 46px;
                        color: #818181;
                    }
                    .d-detail {
                        font-size: 20px;
                        font-weight: 400;
                        /*line-height: 46px;*/
                        color: #818181;
                    }
                }
                .middle-split {
                    height: 2px;
                    background-color: #E6E6E6;
                    margin: 15px 0 10px;
                }
                .header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .header-left {
                        display: flex;
                        flex-direction: column;
                        .title {
                            font-size: 28px;
                            font-weight: 500;
                            line-height: 46px;
                            color: #000;
                        }
                        .employ-detail {
                            font-size: 22px;
                            font-weight: 500;
                            line-height: 46px;
                            color: #818181;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            .employ-split {
                                margin: 0 8px;
                                display: block;
                                width: 2px;
                                height: 22px;
                                background: #818181;
                            }
                        }
                    }
                    img {
                        width: 21.76px;
                        height: 38.58px;
                    }
                }
            }
        }
        .employ-tabs {
            width: 664px;
            height: 97px;
            background: #FFF;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
            border-radius: 49px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .active {
                font-weight: 500 !important;
                color: #000 !important;
            }
            .tab {
                font-size: 28px;
                font-weight: 400;
                line-height: 46px;
                color: #B9B9B9;
                flex: 1;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .split {
                height: 46px;
                width: 2px;
                background-color: #D5D5D5;
            }
        }
        .employ-title {
            margin: 22px 0 18px;
            color: #363636;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .title {
                font-size: 32px;
                font-weight: 500;
                line-height: 45px;
            }
            .recruit {
                font-size: 21px;
                font-weight: 400;
                line-height: 46px;
            }
        }
        .headerFixed {
            position: fixed !important;
            top: 0;
            background-color: #000;
        }
        .navigation {
            position: absolute;
            top: 80px;
            left: 0;
            width: 375px;
            z-index: 5;
            background-color: rgba(33, 33, 33, .8);
            padding: 30px 0 30px 56px;
            font-size: 30px;
            font-weight: 500;
            line-height: 42px;
            color: #FFF;
            span {
                display: block;
            }
            .mt44 {
                margin-top: 44px;
            }
        }
        .header-wrapper {
            position: relative;
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            .menu-wrapper {
                position: absolute;
                left: 28px;
                width: 42px;
                height: 20px;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .logo {
                width: 214px;
                height: 41px;
            }
        }
    }
</style>