<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!--顶部男女板块,加搜索-->
        <div class="headertop">
            <div class="left_sex h_item">
                <span @click="setSex(1)" :class="idx_sex == 1?'focus_sex':''">男生</span>
                <span @click="setSex(0)" :class="idx_sex == 0?'focus_sex':''">女生</span>
            </div>
            <div class="right_search h_item">
                <div @click="goSearch" class="right_search_wrap font28"><i class="icon iconfont icon-sousuo font36"></i>输入书名/关键字
                </div>
            </div>
        </div>
        <!--轮播图-->
        <div class="slide">
            <div class="swiper-container" style="height: auto">
                <div class="swiper-wrapper" style="height: auto">
                    <div class="swiper-slide swiper-slide-center none-effect"><a href="#"><img
                            src="https://qcdn.zhangzhongyun.com/novel_banners/15338826952219.jpg?imageView2/0/w/570/q/75"></a>
                    </div>
                    <div class="swiper-slide"><a href="#"><img
                            src="https://qcdn.zhangzhongyun.com/novel_banners/15344193709915.jpg?imageView2/0/w/570/q/75"></a>
                    </div>
                    <div class="swiper-slide"><a href="#"><img
                            src="https://qcdn.zhangzhongyun.com/novel_banners/15338826952219.jpg?imageView2/0/w/570/q/75"></a>
                    </div>
                    <div class="swiper-slide"><a href="#"><img
                            src="https://qcdn.zhangzhongyun.com/novel_banners/15344193709915.jpg?imageView2/0/w/570/q/75"></a>
                    </div>
                    <div class="swiper-slide"><a href="#"><img
                            src="https://qcdn.zhangzhongyun.com/novel_banners/15344194679736.jpg?imageView2/0/w/570/q/75"></a>
                    </div>
                </div>
            </div>
        </div>
        <!--区块板块-->
        <div class="line"></div>
        <div class="nav_list">
            <div v-for="(item,index) in nav_list" class="nav_list_item" @click="goNav(index)">
                <img :src="item.img_url">
                <span>{{item.title}}</span>
            </div>
        </div>
        <div class="line "></div>
        <!--主编推荐-->
        <div class="list-content pb55">
            <p class="ptb30 flex_bt flex_box">
                <span class="fl font42 left_line">主编推荐</span>
                <span class="flex_box c_7e7e7e" style="align-items: center;">查看更多
                    <i class="icon iconfont icon-xiangyou c999" style="font-size: .6rem"></i>
                </span>
            </p>

            <div class="list-content-top clearfix">
                <a href="javascript:;" class="content_info_a" @click="goBookInfo">
                    <img class="info_img" :src="recommendData.info_url">
                    <div class="content_info">
                        <p class="p1">{{recommendData.info_title}}</p>
                        <p class="p2">{{recommendData.info_txt}}</p>
                        <p class="p3">推荐指数&nbsp;:&nbsp;<span class="info_xx"
                                                             :style="{background:'url('+Img_x+')'}"></span><span
                                class="info_xx" :style="{background:'url('+Img_x+')'}"></span><span class="info_xx"
                                                                                                    :style="{background:'url('+Img_x+')'}"></span><span
                                class="info_xx" :style="{background:'url('+Img_x+')'}"></span><span
                                class="info_xx info_xx_c" :style="{background:'url('+Img_x_c+')'}"></span>{{recommendData.info_score}}分
                        </p>
                        <p class="p4 mt10 clearfix"><span class="b_c fl">已完结</span><span
                                class="b_c333 fl">都市</span><span
                                class="fr">{{recommendData.info_PViews}}人在读</span></p>
                    </div>
                </a>
            </div>
            <div class="list-content-item">
                <div class="list-item" v-for="item in recommendData.info_list" @click="goBookInfo">
                    <img :src="item.info_img">
                    <p>{{item.info_title}}</p>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <!--新书推荐-->
        <div class="list-content pb55">
            <p class="ptb30 flex_bt flex_box">
                <span class="fl font42 left_line">新书推荐</span>
                <span class="flex_box c_7e7e7e" style="align-items: center;">查看更多
                    <i class="icon iconfont icon-xiangyou c999" style="font-size: .6rem"></i>
                </span>
            </p>
            <div class="list-content-top clearfix">
                <a href="javascript:;" class="content_info_a">
                    <img class="info_img" :src="recommendData.info_url">
                    <div class="content_info">
                        <p class="p1">{{recommendData.info_title}}</p>
                        <p class="p2">{{recommendData.info_txt}}</p>
                        <p class="p3">推荐指数&nbsp;:&nbsp;<span class="info_xx"
                                                             :style="{background:'url('+Img_x+')'}"></span><span
                                class="info_xx" :style="{background:'url('+Img_x+')'}"></span><span class="info_xx"
                                                                                                    :style="{background:'url('+Img_x+')'}"></span><span
                                class="info_xx" :style="{background:'url('+Img_x+')'}"></span><span
                                class="info_xx info_xx_c" :style="{background:'url('+Img_x_c+')'}"></span>{{recommendData.info_score}}分
                        </p>
                        <p class="p4 mt10 clearfix"><span class="b_c fl">已完结</span><span
                                class="b_c333 fl">都市</span><span
                                class="fr">{{recommendData.info_PViews}}人在读</span></p>
                    </div>
                </a>
            </div>
            <div class="list-content-item">
                <div class="list-item" v-for="item in recommendData.info_list">
                    <img :src="item.info_img">
                    <p>{{item.info_title}}</p>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <!--排行榜-->
        <div class="ranking_list list-content">
            <p class="ptb30 flex_bt flex_box">
                <span class="fl font42 left_line">排行榜</span>
                <span class="flex_box c_7e7e7e" style="align-items: center;">查看更多
                    <i class="icon iconfont icon-xiangyou c999" style="font-size: .6rem"></i>
                </span>
            </p>
            <div class="ptb30 ranking_list_top">
                <div v-for="(item, index) in ranking_title" class="list_txt_wrap" @click="setRankingIdx(index)">
                    <span :class="ranking_focus_idx == index?'ranking_focus':''">{{item}}</span>
                </div>
            </div>
            <div class="list-content-item ">
                <div class="list-item" v-for="(item, index) in rankingData">
                    <img :src="item.info_img">
                    <p>{{item.info_title}}</p>
                    <span class="ranking_list_bg">{{index+1}}</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <!--小说精选-->
        <div class="bookRmd list-content ">
            <p class="ptb30 flex_bt flex_box">
                <span class="fl font42 left_line">小说精选</span>
                <span class="flex_box c_7e7e7e" style="align-items: center;">查看更多
                    <i class="icon iconfont icon-xiangyou c999" style="font-size: .6rem"></i>
                </span>
            </p>
            <div class="list-content-top ">
                <a href="javascript:;" class="content_info_a pb55" v-for="item in bookRmdData">
                    <img class="info_img" :src="item.info_url">
                    <div class="content_info">
                        <p class="p1">{{item.info_title}}</p>
                        <p class="p2_2">{{item.info_txt}}</p>
                        <p class="p4 mt10 clearfix">
                            <span class="b_c fl">{{item.info_eng == 1 ? "已完结":"更新中"}}</span>
                            <span class="b_c333 fl">{{item.info_type1}}</span>
                            <span class="b_c333 fl">{{item.info_type2}}</span>
                            <span class="fr">{{item.info_num}}人在读</span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <div class="line"></div>
        <!--分类模块-->
        <div class="list-content ">
            <p class="ptb30 clearfix">
                <span class="fl font42 left_line">分类模块</span>
            </p>
            <div class="sortModule">
                <div class="sortModule_wrap mt30" v-for="item in sortModuleData">
                    <a href="javascript:;">
                        <span>{{item.info_title}}</span>
                        <img class="sort_img" :src="item.info_url1">
                        <img class="sort_img" :src="item.info_url2">
                        <img class="sort_img" :src="item.info_url3">
                    </a>
                </div>
            </div>
        </div>
        <div class="line mt50"></div>
        <!--限时免费-->
        <div class="freeTime_wrap list-content pb150">
            <p class="ptb30 clearfix">
                <span class="fl font42 left_line">限时免费</span>&nbsp;&nbsp;&nbsp;
                <span class="freeTime"><em id="day">{{day}}</em>天<em id="hour">{{hour}}</em>时<em
                        id="minute">{{minute}}</em>分<em
                        id="second">{{second}}</em>秒</span>
                <i class="icon iconfont icon-xiangyou fr font4"></i>
                <span class="fr font28">更多</span>
            </p>
            <div class="freeItem_content ">
                <div class="list-content-item ">
                    <div class="list-item" v-for="item in rankingData">
                        <img :src="item.info_img">
                        <p>{{item.info_title}}</p>
                        <span class="free_bg" :style="{background:'url('+Img_free+')'}"></span>
                    </div>
                </div>
            </div>
        </div>
        <!------------ 底部 ------------>
        <navMenu :idx_focus="idx_focus"></navMenu>
        cd
    </div>
