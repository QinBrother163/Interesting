<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>个人中心</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>

        <div class="list-content ">
            <div class="list-content-top pt50">
                <div class="user_info">
                    <img class="user_images"
                         src="https://static.youshuge.com/book_img/I1m7mgptCle48kF1PML8fHUWmiyrVB3LnOLbV4JU.jpeg">
                    <div class="user_data">
                        <p>一不小心太疯狂</p>
                        <p>ID&nbsp;:&nbsp;<span>131441520</span></p>
                        <p>VIP&nbsp;:&nbsp;<span>2018-09-18</span>-<span>2020-09-09</span></p>
                    </div>
                    <img class="user_right_img" :src="user_right_img">
                </div>
                <p class="user_txt">今天还没有读书呢、赶紧充充电吧</p>
            </div>
        </div>
        <div class="line mt30"></div>
        <div class="list-content ">
            <div class="list-content-top">
                <div class="icon_list_item ">
                    <div class="left_icon">
                        <i class="icon iconfont icon-bi"></i>
                        <span class="icon_txt1">我的账号</span>
                    </div>
                    <span class="icon_txt2 ">8999书币</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-content ">
            <div class="list-content-top">
                <div class="icon_list_item ">
                    <div class="left_icon">
                        <i class="icon iconfont icon-VIP"></i>
                        <span class="icon_txt1">我的VIP</span>
                    </div>
                    <i class="icon iconfont icon-xiangyou icon_txt2 fs46"></i>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-content">
            <div class="list-content-top">
                <div class="icon_list_item icon_list_item_line" v-for="(item, index) in listIcon"
                     @click="goListIconPage(index)">
                    <a href="javascript:;">
                        <div class="left_icon">
                            <i :class="item.icon"></i>
                            <span class="icon_txt1">{{item.title}}</span>
                        </div>
                        <i class="icon iconfont icon-xiangyou icon_txt2 fs46"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-content ">
            <div class="list-content-top">
                <div class="icon_list_item" @click="go_service">
                    <div class="left_icon">
                        <i class="icon iconfont icon-kefu"></i>
                        <span class="icon_txt1">客服中心</span>
                    </div>
                    <i class="icon iconfont icon-xiangyou icon_txt2 fs46"></i>
                </div>
            </div>
        </div>
        <div class="line mb150"></div>
        <!--签到提示框-->
        <div v-show="is_sign" class="signinbox">
            <div class="whitbox">
                <div>
                    <p>{{sign_title}}</p>
                    <p>今日首次阅读，赠送<span class="focus_fb5">50</span>阅读币</p>
                    <p>明日01：00后，首次阅读赠送<span class="focus_fb5">50</span>阅读币</p>
                </div>
                <p class="lastp focus_fb5" @click="shutSign">我知道啦</p>
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
    import router from '../router';

    export default {
        name: 'ranKing',

        data () {
            return {
                idx_sex: 1,
                idx_focus: 3,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',
                listIcon: [
                    {icon: 'icon iconfont icon-qiandao', title: '签到有礼'},
                    {icon: 'icon iconfont icon-lishijilu', title: '阅读记录'},
                    {icon: 'icon iconfont icon-chongzhi', title: '充值记录'},
                    {icon: 'icon iconfont icon-jilu', title: '消费记录'}
                ],
                user_right_img: require('../assets/images/user_pay_right.png'),
                is_sign: false,
                sign_title: '签到成功'
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
                        router.push({name: 'ReadLog'});
                        break;
                    case 2:
                        router.push({name: 'PayLog'});
                        break;
                    default:
                        router.push({name: 'ConsumeLog'});
                        break;
                }
            },
            shutSign: function () {
                this.is_sign = !this.is_sign;
                this.sign_title = '今日已签到';
            },
            go_return: function () {
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
    @import "../assets/scss/pages/personal.scss";
</style>