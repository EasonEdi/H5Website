<template>
    <div class="join-wrapper">
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
        <!-- 加盟支持 -->
        <div class="join-support">
            <div class="module-title">
                <span>
                    加盟支持
                </span>
                <span>
                    Franchise support
                </span>
            </div>
            <div class="support-content">
                <div class="content-wrapper">
                    <img src="../assets/image/support1.png" alt="address">
                    <span class="title">选址评估</span>
                    <div class="description">资深拓展团队对商圈进行市场 调研及深度剖析，通过数据分 析确定选址，为加盟商提供专 业的选址指导。</div>
                </div>
                <div class="content-wrapper ml6">
                    <img src="../assets/image/support2.png" alt="address">
                    <span class="title">店面筹建</span>
                    <div class="description">图纸规划、装修方案、设备采购、 商务法务谈判、系统调试、设计人 员现场实地测量、项目经理全程跟 踪、设备安装指导、工程联合验收
                        等均由总部提供专业支持
                    </div>
                </div>
                <div class="content-wrapper ml6">
                    <img src="../assets/image/support3.png" alt="address">
                    <span class="title">开业指导</span>
                    <div class="description">营销团队提供开业筹备流程、 策划引流方案，确保店铺顺利开业。</div>
                </div>
            </div>
            <div class="support-content mt7">
                <div class="content-wrapper">
                    <img src="../assets/image/support4.png" alt="address">
                    <span class="title">营销推广</span>
                    <div class="description">门店运营期提供活动策划、市场 推广扶持。</div>
                </div>
                <div class="content-wrapper ml6">
                    <img src="../assets/image/support5.png" alt="address">
                    <span class="title">运营管理</span>
                    <div class="description">专业运营管理体系（OPM）提供 市场营销支持、视觉设计支持、 会员大数据管理，为门店运营保驾护航。</div>
                </div>
                <div class="content-wrapper ml6">
                    <img src="../assets/image/support6.png" alt="address">
                    <span class="title">人事管理</span>
                    <div class="description">提供一体化的人员招聘、培训， 健全的人事管理制度、组织架 构、薪资结构，晋升通道。</div>
                </div>
            </div>
        </div>
        <!--加盟优势-->
        <div class="join-advantage">
            <div class="module-title">
                <span>
                    加盟优势
                </span>
                <span>
                    Franchise advantage
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
        <!--加盟政策-->
        <!--<div class="join-policy">-->
            <!--<div class="policy-wrapper">-->
                <!--<div class="module-title mb46">-->
                    <!--<span>-->
                        <!--加盟政策-->
                    <!--</span>-->
                    <!--<span>-->
                        <!--Franchise policy-->
                    <!--</span>-->
                <!--</div>-->
                <!--<div class="cost-wrapper">-->
                    <!--<div>-->
                        <!--<div class="item-name mb25" style="text-align: center">-->
                            <!--费用项-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--品牌授权费-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--装修设计费-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--履约保证金-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--加盟管理费-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--地址评估费-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--工程指导费-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--系统使用费-->
                        <!--</div>-->
                        <!--<div class="detail mb14" style="text-align: center">-->
                            <!--市场设计、营销推广费-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div>-->
                        <!--<div class="item-name mb25">-->
                            <!--费用明细-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--1.2万/包5年-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--100元/方-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--10万-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--6%、6%、7%、7%-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--3万-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--5万-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--18万年-->
                        <!--</div>-->
                        <!--<div class="detail mb14">-->
                            <!--0.5%-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--加盟流程-->
        <div class="join-flow">
            <div class="module-title">
                <span>
                    加盟流程
                </span>
                <span>
                    Franchise process
                </span>
            </div>
            <div class="process-img">
                <img src="../../src/assets/image/process.png" alt="process">
            </div>
        </div>
        <!--加入我们-->
        <div class="join-us">
            <div class="module-title">
                <span>
                    加入我们
                </span>
                <span>
                    Join us
                </span>
            </div>
            <div class="form">
                <div class="field-info">
                    <div class="field-wrapper">
                        <div class="field-title">
                            姓名&nbsp;(已为您的信息加密)<span>*</span>
                        </div>
                        <van-field
                            v-model="name"
                            name="姓名"
                            label="姓名"
                            placeholder="请输入您的姓名"
                        />
                    </div>
                    <div class="field-wrapper mt30">
                        <div class="field-title">
                            电话<span>*</span>
                        </div>
                        <van-field
                            v-model="telephone"
                            name="手机"
                            label="手机"
                            placeholder="请输入您的电话"
                        />
                    </div>
                    <div class="field-wrapper mt30">
                        <div class="field-title">
                            城市<span>*</span>
                        </div>
                        <van-field
                            v-model="address"
                            name="城市"
                            label="城市"
                            placeholder="请输入您所在的城市"
                        />
                    </div>
                    <div class="field-wrapper mt40">
                        <div class="field-title">
                            投资金额<span>*</span>
                        </div>
                        <div class="money-wrapper">
                            <div class="m-content mt20">
                                <div @click="getMoney('300-400万')" class="content" :class="{active:money==='300-400万'}">
                                    300-400万
                                </div>
                                <div class="content" @click="getMoney('400-600万')" :class="{active:money==='400-600万'}">
                                    400-600万
                                </div>
                            </div>
                            <div class="m-content mt40">
                                <div class="content" @click="getMoney('600万以上')" :class="{active:money==='600万以上'}">
                                    600万以上
                                </div>
                                <div class="content" style="display: none;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="display: flex; justify-content: center">
                <div class="submit-btn" @click="submitJoinInfo">
                    咨询加盟
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
  import CommonApi from '../../src/config/action/common'
  import { isEmpty } from '../../utils/lang'
  import { Toast } from 'vant'

  export default {
    name: 'Join',
    components: {},
    data () {
      return {
        name: '',
        telephone: '',
        address: '',
        money: '',
        isHeaderFixed: false
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
    },

    methods: {
      getMoney (money) {
        this.money = money
      },
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
      submitJoinInfo () {
        if (isEmpty(this.name) || isEmpty(this.telephone) || isEmpty(this.address) || isEmpty(this.money)) {
          Toast({
            position: 'top',
            message: '请完善必填信息'
          })
          return
        }
        CommonApi.joinUs({
          name: this.name,
          telephone: this.telephone,
          address: this.address,
          money: this.money
        }, 'application/x-www-form-urlencoded').then(res => {
          if (res && res['code'] === 200) {
            Toast({
              position: 'top',
              message: '提交成功'
            })
            this.name = ''
            this.telephone = ''
            this.money = ''
            this.address = ''
          } else {
            Toast({
              position: 'top',
              message: res['message']
            })
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
    .join-wrapper {
        width: 100%;
        overflow: hidden;
        .h80 {
            height: 80px;
        }
        .mt30 {
            margin-top: 30px;
        }
        .ml12 {
            margin-left: 12px;
        }
        .mt20 {
            margin-top: 20px;
        }
        .mt14 {
            margin-top: 14px;
        }
        .ml8 {
            margin-left: 8px;
        }
        .mb14 {
            margin-bottom: 30px;
        }
        .mt40 {
            margin-top: 40px;
        }
        .mb25 {
            margin-bottom: 30px;
        }
        .mt7 {
            margin-top: 7px;
        }
        .ml6 {
            margin-left: 6px;
        }
        .mb46 {
            margin-bottom: 46px !important;
        }
        .develop-wrapper {
            .img-swipe {
                padding: 0 24px;
                margin-top: 50px;
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
                    width: 600px;
                    height: 2px;
                    background: rgba(219, 219, 219, 1);
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
                                .year-active {
                                    display: none;
                                    position: absolute;
                                    top: 4px;
                                    left: 4px;
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
        .join-us {
            margin: 39px 0;
            background: rgba(15, 15, 15, 1);
            padding: 25px 0;
            display: flex;
            flex-direction: column;
            .submit-btn {
                margin: 66px 0 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 454px;
                height: 80px;
                background: #F39800;
                border-radius: 4px;
                font-size: 24px;
                line-height: 33px;
                color: #fff;
            }
            .form {
                display: flex;
                flex-direction: column;
                padding: 0 40px;
                .field-info {
                    display: flex;
                    flex-direction: column;
                    /*justify-content: space-between;*/
                    .field-wrapper {
                        display: flex;
                        flex-direction: column;
                        .money-wrapper {
                            padding: 0 16px;
                            display: flex;
                            flex-direction: column;
                            .m-content {
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
                                .active {
                                    border: 2px solid #F39800!important;
                                    background: rgba(243, 152, 0, 0.45);
                                }
                                .content {
                                    width: 298px;
                                    height: 89px;
                                    border: 2px solid #989898;
                                    opacity: 1;
                                    border-radius: 12px;
                                    font-size: 28px;
                                    font-weight: 500;
                                    line-height: 40px;
                                    color: #FFF;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                }
                            }
                        }
                        .field-title {
                            font-size: 24px;
                            font-weight: 500;
                            line-height: 33px;
                            color: #FFF;
                            margin-bottom: 8px;
                            span {
                                color: rgba(243, 152, 0, 1);
                                margin-left: 4px;
                            }
                        }
                    }
                    /deep/ .van-cell {
                        height: 70px;
                        background: #FFFFFF;
                        border-radius: 4px;
                        .van-cell__value {
                            display: flex;
                            align-items: center;
                            .van-field__body {
                                flex: 1;
                            }
                        }
                        .van-field__control {
                            color: #888;
                            font-size: 24px;
                            &::placeholder {
                                font-size: 24px;
                                color: #CCC;
                            }
                        }
                        .van-field__label {
                            display: none;
                        }
                        &:after {
                            display: none;
                        }

                    }
                }
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

        .join-flow {
            margin-top: 40px;
            background: rgba(15, 15, 15, 1);
            padding: 25px 26px 10px;
            .process-img {
                img {
                    width: 100%;
                }
            }
        }
        .cost-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #FFF;
            .item-name {
                font-size: 28px;
                line-height: 28px;
            }
            .detail {
                font-size: 24px;
                line-height: 22px;
            }
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
        .join-policy {
            margin-top: 52px;
            padding: 0 49px;
            .policy-wrapper {
                background: #0F0F0F;
                padding: 20px 39px 58px;
                border-radius: 4px;
            }
        }
        .join-advantage {
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
        }
        .join-support {
            padding: 28px 24px 48px;
            .support-content {
                display: flex;
                flex-direction: row;
                .content-wrapper {
                    width: 230px;
                    height: 250px;
                    background: #2F2F2F;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
                    padding: 0 10px;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 40px;
                        height: 40px;
                        margin-top: 24px;
                    }
                    .title {
                        margin-top: 10px;
                        font-size: 22px;
                        line-height: 43px;
                        color: #FFF;
                    }
                    .description {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 20px;
                        text-align: center;
                        color: #7C7C7C;
                    }
                }
            }
        }
        .header-bg {
            width: 750px;
            height: 419px;
            background: url("../../src/assets/image/join-header.png") no-repeat;
            background-size: cover;
            background-position: center center;
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
    }
</style>
