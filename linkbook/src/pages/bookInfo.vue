<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>小说主页</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <div class="list-content b_c05 ">
            <div class="list-content-top bookInfo pt50 pb15">
                <a href="javascript:;" class="content_info_a">
                    <img class="info_img" :src="recommendData.info_url">
                    <div class="content_info" style="margin-left: .3rem">
                        <p class="p1">{{recommendData.info_title}}</p>
                        <p class="ptb10 p4"><span class="b_c">已完结</span></p>
                        <p class="p4 mt10 clearfix">
                            <span class="b_c333 fl">都市</span>
                            <span class="b_c333 fl">404万字</span>
                        </p>
                        <p class="ptb10 c_vip font28">开通VIP，立即享受在线阅读全免></p>
                        <p class=" focus_fb5 font28">评分：<span>10.0</span>分</p>
                    </div>
                </a>
                <div class="info_wrap">
                    <ul class="info_num ">
                        <li v-for="item in info_num">{{item}}</li>
                    </ul>
                    <ul class="info_btn ptb10 mt10">
                        <li @click="addBook" class="focus_fb5">{{addBookName}}</li>
                        <li @click="goRead"><span class="b_c_bc">开始阅读</span></li>
                        <li class="focus_fb5">我要打赏</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class=" list-content info_recommend">
            <p class="ptb30">
                <span class="fl font42 left_line">限时免费</span>
            </p>
            <div>
                <p :class="is_height == 0?'auto_height':''" class="info_recommend_txt" @click="setHeight()">
                    叶凌天，神秘部队退伍军人，为了给妹妹凑集五十万的治疗费用不得不给三元集团的千金
                    小姐李雨欣当贴身保镖
                    。且看经历过太多生死的铮铮硬汉叶凌天如何在这个繁华都市里走出属于自己的一条不平凡的路来。
                </p>
            </div>
        </div>
        <div class="line mt30"></div>
        <div class=" list-content">
            <p class="ptb30 flex_bt flex_box" @click="goCatalog">
                <span class="fl font42 left_line">目录</span>
                <span class="flex_box c_7e7e7e" style="align-items: center;">共1986章
                    <i class="icon iconfont icon-xiangyou c999" style="font-size: .6rem"></i>
                </span>
            </p>
            <div class="line2"></div>
            <div class="chapter_list_wrap ">
                <div class="focus_fb5">最新章节：无敌天下</div>
                <div class="chapter_list" v-for="item in chapter_list">{{item}}</div>
            </div>
        </div>
        <div class="line"></div>
        <div class=" list-content">
            <p class="ptb30 flex_bt flex_box" @click="goAwardLog">
                <span class="fl font42 left_line">打赏记录</span>
                <span class="flex_box c_7e7e7e" style="align-items: center;">查看更多
                    <i class="icon iconfont icon-xiangyou c999" style="font-size: .6rem"></i>
                </span>
            </p>
            <div class="line2"></div>
            <div class="list-content-top ">
                <div class="userAwardLog">
                    <img :src="item" v-for="item in userAwardLog">
                </div>
            </div>
        </div>
        <div class="line "></div>
        <div class=" list-content mb150">
            <p class="ptb30 flex_bt flex_box">
                <span class="fl font42 left_line">同类推荐</span>
            </p>
            <div class="line2"></div>
            <div class="list-content-item">
                <div class="list-item" v-for="item in info_list">
                    <img :src="item.info_img">
                    <p>{{item.info_title}}</p>
                </div>
            </div>
        </div>
        <!------------ 底部 ------------>
        <div class="nvaMenu">
            <div class="list-content-top">
                <div class="item_list focus_fb5">
                    <i class="icon iconfont icon-dashang"></i>
                    <p>立即打赏</p>
                </div>
                <div @click="goRead" class="item_list b_c_bc">
                    <i class="icon iconfont icon-shu"></i>
                    <p>开始阅读</p>
                </div>
                <div @click="addBook" class="item_list focus_fb5">
                    <i class="icon iconfont icon-jiarushuku"></i>
                    <p>{{addBookName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import NavMenu from '../components/NavMenu.vue';
    import TopMenu from '../components/TopMenu.vue';
    import router from '../router';
    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'bookInfo',

        data () {
            return {
                idx_sex: 1,
                idx_focus: 4,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',

                recommendData: {
                    info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                    info_title: '天下无敌',
                    info_txt: '铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！',
                    info_score: '4.5',
                    info_status: '已完结',
                    info_sort: '修仙',
                    info_PViews: '590',
                },
                info_num: ['5236', '78万', '65884'],
                is_height: true,
                chapter_list: ['第一章：以一敌五', '第二章：妹妹叶霜', '第三章：李雨欣（一）', '第四章：李雨欣（二）'],
                userAwardLog: [
                    'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                    'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                    'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                    'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                    'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132',
                    'http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132'
                ],
                info_list: [
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王'
                    },
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王'
                    },
                    {
                        info_img: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '风云兵王'
                    }
                ],
                is_addBook: false,
                addBookName: '加入书架',
            }
        },
        mounted() {
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
            setHeight: function (e) {
                this.is_height = !this.is_height;
            },
            goCatalog: function () {
                router.push({name: 'Catalog'});
            },
            goAwardLog: function () {
                router.push({name: 'AwardLog'});
            },
            goRead:function () {
                router.push({name: 'BookRead'});
            },
            addBook: function () {

                if (!this.is_addBook) {
                    let arr = [];
                    arr.push(parseInt(this.info_num[0]) + 1);
                    arr.push(this.info_num[1]);
                    arr.push(this.info_num[2]);
                    this.info_num = arr;
                    this.is_addBook = !this.is_addBook;
                    this.addBookName = '已加入书架';
                }else {
                    let arr = [];
                    arr.push(parseInt(this.info_num[0]) - 1);
                    arr.push(this.info_num[1]);
                    arr.push(this.info_num[2]);
                    this.info_num = arr;
                    this.is_addBook = !this.is_addBook;
                    this.addBookName = '加入书架';
                }


            },
        },
        components: {
            'navMenu': NavMenu,
            'topMenu': TopMenu
        }
    }
</script>


<style lang="scss" scoped type="text/css">
    @import "../assets/scss/pages/bookInfo.scss";
</style>