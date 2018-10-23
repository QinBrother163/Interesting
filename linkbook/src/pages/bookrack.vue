<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>我的书架</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <div class="list-content ">
            <div class="list-content-top read_nav">
                <span :class="is_focus == 0 ?'focus_sex':''">我的书架</span>
                <span @click="goReadLog" :class="is_focus == 1 ?'focus_sex':''">最近阅读</span>
            </div>
            <div class="line2"></div>
            <div class="list-content-item">
                <div style="text-align: center" class="list-item" v-for="(item,index) in info_list">
                    <img :src="item.info_img">
                    <p>{{item.info_title}}</p>
                    <span class="b_c delBtn" @click="delBtn(index)">删除</span>
                </div>
            </div>
        </div>
        <p class="clickAdd" @click="clickAdd">点击加载更多</p>
    </div>
</template>
<script>
    import TopMenu from '../components/TopMenu.vue';
    import router from '../router';
    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'readLog',

        data () {
            return {
                idx_sex: 1,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',

                is_focus: 0,
                info_list: [
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王1'
                    },
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王2'
                    },
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王3'
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
            delBtn: function (idx) {
                this.info_list.splice(idx, 1);
            },
            clickAdd: function () {
                let arr = [
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王1'
                    },
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王2'
                    },
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王3'
                    }
                ];
                for (let i = 0; i < arr.length; i++) {
                    this.info_list.push(arr[i]);
                }
            },
            goReadLog:function () {
                router.push({name: 'ReadLog'});
            },
        },
        components: {
            'topMenu': TopMenu,
        },
    }
</script>


<style lang="scss" scoped type="text/css">
    @import "../assets/scss/pages/readLog.scss";
</style>