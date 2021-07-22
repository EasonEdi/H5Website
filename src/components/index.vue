<template>
    <div class="index-wrapper">
        <div class="index-logo" v-lazy:background-image="indexTop">
            <div class="mask"></div>
            <div :class="{h80:isHeaderFixed}"></div>
            <div class="header-wrapper" :class="{headerFixed:isHeaderFixed}">
                <div class="menu-wrapper">
                    <img src="../../src/assets/image/menu.png" alt="menu" id="menu" @click="showNavi">
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
            <div class="scope-wrapper">
                <div class="brand-title">
                    <div class="split"></div>
                    <div class="title">星聚会KTV</div>
                    <div class="split"></div>
                </div>
                <div class="scope-number">
                    <div class="business">
                        <span>
                            营业中
                        </span>
                        <span class="number">
                            100
                        </span>
                        <span>
                            家
                        </span>
                    </div>
                    <div class="business ml48">
                        <span>
                            筹备中
                        </span>
                        <span class="number">
                            400
                        </span>
                        <span>
                            家
                        </span>
                    </div>
                </div>
                <div class="make-friend">
                   <span>
                       音乐生活全场景社交空间
                   </span>
                    <span>
                        &nbsp;&nbsp;来星聚会，交真朋友
                    </span>
                </div>
                <div class="btn-wrapper">
                    <div class="btn" @click="menuLocation('join')">
                        加盟我们
                    </div>
                    <div class="btn ml60" @click="menuLocation('employ')">
                        招贤纳士
                    </div>
                </div>
            </div>
        </div>

        <div class="brand-superiority">
            <div class="superiority-wrapper">
                <span>
                    品牌优势
                </span>
                <span>
                    Brand advantage
                </span>
            </div>
            <div class="brand-content">
                <div class="content-wrapper">
                    <div class="content-img bg1">
                        <div class="title-mask">
                            <span>专业的一站式服务团队</span>
                        </div>
                    </div>
                    <div class="content-img ml10 bg2">
                        <div class="title-mask">
                            <span>直营管控的运营管理体制</span>
                        </div>
                    </div>
                </div>
                <div class="content-wrapper mt14">
                    <div class="content-img bg3">
                        <div class="title-mask">
                            <span>与时俱进的互联网创新模式</span>
                        </div>
                    </div>
                    <div class="content-img ml10 bg4">
                        <div class="title-mask">
                            <span>强大的市场策划和推广支持</span>
                        </div>
                    </div>
                </div>
                <div class="content-wrapper mt14">
                    <div class="content-img bg5">
                        <div class="title-mask">
                            <span>统一的采购和配送渠道</span>
                        </div>
                    </div>
                    <div class="content-img ml10 bg6">
                        <div class="title-mask">
                            <span>丰富的品牌势能与资源共享</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 品牌介绍 -->
        <div class="brand-introduction">
            <div class="module-title">
                <span>
                    品牌介绍
                </span>
                <span>
                    Brand introduction
                </span>
            </div>
            <div class="introduction">
                星聚会KTV成立于2010年，是全国知名网红互联网连锁KTV品牌。11年娱乐行业深耕经验，网格化布局全国一二线城市核心购物中心，颠覆传统KTV单一模式，开创性的将情调茶吧、酒吧娱乐、智能互动、影音交互、多元娱乐场景融合，打造移动互联网下线上线下结合的音乐社交空间。在未来的规划中，星聚会将在3-5年完成全国拓展门店1000家，向国内娱乐社交头牌迈进。
            </div>
            <div class="intro-img">
                <img src="../../src/assets/image/introduction.jpg" alt="introduction">
            </div>
        </div>
        <!-- 发展历程 -->
        <div class="develop-wrapper">
            <div class="title-wrapper">
                <div class="dev-mask"></div>
                <span class="dev-title">发展历程</span>
                <ul class="year-wrapper">
                    <li>
                        <div class="year" @click="onChange(0)">
                            <span class="year-number">2012</span>
                            <span class="year-dot">
                               <span class="year-active" :style="{display: (current === 0 || current === 1 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div class="year" @click="onChange(2)">
                            <span class="year-number">2015</span>
                            <span class="year-dot">
                                <span class="year-active" :style="{display: (current === 2 || current === 3 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div class="year" @click="onChange(4)">
                            <span class="year-number">2017</span>
                            <span class="year-dot">
                                <span class="year-active" :style="{display: (current === 4 || current === 5 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div class="year" @click="onChange(6)">
                            <span class="year-number">2019</span>
                            <span class="year-dot">
                                <span class="year-active" :style="{display: (current === 6 || current === 7 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li style="margin-right: 0">
                        <div class="year" @click="onChange(8)">
                            <span class="year-number">2021</span>
                            <span class="year-dot">
                                <span class="year-active" :style="{display: (current === 8 ? 'block' : 'none')}"></span>
                           </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="progress-wrapper">
                <div class="progress-line">
                    <div class="progress-actives" id="pro-active"></div>
                </div>
                <div class="arrow-wrapper">
                    <img src="../../src/assets/image/arrow-left.png" alt="left">
                    <img src="../../src/assets/image/arrow-right.png" alt="right" class="ml22">
                </div>
            </div>
            <div class="img-swipe">
                <van-swipe :loop="false" :initial-swipe="current" :show-indicators="false" :width="width" @change="onChange">
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2012
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                星聚会首店苏州信投大厦店在苏州开业
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2012.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2014
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                苏州新区金狮大厦店开业
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2014.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2015
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                首次进驻无锡T12
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2015.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2016
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                首次入驻上海与南京，上海合生汇店与南京景枫店成为标杆主题店
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2016.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2017
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                进驻杭州西湖银泰，同年第12家标准店精品店苏州中心店开业
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2017.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2018
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                首次进驻北京，同年北京三店齐开
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2018.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2019
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                重庆、杭州、深圳、南京、苏州、南通六城7店齐开，同年全国门店数量达到60家
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2019.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2020
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                标准店升级至7.0版，复制扩张至全国一二线城市核心商圈80家
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/swipe-img.png" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <div class="year-dev">
                                2021
                            </div>
                            <div class="year-split"></div>
                            <div class="swipe-intro">
                                推出高线产品Party show，5家筹建中；标准店累计开业120家，筹备中200家
                            </div>
                            <div class="swipe-img">
                                <img src="../../src/assets/image/2021.jpg" alt="swipe">
                            </div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <!--招商加盟-->
        <div @click="menuLocation('join')" class="business-join">
            <div class="join-intro">
                <div class="join-title">
                    招商加盟
                </div>
                <div class="intro-detail">
                    完善的管理架构、优秀的团队实战运营经验强大的扩展升级 能力，为您提供全方位的投资保障。
                </div>
                <div class="location">
                    <img src="../../src/assets/image/location-arrow.png" alt="location">
                </div>
            </div>
            <div class="join-bg bg-location">
                <div class="join-mask">
                    <span>
                        专业的一站式服务团队
                    </span>
                </div>
            </div>
        </div>
        <!--招贤纳士-->
        <div @click="menuLocation('employ')" class="business-join mt40 mb70">
            <div class="join-intro">
                <div class="join-title">
                    招贤纳士
                </div>
                <div class="intro-detail">
                    自由包容的文化氛围让你自由发展，你的声音会被认真聆听，在 这里，你遇到的不只是同事，更是并肩成长的伙伴。
                </div>
                <div class="location">
                    <img src="../../src/assets/image/location-arrow.png" alt="location">
                </div>
            </div>
            <div class="join-bg bg-party">
                <div class="join-mask">
                    <span>
                        加入我们，共同成就一个新方向
                    </span>
                </div>
            </div>
        </div>
        <!-- footer -->
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
  export default {
    name: 'Index',
    components: {},
    data () {
      return {
        isHeaderFixed: false,
        current: 0,
        indexTop: require('../assets/image/advantage/index-top.jpg')
      }
    },

    computed: {
      width () {
        return 426 / (75 / parseFloat(document.getElementsByTagName('html')[0].style.fontSize))
      }
    },

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
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
        if (scrollTop > 0) {
          this.isHeaderFixed = true
        } else {
          this.isHeaderFixed = false
        }
      },
      onChange (index) {
        this.current = index
        if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8) {
          document.getElementById('pro-active').style.width = ((index / 2 + 1) * 120) / 75 * parseFloat(document.getElementsByTagName('html')[0].style.fontSize) + 'px'
        }
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
    .index-wrapper {
        overflow-x: hidden;
        .ml48 {
            margin-left: 48px;
        }
        .ml60 {
            margin-left: 60px;
        }
        .ml10 {
            margin-left: 10px;
        }
        .ml12 {
            margin-left: 12px;
        }
        .mt14 {
            margin-top: 14px;
        }
        .mt40 {
            margin-top: 40px;
        }
        .ml22 {
            margin-left: 22px;
        }
        .mb70 {
            margin-bottom: 70px;
        }
        .ml8 {
            margin-left: 8px;
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
        /**/
        .business-join {
            width: 100%;
            .join-intro {
                padding: 0 24px;
                .join-title {
                    font-size: 40px;
                    line-height: 46px;
                    color: #FFFFFF;
                }
                .intro-detail {
                    width: 520px;
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 30px;
                    color: #FFFFFF;
                    margin-top: 10px;
                }
                .location {
                    width: 64.77px;
                    height: 38.54px;
                    margin-top: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

            }
            .bg-location {
                background: url("../../src/assets/image/join.jpg") no-repeat;
            }
            .bg-party {
                background: url("../../src/assets/image/party-img.jpg") no-repeat;
            }
            .join-bg {
                margin-top: 22px;
                position: relative;
                width: 750px;
                height: 375px;
                background-position: center center;
                background-size: cover;
                .join-mask {
                    width: 100%;
                    height: 78px;
                    position: absolute;
                    bottom: 0;
                    z-index: 0;
                    font-size: 24px;
                    line-height: 28px;
                    color: #FFFFFF;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    &:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: -1;
                        background: #999;
                        filter: blur(29px);
                        opacity: 0.8;
                    }
                    span {
                        padding-left: 24px;
                    }
                }
            }
        }
        .develop-wrapper {
            .img-swipe {
                padding: 0 24px;
                margin-top: 70px;
                margin-bottom: 62px;
                /deep/ .van-swipe__track {
                    width: 3834px !important;
                    .van-swipe-item {
                        width: 426px !important;
                        .swipe-content {
                            width: 100%;
                            .year-dev {
                                font-size: 24px;
                                line-height: 43px;
                                color: #FFFFFF;
                            }
                            .year-split {
                                width: 388px;
                                height: 2px;
                                background: #fff;
                                margin: 9px 0 16px;
                            }
                            .swipe-intro {
                                font-size: 20px;
                                line-height: 30px;
                                color: #FFFFFF;
                                height: 90px;
                                padding-right: 10px;
                            }
                            .swipe-img {
                                width: 368px;
                                height: 210px;
                                margin-top: 4px;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .progress-wrapper {
                padding-left: 24px;
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: 34px;
                .progress-line {
                    position: relative;
                    width: 600px;
                    height: 2px;
                    background: rgba(219, 219, 219, 1);
                    .progress-actives {
                        position: absolute;
                        width: 120px;
                        top: 0;
                        left: 0;
                        height: 2px;
                        background-color: rgba(255, 218, 60, 1);
                    }
                }
                .arrow-wrapper {
                    display: flex;
                    align-items: center;
                    margin-left: 24px;
                    img {
                        width: 12.37px;
                        height: 19.72px;
                    }
                }
            }
            .title-wrapper {
                position: relative;
                width: 750px;
                height: 221px;
                background: url("../../src/assets/image/develop-bg.png") no-repeat;
                background-size: cover;
                background-position: center center;
                display: flex;
                z-index: 0;
                flex-direction: column;
                align-items: center;
                .dev-title {
                    z-index: 2;
                    font-size: 32px;
                    line-height: 43px;
                    color: #FFFFFF;
                    margin-top: 57px;
                }
                .year-wrapper {
                    margin-top: 10px;
                    display: flex;
                    flex-direction: row;
                    li {
                        list-style: none;
                        margin-right: 64px;
                        width: 32px;
                        .year {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .year-number {
                                font-size: 24px;
                                line-height: 43px;
                                color: #fff;
                            }
                            .year-dot {
                                width: 32px;
                                height: 32px;
                                background: #999;
                                border-radius: 50%;
                                opacity: 0.7;
                                position: relative;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                .year-active {
                                    display: none;
                                    width: 24px;
                                    height: 24px;
                                    background: #FFFFFF;
                                    border-radius: 50%;
                                }
                                .year-split {
                                    position: absolute;
                                    width: 64px;
                                    height: 2px;
                                    top: 15px;
                                    left: 32px;
                                    background: #999;
                                }
                            }
                        }
                    }
                }
                .dev-mask {
                    position: absolute;
                    z-index: -1;
                    background: #191919;
                    filter: blur(22px);
                    transform: scale(1.2);
                    opacity: 0.65;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
            }
        }
        .brand-introduction {
            width: 100%;
            padding: 55px 0 52px;
            background: #141414;
            .module-title {
                display: flex;
                flex-direction: column;
                align-items: center;
                span:nth-child(1) {
                    font-size: 32px;
                    line-height: 45px;
                    color: #FFFFFF;
                }
                span:nth-child(2) {
                    font-size: 21px;
                    font-weight: 400;
                    line-height: 46px;
                    color: #B5B5B5;
                }
            }
            .intro-img {
                margin-top: 36px;
                padding: 0 24px;
                img {
                    width: 702px;
                    height: 362px;
                }
            }
            .introduction {
                padding: 0 66px;
                font-size: 26px;
                margin-top: 30px;
                font-weight: 400;
                line-height: 40px;
                color: #A7A7A7;
            }
        }
        .brand-superiority {
            width: 100%;
            padding-bottom: 43px;
            .brand-content {
                width: 100%;
                display: flex;
                flex-direction: column;
                .content-wrapper {
                    padding: 0 24px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .bg1 {
                        background: url("../../src/assets/image/bg1.jpg") no-repeat;
                    }
                    .bg2 {
                        background: url("../../src/assets/image/bg2.png") no-repeat;

                    }
                    .bg3 {
                        background: url("../../src/assets/image/bg3.jpg") no-repeat;

                    }
                    .bg4 {
                        background: url("../../src/assets/image/bg4.png") no-repeat;

                    }
                    .bg5 {
                        background: url("../../src/assets/image/bg5.jpg") no-repeat;

                    }
                    .bg6 {
                        background: url("../../src/assets/image/bg6.png") no-repeat;

                    }
                    .content-img {
                        position: relative;
                        width: 346px;
                        height: 326px;
                        background-size: cover;
                        background-position: center center;
                        .title-mask {
                            width: 100%;
                            height: 56px;
                            position: absolute;
                            bottom: 0;
                            z-index: 0;
                            font-size: 24px;
                            line-height: 33px;
                            color: #fff;
                            display: flex;
                            align-items: center;
                            overflow: hidden;
                            span {
                                padding-left: 6px;
                            }
                            &:before {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                z-index: -1;
                                background: #333;
                                opacity: 1;
                                filter: blur(20px);
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }
            .superiority-wrapper {
                display: flex;
                flex-direction: column;
                padding: 36px 0;
                align-items: center;
                span:nth-child(1) {
                    font-size: 32px;
                    line-height: 45px;
                    color: #FFFFFF;
                }
                span:nth-child(2) {
                    font-size: 21px;
                    font-weight: 400;
                    line-height: 46px;
                    color: #B5B5B5;
                }
            }
        }
        .index-logo {
            position: relative;
            width: 100%;
            height: 811px;
            background-size: cover;
            background-position: center center;
            .scope-wrapper {
                display: flex;
                z-index: 2;
                position: relative;
                flex-direction: column;
                align-items: center;
                margin-top: 156px;
                .make-friend {
                    position: relative;
                    width: 530px;
                    margin-top: 46px;
                    height: 61px;
                    color: #fff;
                    display: flex;
                    font-size: 24px;
                    align-items: center;
                    justify-content: center;
                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        filter: blur(0);
                        border-radius: 4px;
                        background: #FFFFFF;
                        opacity: .4;
                    }
                }
                .btn-wrapper {
                    display: flex;
                    flex-direction: row;
                    margin-top: 124px;
                    .btn {
                        width: 253px;
                        height: 92px;
                        background: #F39800;
                        opacity: 1;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 30px;
                        letter-spacing: 2px;
                        color: #fff;
                    }
                }
                .scope-number {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    font-size: 38px;
                    font-weight: 500;
                    line-height: 46px;
                    margin-top: 80px;
                    color: #fff;
                    .business {
                        display: flex;
                        flex-direction: row;
                        align-items: baseline;
                        letter-spacing: 4px;
                        .number {
                            font-size: 50px;
                            color: #F5AC43;
                        }
                    }

                }
                .brand-title {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    .split {
                        width: 76px;
                        height: 4px;
                        background-color: #FFF;
                        border-radius: 5px;
                    }
                    .title {
                        font-size: 46px;
                        font-weight: 500;
                        line-height: 46px;
                        color: #FFFFFF;
                        letter-spacing: 4px;
                        opacity: 1;
                        margin: 0 16px;
                    }
                }
            }
            .headerFixed {
                position: fixed !important;
                top: 0;
                background-color: #000;
                z-index: 999 !important;
            }
            .h80 {
                height: 80px;
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
                z-index: 3;
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
        .mask {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            background-color: rgba(21, 21, 21, .48);
            z-index: 1;
            width: 100%;
            height: 811px;
        }
    }
</style>
