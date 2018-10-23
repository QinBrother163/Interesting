<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>阅读记录</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <div class="list-content ">
            <div class="list-content-top read_nav">
                <span @click="goBookrack" :class="is_focus == 0 ?'focus_sex':''">我的书架</span>
                <span :class="is_focus == 1 ?'focus_sex':''">最近阅读</span>
            </div>
            <div class="line2"></div>
            <div class="list-content-top ">
                <div class="list_item" v-for="(item,index) in readData">
                    <img :src="item.info_img">
                    <div class="info">
                        <p class="chapter">{{item.chapter}}</p>
                        <p class="title">{{item.title}}</p>
                        <div class="info_status">
                            <div><span class="b_c">{{item.status == 1?'已完结':'连载中'}}</span>&nbsp;<span class="b_c333">{{item.type1}}</span>&nbsp;<span
                                    class="b_c333">{{item.type2}}</span></div>
                            <div><span class="b_c" @click="delBtn(index)">删除</span></div>
                        </div>
                    </div>
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

                is_focus: 1,
                readData: [
                    {
                        info_img: 'https://qcdn.zhangzhongyun.com/covers/153302608645.jpg?imageView2/0/w/300/q/75',
                        chapter: '第七章 原来如此',
                        title: '霸道总裁爱上我',
                        status: '1',
                        type1: '都市',
                        type2: '玄幻'
                    },
                    {
                        info_img: 'https://qcdn.zhangzhongyun.com/covers/153302608645.jpg?imageView2/0/w/300/q/75',
                        chapter: '第十三章 成就金丹',
                        title: '缘起缘灭决',
                        status: '0',
                        type1: '修仙',
                        type2: '玄幻'
                    },
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
                this.readData.splice(idx, 1);
            },
            clickAdd: function () {
                let arr = [
                    {
                        info_img: 'https://qcdn.zhangzhongyun.com/covers/153302608645.jpg?imageView2/0/w/300/q/75',
                        chapter: '第七章 原来如此',
                        title: '霸道总裁爱上我',
                        status: '1',
                        type1: '都市',
                        type2: '玄幻'
                    },
                    {
                        info_img: 'https://qcdn.zhangzhongyun.com/covers/153302608645.jpg?imageView2/0/w/300/q/75',
                        chapter: '第十三章 成就金丹',
                        title: '缘起缘灭决',
                        status: '0',
                        type1: '修仙',
                        type2: '玄幻'
                    },
                ];
                for (let i = 0; i < arr.length; i++) {
                    this.readData.push(arr[i]);
                }
            },
            goBookrack:function () {
                router.push({name: 'Bookrack'});
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