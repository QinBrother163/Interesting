<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>充值中心</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <!------------ 底部 ------------>
        <div class="list-content ">
            <div class="list-content-top pt50">
                <div class="balanceShow">
                    <i class="icon iconfont icon-chongzhidianji focus_fb5"></i><span
                        class="focus_fb5">{{balanceData}}</span>
                    <p>当前账号余额</p>
                </div>
            </div>
        </div>
        <div class="line mt40"></div>
        <div class="list-content ">
            <div class="list-content-top pt50 ">
                <p class="pay_title"><span class="fw_b">充书币</span><span class="focus_fb5">(1元=100书币)</span></p>
                <div class="list_item_wrap">
                    <div @click="sexFocus(index)" class="item_list "
                         v-for="(item, index) in payListData"
                         :class="index == is_idx?'b_cfb5':''"
                         :style="{background:'url('+Img_vip_bg+')'}">
                        <p :class="index == is_idx ? 'focus_fb5':''">{{item.price}}</p>
                        <p>{{item.number}}</p>
                        <p :class="index == 4 ? '':'focus_fb5'">
                            <span :class="index == 4 ? 'isShowNo':''" class="b_c">赠</span>
                            {{item.award}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="btn_ok mt40">确认充值</div>
            <div class="pay_txt pb150">
                <p class="mt30 left_icon">书币属于虚拟商品，一经购买不得退换</p>
                <p class="mt20 left_icon">充值后书币到账可能有延迟，1小时内未到账请与客服联系。客服微信：<span class="can_select">vs909192</span>，客服QQ:<span class="can_select">858672141</span></p>
                <p class="mt20 left_icon">工作时间：周一到周五9:30—20:30、周六周日9:30-18:30</p>
            </div>
        </div>
        <navMenu :idx_focus="idx_focus"></navMenu>
    </div>
</template>
<script>
    import NavMenu from '../components/NavMenu.vue';
    import TopMenu from '../components/TopMenu.vue';

    import Img_vip_bg from '../assets/images/vip-bg@2x.png';
    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'ranKing',

        data () {
            return {
                idx_sex: 1,
                idx_focus: 2,
                is_idx: 1,
                topMenu_status: false,
                isShow: false,
                Img_vip_bg: Img_vip_bg,
                iconMenu: 'icon iconfont icon-mulu',
                balanceData: 0,
                payListData: [
                    {price: '￥30.00', number: '3000书币', award: '多送0元'},
                    {price: '￥50.00', number: '5000+3000书币', award: '多送30元'},
                    {price: '￥100.00', number: '10000+8000书币', award: '多送80元'},
                    {price: '￥200.00', number: '20000+20000书币', award: '多送200元'},
                    {price: '年费VIP会员', number: '￥365.00', award: '一年全站书籍免费看'},
                ],
            }
        },
        mounted() {
            let that = this;
            this.setSex();

        },
        methods: {
            setSex:function () {
                this.idx_sex = getCookie('is_sex');
            },
            openTopMenu: function () {
                let open_k = 'icon iconfont icon-mulu';
                let open_g = 'icon iconfont icon-quxiao';

                let o = this.iconMenu == open_k;

                this.iconMenu = o ? open_g : open_k;

                this.topMenu_status = !this.topMenu_status;
                document.getElementsByTagName("body")[0].className = o ? 'no_overflow' : '';
            },
            sexFocus:function (e) {
                this.is_idx =e;
            },
            go_return:function () {
                window.history.go(-1);
                document.getElementsByTagName("body")[0].className = '';
            },
        },
        components: {
            'navMenu': NavMenu,
            'topMenu': TopMenu,
        },
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../assets/scss/pages/pay.scss";
</style>