<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>排行榜</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <div class="ranking_list list-content">
            <div class="ptb30 ranking_list_top">
                <div v-for="(item, index) in ranking_title" class="list_txt_wrap" @click="setRankingIdx(index)">
                    <span :class="ranking_focus_idx == index?'ranking_focus':''">{{item}}</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="ranking_list list-content ">
            <div class="list-content-top pt50 pb150">
                <a href="javascript:;" class="content_info_a pb55" v-for="(item,index) in bookRmdData_idx">
                    <div class="ranking_list_r">
                        <img class="info_img" :src="item.info_url">
                        <span class="ranking_list_bg" style="right: .4rem">{{index+1}}</span>
                    </div>
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
        <!------------ 底部 ------------>
        <navMenu :idx_focus="idx_focus"></navMenu>
    </div>
</template>
<script>

    import NavMenu from '../components/NavMenu.vue';
    import TopMenu from '../components/TopMenu.vue';

    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'ranKing',

        data () {
            return {
                idx_focus: 1,
                idx_sex: 1,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',
                ranking_focus_idx: 1,
                ranking_title: ['点击榜', '畅销榜', '打赏榜'],
                bookRmdData_idx: [],
                bookRmdData1: [
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '无所畏惧1',
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
                    ,
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
                    ,
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
                bookRmdData2: [
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '无所畏惧2',
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
                    ,
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
                    ,
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
                bookRmdData3: [
                    {
                        info_url: 'https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg',
                        info_title: '无所畏惧3',
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
                    ,
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
                    ,
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
            }
        },
        mounted() {
            let that = this;
            this.bookRmdData_idx = this.bookRmdData2;
            this.setSex();

        },
        methods: {
            setSex:function () {
                this.idx_sex = getCookie('is_sex');
            },
            setRankingIdx: function (e) {
                this.ranking_focus_idx = e;

                switch (e) {
                    case 0:
                        this.bookRmdData_idx = this.bookRmdData1;
                        break;
                    case 1:
                        this.bookRmdData_idx = this.bookRmdData2;
                        break;
                    default:
                        this.bookRmdData_idx = this.bookRmdData3;
                        break;
                }
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
    @import "../assets/scss/pages/ranking.scss";
</style>