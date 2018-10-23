<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>充值记录</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>

        <div class="list-content ">
            <div class="list-content-top pt50">

            </div>
        </div>
    </div>
</template>
<script>
    import TopMenu from '../components/TopMenu.vue';

    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'readLog',

        data () {
            return {
                idx_sex: 1,
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
            go_service: function () {
                router.push({name: 'GetService'});
            },
            goListIconPage: function (e) {
                switch (e) {
                    case 0:
                        this.is_sign = !this.is_sign;
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    default:
                        break;
                }
            },
            shutSign:function () {
                this.is_sign = !this.is_sign;
            },
            go_return: function () {
                window.history.go(-1);
                document.getElementsByTagName("body")[0].className = '';
            },
        },
        components: {
            'topMenu': TopMenu,
        },
    }
</script>


<style lang="scss" scoped type="text/css">
    @import "../assets/scss/pages/pay.scss";
</style>