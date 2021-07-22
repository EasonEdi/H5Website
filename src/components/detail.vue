<template>
    <div class="detail-wrapper">
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
        <div :class="{h80:isHeaderFixed}"></div>
        <div class="header-bg"></div>
        <!--tab切换-->
        <div class="tab-wrapper" :class="{tabFixed:isTabFixed}">
            <van-tabs v-model="active" @change="tabChange">
                <van-tab title="公司简介" />
                <van-tab title="品牌特色" />
                <van-tab title="空间产品" />
                <van-tab title="发展历程" />
                <van-tab title="门店分布" />
            </van-tabs>
        </div>
        <div :class="{h50:isTabFixed}">

        </div>
        <!--公司简介-->
        <div class="company-intro">
            <div class="module-title mt10">
                <span>
                    公司简介
                </span>
                <span>
                    Company profile
                </span>
            </div>
            <div class="intro-content">
                星聚汇投资管理有限公司成立于2010年，是星聚会KTV品牌的管理公司，历经十多年发展，现已覆盖全国21座城市核心购物中心超过100家门店。公司在发展期间，以塑造健康、休闲、时尚、安全、舒适的消费环境为经营方针，结合互联网思维打造出独特的KTV全场景社交空间模式，将时间与空间完美融合，并能够快速标准化的复制，向着「成为所有人聚会的首选地，打造中国社交空间第一品牌」迈进。
            </div>
            <div class="logo-wrapper">
                <img src="../../src/assets/image/detail-logo.png" alt="detailLogo">
            </div>
        </div>
        <!-- 品牌特色 -->
        <div class="brand-features">
            <div class="module-title mb0">
                <span>
                    品牌特色
                </span>
                <span>
                    Brand characteristics
                </span>
            </div>
            <div class="features-content">
                <div class="first">全场景线上线下融合的音乐社交空间</div>
                <div class="second mt4">
                    社交空间概念+互联网思维+多元娱乐组
                </div>
            </div>
        </div>
        <div class="img-wrapper">
            <img src="../../src/assets/image/advantage/brand.png" alt="hot">
        </div>
        <div class="img-wrapper mt12">
            <img src="../../src/assets/image/feature2.png" alt="feature">
        </div>
        <div class="img-wrapper mt12">
            <img src="../../src/assets/image/feature3.png" alt="feature">
        </div>
        <div class="h9"></div>
        <!--空间产品-->
        <div class="space-product">
            <div class="module-title ">
                <span>
                    空间产品
                </span>
                <span>
                    Space products
                </span>
            </div>
            <div class="space-swipe">
                <van-swipe class="my-swipe" :loop="false" indicator-color="white">
                    <van-swipe-item>
                        <div class="swipe-content">
                            <img src="../../src/assets/image/space1.jpg" alt="space">
                            <div class="content-block margin1">
                                <span class="store-name">南京景枫店</span>
                                <span class="store-intro">南京老版本旗舰店，以街区式酒吧风格为主。</span>
                            </div>
                        </div>
                        <div class="swipe-content">
                            <div class="content-block margin2">
                                <span class="store-name">苏州苏州中心店</span>
                                <span class="store-intro">5.0版本标准精品店，色调偏向温暖年轻化。</span>
                            </div>
                            <img src="../../src/assets/image/space2.jpg" alt="space">
                        </div>
                        <div class="swipe-content">
                            <img src="../../src/assets/image/space3.jpeg" alt="space">
                            <div class="content-block margin1">
                                <span class="store-name">杭州金沙印象城店</span>
                                <span class="store-intro">星聚会×mallsee coffee，首家音乐咖啡空间。</span>
                            </div>
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="swipe-content">
                            <img src="../../src/assets/image/space4.jpg" alt="space">
                            <div class="content-block margin1">
                                <span class="store-name">上海南翔印象城店</span>
                                <span class="store-intro">首家6.0版本店，声光电全新升级。</span>
                            </div>
                        </div>
                        <div class="swipe-content">
                            <div class="content-block margin2">
                                <span class="store-name">上海维璟印象城店</span>
                                <span class="store-intro">首家7.0版本店，空间交互体验极致提升。</span>
                            </div>
                            <img src="../../src/assets/image/space5.jpg" alt="space">
                        </div>
                        <div class="swipe-content">
                            <img src="../../src/assets/image/space6.jpeg" alt="space">
                            <div class="content-block margin1">
                                <span class="store-name">苏州李公堤店</span>
                                <span class="store-intro">星聚会高线副牌Party Show即将登场。</span>
                            </div>
                        </div>
                    </van-swipe-item>
                </van-swipe>
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
                            <span class="year-number">2021</span>
                            <span class="year-dot">
                               <span class="year-active"
                                     :style="{display: (current === 0 || current === 1 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div class="year" @click="onChange(2)">
                            <span class="year-number">2019</span>
                            <span class="year-dot">
                                <span class="year-active"
                                      :style="{display: (current === 2 || current === 3 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div class="year" @click="onChange(4)">
                            <span class="year-number">2017</span>
                            <span class="year-dot">
                                <span class="year-active"
                                      :style="{display: (current === 4 || current === 5 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li>
                        <div class="year" @click="onChange(6)">
                            <span class="year-number">2015</span>
                            <span class="year-dot">
                                <span class="year-active"
                                      :style="{display: (current === 6 || current === 7 ? 'block' : 'none')}"></span>
                               <span class="year-split"></span>
                           </span>
                        </div>
                    </li>
                    <li style="margin-right: 0">
                        <div class="year" @click="onChange(8)">
                            <span class="year-number">2012</span>
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
                <van-swipe :loop="false" :initial-swipe="current" :show-indicators="false" :width="width"  @change="onChange">
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
                </van-swipe>
            </div>
        </div>
        <!--门店分布-->
        <div class="shop-spread">
            <div class="module-title">
                <span>
                    门店分布
                </span>
                <span>
                    Store distribution
                </span>
            </div>
            <div class="img-box" id="wrapper">
                <div class="spread-img">
                    <img src="../../src/assets/image/shop1.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop2.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop3.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop4.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop5.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop6.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop7.jpg" alt="shop">
                    <img class="ml8" src="../../src/assets/image/shop8.jpg" alt="shop">
                </div>
            </div>
        </div>
        <!--门店查询-->
        <div class="shop-check">
            <div class="search-header">
                <div class="header-content" @click="showCityPicker">
                    <div class="search-name">
                        {{city['text']}}
                    </div>
                    <img src="../../src/assets/image/arrow-down.png" alt="search">
                </div>
                <div class="header-content ml20" @click="showAreaPicker">
                    <div class="search-name">
                        {{area['text']}}
                    </div>
                    <img src="../../src/assets/image/arrow-down.png" alt="search">
                </div>
            </div>
            <div v-for="(item, index) in showList" class="shop-list mb46" :key="index">
                <div class="shop-wrapper">
                    <div v-for="(data, i) in item" :key="i" class="shop-content">
                        <div class="content">
                            <div class="title">
                                {{data['name']}}
                            </div>
                            <div class="address">
                                <img src="../../src/assets/image/shop-location.png" alt="location">
                                <div class="address-detail ml10">
                                    {{data['address']}}
                                </div>
                            </div>
                            <div class="phone">
                                <img src="../../src/assets/image/phone.png" alt="location">
                                <div class="phone-detail ml10">
                                    <div>
                                        {{data['telephone']}}
                                    </div>
                                </div>
                            </div>
                            <div class="shop-bottom">
                                <div class="bottom-left">
                                </div>
                                <div class="bottom-right">
                                    <img src="../../src/assets/image/bottom-right.png" alt="right">
                                    <img src="../../src/assets/image/bottom-right.png" alt="right">
                                    <img src="../../src/assets/image/bottom-right.png" alt="right">
                                </div>
                            </div>
                        </div>
                        <img class="shop-pb" src="../../src/assets/image/shop-bg.png" alt="shop">
                    </div>
                </div>
            </div>
            <div class="pagination-wrapper">
                <van-pagination v-model="currentPage" :items-per-page="4" force-ellipses :total-items="total"
                                :show-page-size="5" @change="pageChange">
                    <template #prev-text>
                        <div class="prev-btn">
                            <div class="triangle"></div>
                        </div>
                    </template>
                    <template #next-text>
                        <div class="prev-btn">
                            <div class="triangle-right"></div>
                        </div>
                    </template>
                    <template #page="{ text }">{{ text }}</template>
                </van-pagination>
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
        <van-popup class="popup-style" v-model="isShowPicker" round position="bottom">
            <van-picker
                show-toolbar
                :columns="cityList"
                @cancel="isShowPicker = false"
                @confirm="onConfirm"
            />
        </van-popup>
        <van-popup class="popup-style" v-model="isShowAreaPicker" round position="bottom">
            <van-picker
                show-toolbar
                :columns="areaList"
                @cancel="isShowAreaPicker = false"
                @confirm="onAreaConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
  import IScroll from '../../src/assets/js/iscroll'
  import CommonApi from '../../src/config/action/common'
  import { Toast } from 'vant'

  export default {
    name: 'Detail',
    components: {},
    data () {
      return {
        isHeaderFixed: false,
        active: 0,
        current: 0,
        value: '',
        currentPage: 1,
        isShowPicker: false,
        isShowAreaPicker: false,
        isTabFixed: false,
        offset: 0,
        elementScrollTop: 0,
        bodyScrollTop: 0,
        cityList: [],
        areaList: [],
        city: {area_id: '', text: '市', areaList: []},
        area: {c_area_id: '', text: '区'},
        total: 0,
        showList: [],
        dataList: [],
        isFirstShow: false
      }
    },

    computed: {
      width () {
        return 426 / (75 / parseFloat(document.getElementsByTagName('html')[0].style.fontSize))
      }
    },

    created () {},

    watch: {},

    mounted () {
      window.scrollTo(0, 0)
      let _this = this
      window.addEventListener('scroll', _this.handleScroll, true)
      window.addEventListener('click', (e) => {
        let isShow = document.getElementById('navigation').style.display
        if (isShow === 'block' && !document.getElementById('navigation').contains(e.target) && !document.getElementById('menu').contains(e.target)) {
          document.getElementById('navigation').style.display = 'none'
        }
      })
      _this.$nextTick(() => {
        let myScroll = new IScroll('#wrapper', {
          scrollX: true, scrollY: false
        })
      })
      CommonApi.getCityArea().then(res => {
        if (res && res['code'] === 200) {
          this.cityList = [{area_id: '', text: '市', areaList: []}, ...res['data'].map(item => {
            return {text: item.area_name, area_id: item.area_id, areaList: item.areaList}
          })]
        }
      })
      _this.getShopList()
    },

    destroyed () {
      window.removeEventListener('scroll', this.handleScroll, true)
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
            this.active = key
            this.tabChange()
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
      pageChange (value) {
        this.showList = this.arrayToDimension(this.dataList.slice((value - 1) * 4, value * 4))
      },
      tabChange (name, title) {
        let baseWidth = 75 / parseFloat(document.getElementsByTagName('html')[0].style.fontSize)
        let scrollTop = 0
        if (this.active === 0) {
          scrollTop = 420 / baseWidth
        }
        if (this.active === 1) {
          scrollTop = 910 / baseWidth
        }
        if (this.active === 2) {
          scrollTop = 2478 / baseWidth
        }
        if (this.active === 3) {
          scrollTop = 3390 / baseWidth
        }
        if (this.active === 4) {
          scrollTop = 4096 / baseWidth
        }
        window.pageYOffset = scrollTop
        document.documentElement.scrollTop = scrollTop
        document.body.scrollTop = scrollTop
      },
      showNavi () {
        let isShow = document.getElementById('navigation').style.display
        document.getElementById('navigation').style.display = isShow === 'none' ? 'block' : 'none'
      },
      handleScroll () {
        let _this = this
        let baseWidth = 75 / parseFloat(document.getElementsByTagName('html')[0].style.fontSize)
        let scrollTop = 0
        if (_this.offset !== window.pageYOffset) {
          scrollTop = window.pageYOffset
        }
        if (_this.elementScrollTop !== document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        }
        if (_this.bodyScrollTop !== document.body.scrollTop) {
          scrollTop = document.body.scrollTop
        }
        if (scrollTop > 0) {
          _this.isHeaderFixed = true
        } else {
          _this.isHeaderFixed = false
        }
        if (scrollTop >= 419 / (75 / parseFloat(document.getElementsByTagName('html')[0].style.fontSize))) {
          _this.isTabFixed = true
        } else {
          _this.isTabFixed = false
        }
        if (scrollTop >= 420 / baseWidth && scrollTop < 906 / baseWidth) {
          _this.active = 0
        }
        if (scrollTop >= 906 / baseWidth && scrollTop < 2474 / baseWidth) {
          _this.active = 1
        }
        if (scrollTop >= 2474 / baseWidth && scrollTop < 3386 / baseWidth) {
          _this.active = 2
        }
        if (scrollTop >= 3386 / baseWidth && scrollTop < 4092 / baseWidth) {
          _this.active = 3
        }
        if (scrollTop >= 4092 / baseWidth) {
          _this.active = 4
        }
        _this.offset = window.pageYOffset
        _this.elementScrollTop = document.documentElement.scrollTop
        _this.bodyScrollTop = document.body.scrollTop
      },

      onConfirm (value) {
        if (this.city['text'] === value['text']) {
          this.isShowPicker = false
          return
        } else {
          this.city = value
          this.area = {c_area_id: '', text: '区'}
          this.areaList = [{c_area_id: '', text: '区'}, ...value['areaList'].map(item => {
            return {text: item.c_area_name, c_area_id: item.c_area_id}
          })]
          this.getShopList()
        }
        this.isShowPicker = false
      },
      onAreaConfirm (value) {
        this.area = value
        this.getShopList()
        this.isShowAreaPicker = false
      },
      showCityPicker () {
        this.isShowPicker = true
      },
      showAreaPicker () {
        if (this.city['text'] === '市') {
          Toast({
            position: 'top',
            message: '请先选择市查询'
          })
          return
        }
        this.isShowAreaPicker = true
      },
      onChange (index) {
        this.current = index
        if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8) {
          document.getElementById('pro-active').style.width = ((index / 2 + 1) * 120) / 75 * parseFloat(document.getElementsByTagName('html')[0].style.fontSize) + 'px'
        }
      },
      getShopList () {
        CommonApi.getStoreList({city: this.city['area_id'], area: this.area['c_area_id']}).then(res => {
          if (res && res['code'] === 200) {
            this.total = res['data'].length
            this.showList = this.arrayToDimension(res['data'].slice(0, 4))
            this.dataList = res['data']
            this.currentPage = 1
            !this.isFirstShow && this.$nextTick(() => {
              if (this.$route.query.key) {
                this.active = this.$route.query.key
                this.tabChange()
                this.isFirstShow = true
              }
            })
          }
        })
      },
      arrayToDimension (array) {
        let emptyArray = []
        emptyArray = [array.slice(0, 2), array.slice(2, 4)]
        return emptyArray
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
    .detail-wrapper {
        width: 100%;
        overflow: hidden;
        .mt4 {
            margin-top: 4px;
        }
        .h80 {
            height: 80px;
        }
        .h50 {
            height: 50px;
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
        /deep/ .popup-style {
            .van-picker__toolbar {
                padding: 20px;
                button {
                    font-size: 28px;
                }
            }
            .van-ellipsis {
                font-size: 28px;
            }
        }
        .ml8 {
            margin-left: 8px;
        }
        .ml10 {
            margin-left: 10px;
        }
        .ml20 {
            margin-left: 20px;
        }
        .mb46 {
            margin-bottom: 46px;
        }
        .shop-check {
            padding: 40px 0 42px 32px;
            /deep/ .pagination-wrapper {
                padding-right: 32px;
                margin-top: 40px;
                .van-pagination {
                }
                .van-pagination__prev, .van-pagination__next {
                    background-color: #000 !important;
                    display: flex;
                    padding: 0;
                    justify-content: flex-end;
                }
                .van-pagination__next {
                    justify-content: flex-start !important;
                }
                .van-pagination__item--disabled, .van-pagination__item--disabled:active {
                    background-color: #E8E8E8;
                }
                .van-pagination__item--active {
                    background-color: #FFB833 !important;
                    color: #fff !important;
                }
                .van-pagination__item {
                    background-color: #FFF;
                    color: #FFB834;
                    width: 48px;
                    height: 48px;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 25px;
                    margin-left: 10px;
                    border-radius: 2px;
                    min-width: 48px;
                    &::after {
                        content: none;
                    }
                }
                .prev-btn {
                    width: 44px;
                    height: 44px;
                    background: #fff;
                    border: 2px solid #FFB833;
                    border-radius: 2px;
                    display: flex;
                    align-items: center;
                    .triangle-right {
                        width: 0;
                        height: 0;
                        margin-left: 16px;
                        border-top: 8px solid transparent;
                        border-left: 16px solid #FFB834;
                        border-bottom: 8px solid transparent;
                    }
                    .triangle {
                        width: 0;
                        height: 0;
                        margin-left: 12px;
                        border-top: 8px solid transparent;
                        border-right: 16px solid #FFB834;
                        border-bottom: 8px solid transparent;
                    }
                }
            }
            .shop-list {
                display: flex;
                flex-direction: column;
                padding-right: 50px;
                .shop-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .shop-content {
                        position: relative;
                        width: 306px;
                        height: 256px;
                        background: #fff;
                        .content {
                            width: 100%;
                            height: 100%;
                            position: relative;
                            .shop-bottom {
                                display: flex;
                                margin-top: 51px;
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;
                                position: absolute;
                                bottom: 0;
                                left: 15px;
                                right: 15px;
                                .bottom-left {
                                    width: 57.73px;
                                    height: 12.73px;
                                    background: url("../../src/assets/image/shop-bottom.png") no-repeat;
                                    background-position: center center;
                                    background-size: cover;
                                }
                                .bottom-right {
                                    img {
                                        width: 15.65px;
                                        height: 18.58px;
                                        margin-left: -12px;
                                    }
                                }
                            }
                            .phone {
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                margin-top: 24px;
                                padding: 0 17px;
                                .phone-detail {
                                    font-size: 20px;
                                    font-weight: 500;
                                    line-height: 22px;
                                    color: #5F5F5F;
                                }
                                img {
                                    width: 24px;
                                    height: 24px;
                                }
                            }
                            .address {
                                margin-top: 20px;
                                display: flex;
                                flex-direction: row;
                                padding: 0 17px;
                                .address-detail {
                                    font-size: 20px;
                                    font-weight: 500;
                                    line-height: 22px;
                                    color: #5F5F5F;
                                }
                                img {
                                    width: 19.94px;
                                    height: 29.46px;
                                }
                            }
                            .title {
                                text-align: center;
                                font-size: 24px;
                                font-weight: 500;
                                line-height: 30px;
                                color: #5F5F5F;
                                padding-top: 18px;
                            }
                        }
                        .shop-pb {
                            position: absolute;
                            width: 306px;
                            height: 256px;
                            bottom: -18px;
                            right: -18px;
                            z-index: -1;
                        }
                    }
                }
            }
            .search-header {
                display: flex;
                flex-direction: row;
                margin-bottom: 50px;
                padding-right: 32px;
                .header-content {
                    flex: 1;
                    height: 56px;
                    background: #FFFFFF;
                    border: 2px solid #FFB833;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
                    border-radius: 4px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0 15px 0 18px;
                    img {
                        height: 9px;
                        width: 15px;
                    }
                    .search-name {
                        flex: 1;
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 28px;
                        color: #5F5F5F;
                    }
                }
            }
        }
        .shop-spread {
            padding: 0 24px;
            .touch-img {
                touch-action: pan-y !important;
            }
            .img-box {
                width: 100%;
                overflow-x: hidden;
                .spread-img {
                    width: 2464px;
                    display: flex;
                    flex-direction: row;
                    height: 208px;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    img {
                        width: 301px;
                        height: 100%;
                    }
                }
            }

        }
        .develop-wrapper {
            .img-swipe {
                padding: 0 24px;
                margin-top: 50px;
                margin-bottom: 53px;
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
                        .year-split {

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
        /*space-product*/
        .space-product {
            margin: 20px 24px 0px;
            padding-top: 10px;
            background: rgba(15, 15, 15, 1);
            .space-swipe {
                padding-bottom: 78px;
                position: relative;
                /deep/ .van-swipe {
                    position: static;
                    .van-swipe__indicators {
                        bottom: 40px;
                        .van-swipe__indicator {
                            width: 11px;
                            height: 11px;
                            background: #A2A2A2;
                            border-radius: 50%;
                        }
                        .van-swipe__indicator:not(:last-child) {
                            margin-right: 13px;
                        }
                        .van-swipe__indicator--active {
                            width: 46px;
                            height: 11px;
                            background: #FFDA3C !important;
                            border-radius: 6px;
                        }
                    }
                }
                .swipe-content {
                    display: flex;
                    flex-direction: row;
                    img {
                        display: block;
                        width: 546px;
                        height: 232px;
                    }
                    .margin1 {
                        margin: 35px 0 0 -101px;
                    }
                    .margin2 {
                        margin: 35px -101px 0 0;
                    }
                    .content-block {
                        width: 257px;
                        z-index: 1;
                        height: 160px;
                        background: #F39800;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
                        border-radius: 2px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #fff;
                        .store-name {
                            font-size: 24px;
                            font-weight: 500;
                            line-height: 24px;
                            margin: 29px 15px 0;
                        }
                        .store-intro {
                            font-size: 20px;
                            font-weight: 400;
                            line-height: 24px;
                            margin: 9px 15px 20px;
                        }
                    }
                }
            }
        }
        .h9 {
            height: 6px;
            background: rgba(15, 15, 15, 1);
        }
        .module-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            span:nth-child(1) {
                font-size: 32px;
                line-height: 45px;
                color: #FFFFFF;
            }
            span:nth-child(2) {
                font-size: 21px;
                font-weight: 400;
                line-height: 46px;
                color: #7C7C7C;
            }
        }
        .mb0 {
            margin-bottom: 0 !important;
        }
        .mt10 {
            margin-top: 10px;
        }
        .mt12 {
            margin-top: 12px;
        }
        .t179 {
            top: 179px !important;
        }
        .r24 {
            right: 24px !important;
            bottom: 0 !important;
            top: auto !important;
            left: auto !important;
        }
        .img-wrapper {
            width: 750px;
            height: 429px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .brand-features {
            margin: 28px 0 0;
            padding: 22px 0 0;
            background: rgba(15, 15, 15, 1);
            /*todo*/
            .features-content {
                width: 510px;
                font-size: 28px;
                font-weight: 500;
                line-height: 40px;
                color: #fff;
                margin: 10px auto 0;
                padding-bottom: 28px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        .company-intro {
            height: 463px;
            background: rgba(15, 15, 15, 1);
            margin-top: 22px;
            padding: 0 24px;
            overflow: hidden;
            .logo-wrapper {
                margin: 20px auto 0;
                width: 551px;
                height: 92px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .intro-content {
                font-size: 24px;
                font-weight: 500;
                line-height: 40px;
                color: #A3A3A3;
            }
        }
        .tabFixed {
            position: fixed;
            top: 80px;
            z-index: 5;
        }
        .tab-wrapper {
            width: 100%;
            height: 50px;
            background: #0F0F0F;
            /deep/ .van-tabs {
                height: 100%;
                .van-tabs__wrap {
                    height: 100%;
                }
                .van-tabs__nav--line {
                    padding-bottom: 0;
                }
                .van-tabs__nav {
                    background: #0F0F0F;
                    .van-tabs__line {
                        bottom: 0;
                        width: 64px;
                        height: 2px;
                        background: #FFDA3C;
                        opacity: 1;
                    }
                    .van-tab--active {
                        font-weight: bold !important;
                    }
                    .van-tab {
                        font-size: 20px;
                        font-weight: 300;
                        line-height: 50px;
                        color: #FFFFFF;
                    }
                }
            }
        }
        .headerFixed {
            position: fixed !important;
            top: 0;
            background-color: #000;
            z-index: 999;
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
        .header-bg {
            width: 750px;
            height: 419px;
            background: url("../../src/assets/image/detail-header.jpg") no-repeat;
            background-size: cover;
            background-position: center center;
        }
    }
</style>