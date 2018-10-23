<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>打赏记录</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <div class="list-content ">
            <div class="list-content-top ">
                <div class="award_list" v-for="item in award_list">
                    <div class="award_img">
                        <img :src="item.award_img">
                    </div>
                    <div class="award_info">
                        <div class="award_info_top">
                            <p class="name">{{item.name}}</p>
                            <p class="date">{{item.date}}</p>
                        </div>
                        <div class="award_info_bottom flex_bt flex_box">
                            <p class="flex_box">赠送
                                <span class="icon_img" :style="{background:'url('+item.icon_img+')'}"></span>
                                <span class="icon_name focus_fb5">{{item.icon_name}}</span>给作者
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------ 底部 ------------>
    </div>
</template>
<script>
    import NavMenu from '../components/NavMenu.vue';
    import TopMenu from '../components/TopMenu.vue';
    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    import bluelover from '../assets/images/bluelover.png';
    import cake from '../assets/images/cake.png';
    import flower from '../assets/images/flower.png';
    import perfume from '../assets/images/perfume.png';
    import ring from '../assets/images/ring.png';
    import yacht from '../assets/images/yacht.png';

    export default {
        name: 'awardLog',

        data () {
            return {
                idx_sex: 1,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',

                bluelover: bluelover,
                cake: cake,
                flower: flower,
                perfume: perfume,
                ring: ring,
                yacht: yacht,


                award_list: [
                    {
                        award_img: 'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                        name: '一不小心太疯狂',
                        date: '2018-07-30 22:21:51',
                        icon_img: bluelover,
                        icon_name: '蓝色妖姬'
                    },
                    {
                        award_img: 'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                        name: '一不小心太疯狂',
                        date: '2018-07-30 22:21:52',
                        icon_img: cake,
                        icon_name: '蛋糕'
                    },
                    {
                        award_img: 'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                        name: '一不小心太疯狂',
                        date: '2018-07-30 22:21:53',
                        icon_img: flower,
                        icon_name: '鲜花'
                    },
                    {
                        award_img: 'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                        name: '一不小心太疯狂',
                        date: '2018-07-30 22:21:54',
                        icon_img: perfume,
                        icon_name: '香水'
                    },
                    {
                        award_img: 'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                        name: '一不小心太疯狂',
                        date: '2018-07-30 22:21:55',
                        icon_img: ring,
                        icon_name: '钻石'
                    },
                    {
                        award_img: 'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                        name: '一不小心太疯狂',
                        date: '2018-07-30 22:21:56',
                        icon_img: yacht,
                        icon_name: '游艇'
                    }
                ]
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
    @import "../assets/scss/pages/awardLog.scss";
</style>