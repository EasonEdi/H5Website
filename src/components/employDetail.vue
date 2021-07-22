<template>
    <div class="employ-detail">
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
        <!--详情-->
        <div class="detail-wrapper">
            <div class="header">
                <div class="header-left">
                    <div class="title">
                        {{detail['name']}}
                    </div>
                    <div class="employ-detail">
                        <span>部门:{{detail['department_id']}}</span>
                        <span class="employ-split"></span>
                        <span>职能:{{detail['function_id']}}</span>
                        <span class="employ-split"></span>
                        <span>地点:{{detail['work_place']}}</span>
                    </div>
                </div>
                <div class="middle-split"></div>
            </div>
            <div class="duty-wrapper" v-html="detail['content']">
            </div>
            <div class="middle-split mb12"></div>
            <div class="contact-us">
                <div class="c-left">
                    <div class="c-title">
                        联系我们
                    </div>
                    <div class="c-mobile mt40">
                        <img src="../../src/assets/image/c-mobile.png" alt="mobile">
                        <span>{{detail['contacts_id'] && detail['contacts_id']['telephone'] || ''}}</span>
                    </div>
                    <div class="c-email mt34">
                        <img src="../../src/assets/image/c-email.png" alt="email">
                        <span>{{detail['contacts_id'] && detail['contacts_id']['email'] || ''}}</span>
                    </div>
                </div>
                <div class="c-right">
                    <img :src="detail['contacts_id'] && detail['contacts_id']['qrcode_url']" alt="hr">
                    <span class="mt7">{{detail['contacts_id'] && detail['contacts_id']['name'] || ''}}</span>
                    <span>添加微信了解详情</span>
                </div>
            </div>
        </div>
        <!--招聘list-->
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
    name: 'EmployDetail',
    components: {},
    data () {
      return {
        isHeaderFixed: false,
        menuFixed: require('../../src/assets/image/menu.png'),
        menu: require('../../src/assets/image/menu-black.png'),
        detail: {}
      }
    },

    computed: {},

    created () {},

    destroyed() {
      window.removeEventListener("scroll", this.handleScroll, true);
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
      CommonApi.getRecruitDetail({ id: this.$route.query.id }).then(res => {
        if (res && res['code'] === 200) {
          this.detail = res['data']
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
      showNavi () {
        let isShow = document.getElementById('navigation').style.display
        document.getElementById('navigation').style.display = isShow === 'none' ? 'block' : 'none'
      },
      handleScroll() {
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
    .employ-detail {
        height: auto;
        overflow-x: hidden;
        background-color: #F7F7F7;
        .h80 {
            height: 80px;
        }
        .mt40 {
            margin-top: 40px;
        }
        .mt34 {
            margin-top: 34px;
        }
        .ml8 {
            margin-left: 8px;
        }
        .mb16 {
            margin-bottom: 16px!important;
        }
        .mt7 {
            margin-top: 7px;
        }
        .ml12 {
            margin-left: 12px!important;
        }
        .detail-wrapper {
            padding: 35px 24px;
            .contact-us {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .c-right {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 211.5px;
                        height: 202px;
                        margin-top: 10px;
                    }
                    span {
                        font-size: 20px;
                        font-weight: 500;
                        color: #262626;
                    }
                }
                .c-left {
                    display: flex;
                    flex-direction: column;
                    .c-mobile, .c-email {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        img {
                            width: 38px;
                            height: 38px;
                        }
                        span {
                            font-size: 24px;
                            font-weight: 500;
                            line-height: 46px;
                            color: #262626;
                            margin-left: 16px;
                        }
                    }
                    .c-title {
                        font-size: 30px;
                        font-weight: 500;
                        line-height: 46px;
                        color: #262626;
                    }
                }
            }
            .duty-wrapper {
                margin-bottom: 30px;
                .duty-content {
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 46px;
                    color: #262626;
                }
                .duty-title {
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 46px;
                    color: #262626;
                    margin-bottom: 27px;
                }
            }
            .header-left {
                display: flex;
                flex-direction: column;
                .title {
                    font-size: 44px;
                    font-weight: 500;
                    line-height: 46px;
                    color: #2B2B2B;
                }
                .employ-detail {
                    margin-top: 10px;
                    font-size: 24px;
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
            .middle-split {
                height: 2px;
                background-color: #C9C9C9;
                margin: 23px 0 28px;
            }
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

        .headerFixed {
            position: fixed!important;
            top: 0;
            background-color: #000;
        }
        .navigation {
            position: absolute;
            top: 80px;
            left: 0;
            width: 375px;
            z-index:5;
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