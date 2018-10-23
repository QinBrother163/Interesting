<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>客服中心</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line"></div>
        <div class="list-content ">
            <div class="list-content-top service">
                <p>客服微信：<span>vs7788478</span></p>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-content ">
            <div class="list-content-top service">
                <p>客服QQ：<span>334414174</span></p>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-content ">
            <div class="list-content-top service">
                <p>客服电话：<span>02014174841</span></p>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-content ">
            <div class="list-content-top service">
                <p>工作时间：<span>周一周五9：30-20：30</span>&nbsp;<span>周六周日9：30-18：30</span></p>
            </div>
        </div>
        <!------------ 底部 ------------>
        <navMenu :idx_focus="idx_focus"></navMenu>
    </div>
</template>
<script>
    import NavMenu from '../components/NavMenu.vue';
    import TopMenu from '../components/TopMenu.vue';

    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'getService',

        data () {
            return {
                idx_sex: 1,
                idx_focus: 4,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',

            }
        },
        mounted() {
            let that = this;
            this.setSex();

        },
        methods: {
            setSex: function () {
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
    @import "../assets/scss/pages/getService.scss";
</style>