</template>
<script>
    import router from '../router';
    import Img_x from '../assets/images/xingxing.png';
    import Img_x_c from '../assets/images/xingxing_c.png';
    import Img_free from '../assets/images/freeBg.png';

    import NavMenu from '../components/NavMenu.vue';
    import swiper from '../../static/js/swiper.min';
    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'Index',
        swiper,

        data () {
            return {
                idx_focus: 0,
                timer: '',
                ranking_focus_idx: 1,
                ranking_title: ['点击榜', '畅销榜', '打赏榜'],
                Img_x_c: Img_x_c,
                Img_x: Img_x,
                Img_free: Img_free,
                idx_sex: 1,
                nav_list: [
                    {img_url: require('../assets/images/index-nav-00.png'), title: '书库'},
                    {img_url: require('../assets/images/index-nav-01.png'), title: '精选'},
                    {img_url: require('../assets/images/index-nav-02.png'), title: '限免'},
                    {img_url: require('../assets/images/index-nav-03.png'), title: '榜单'}
                ],
                rankingData: [
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
                    ,
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
                bookRmdData: [
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '无所畏惧',
                        info_txt: '铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！',
                        info_eng: '1',
                        info_type1: '都市',
                        info_type2: '悬疑',
                        info_num: '621',
                    },
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '优酸乳',
                        info_txt: '铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！',
                        info_eng: '0',
                        info_type1: '都市',
                        info_type2: '悬疑',
                        info_num: '393',
                    },
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '殿下无敌',
                        info_txt: '铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！',
                        info_eng: '1',
                        info_type1: '都市',
                        info_type2: '悬疑',
                        info_num: '764',
                    },
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '吞噬星空',
                        info_txt: '铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！',
                        info_eng: '0',
                        info_type1: '都市',
                        info_type2: '悬疑',
                        info_num: '536',
                    }

                ],
                sortModuleData: [
                    {
                        info_title: '玄幻修仙',
                        info_url1: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url2: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url3: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg'
                    },
                    {
                        info_title: '校园异能',
                        info_url1: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url2: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url3: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg'
                    },
                    {
                        info_title: '都市情感',
                        info_url1: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url2: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url3: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg'
                    },
                    {
                        info_title: '恶鬼灵异',
                        info_url1: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url2: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_url3: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg'
                    }
                ],
                day: '',
                hour: '',
                minute: '',
                second: '',
                recommendData: {
                    info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                    info_title: '天下无敌',
                    info_txt: '铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！',
                    info_score: '4.5',
                    info_status: '已完结',
                    info_sort: '修仙',
                    info_PViews: '590',
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
                    ]
                },
            }
        },
        mounted() {
            let that = this;
            this.timer = setInterval(function () {
                that.countDown(1545099428)
            }, 1000);

            this.setSwiper();
            this.initSex();
        },
        methods: {
            initSex: function () {
                let sex = getCookie('is_sex');
                if (!sex) {
                    setCookie('is_sex', this.idx_sex, '30');
                } else {
                    this.idx_sex = sex;
                }
            },
            setSex: function (e) {
                this.idx_sex = e;
                setCookie('is_sex', e, '30');
            },
            setRankingIdx: function (e) {
                this.ranking_focus_idx = e;
            },
            checkTime: function (i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            },
            countDown: function (num) {
                let unixtimestamp = new Date(num * 1000);
                let year = 1900 + unixtimestamp.getYear();
                let month = "0" + (unixtimestamp.getMonth() + 1);
                let date = "0" + unixtimestamp.getDate();
                let hour = "0" + unixtimestamp.getHours();
                let minute = "0" + unixtimestamp.getMinutes();
                let second = "0" + unixtimestamp.getSeconds();
                let time_target_str = year + "/" + month.substring(month.length - 2, month.length) + "/" + date.substring(date.length - 2, date.length)
                    + " " + hour.substring(hour.length - 2, hour.length) + ":"
                    + minute.substring(minute.length - 2, minute.length) + ":"
                    + second.substring(second.length - 2, second.length);

                let time_now = new Date().getTime();
                let time_target = Date.parse(time_target_str);
                let time_cut = time_target - time_now;

                let days = Math.floor(time_cut / 1000 / 60 / 60 / 24);
                let hours = Math.floor(time_cut / 1000 / 60 / 60 % 24);
                let minutes = Math.floor(time_cut / 1000 / 60 % 60);
                let seconds = Math.floor(time_cut / 1000 % 60);
                days = this.checkTime(days);
                hours = this.checkTime(hours);
                minutes = this.checkTime(minutes);
                seconds = this.checkTime(seconds);

                if (time_cut >= 0) {
                    this.day = days;
                    this.hour = hours;
                    this.minute = minutes;
                    this.second = seconds;
                } else {
                    window.clearInterval(this.timer);
                    let num_00 = '00';
                    this.day = num_00;
                    this.hour = num_00;
                    this.minute = num_00;
                    this.second = num_00;
                }
            },
            setSwiper: function () {
                let swiper = new Swiper('.swiper-container', {
                    autoplay: 3000,
                    speed: 1000,
                    pagination: '.swiper-pagination',
                    autoplayDisableOnInteraction: false,
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: 1,
                    paginationClickable: true
                });
            },
            goNav: function (e) {
                switch (e) {
                    case 0:
                        router.push({name: 'BookWarehouse'});
                        break;
                    case 1:
                        router.push({name: 'GoMore'});
                        break;
                    case 2:
                        router.push({name: 'Free'});
                        break;
                    default:
                        router.push({name: 'Ranking'});
                        break;
                }
            },
            goSearch: function () {
                router.push({name: 'Search'});
            },
            goBookInfo: function () {
                router.push({name: 'BookInfo'});
            },
        },
        components: {
            'navMenu': NavMenu
        },
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../assets/scss/pages/Index.scss";
</style>