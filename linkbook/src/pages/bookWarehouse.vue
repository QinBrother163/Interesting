<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop ">
            <a @click="go_return" class="header_item" href="javascript:;"><i class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>书库</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
            <topMenu v-show="topMenu_status"></topMenu>
        </div>
        <div class="line2"></div>
        <!------------ 底部 ------------>
        <div class="list-content ">
            <div class="list-content-top">
                <div class="type_item">
                    <span class="type_item_title">分类</span>
                    <ul class="type_item_list clearfix">
                        <li v-for="(item,index) in type_1" @click="setFocus(index,'0')"
                            :class="index == type_idx1?'Cselected':''">{{item}}
                        </li>
                    </ul>
                </div>
                <div class="line2"></div>
                <div class="type_item">
                    <span class="type_item_title">状态</span>
                    <ul class="type_item_list clearfix">
                        <li v-for="(item,index) in type_2" @click="setFocus(index,'1')"
                            :class="index == type_idx2?'Cselected':''">{{item}}
                        </li>
                    </ul>
                </div>
                <div class="line2"></div>
                <div class="type_item">
                    <span class="type_item_title">类型</span>
                    <ul class="type_item_list clearfix">
                        <li v-for="(item,index) in type_3" @click="setFocus(index,'2')"
                            :class="index == type_idx3?'Cselected':''">{{item}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div id="mescroll" class="mescroll pt50 mb150" style="height: auto">
            <!--展示上拉加载的数据列表-->
            <div class="list-content-top pt50 list-content">
                <div id="dataList" class="list-content-top ">
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
        </div>
        <navMenu :idx_focus="idx_focus"></navMenu>
    </div>
</template>
<script>
    import NavMenu from '../components/NavMenu.vue';
    import TopMenu from '../components/TopMenu.vue';
    import totop from '../assets/images/mescroll-totop.png';

    import MeScroll from '../../node_modules/mescroll.js';
    import 'mescroll.js/mescroll.min.css';

    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    export default {
        name: 'bookWarehouse',

        data () {
            return {
                idx_sex: 1,
                idx_focus: 4,
                topMenu_status: false,
                iconMenu: 'icon iconfont icon-mulu',

                type_1: ['全部', '玄幻', '武侠', '都市', '历史', '游戏', '科幻', '言情'],
                type_2: ['全部', '连载中', '已完结'],
                type_3: ['全部', '限时免费', '收费'],
                Cselected: 'Cselected',
                type_idx1: 0,
                type_idx2: 0,
                type_idx3: 0,
                bookRmdData:[],
                mescroll:'',
            }
        },
        mounted() {
            let that = this;
            this.setSex();

            this.mescroll = new MeScroll("mescroll", {
                up: {
                    page:{size:5},
                    loadFull: {
                        use: true,
                        delay: 300
                    },
                    callback: that.getListData,
                    isBounce: false,
                    clearEmptyId: "dataList",
                    toTop:{
                        src : totop,
                        //offset : 1000
                    }
                }
            });
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
            setFocus: function (e, num) {

                switch (num) {
                    case '0':
                        this.type_idx1 = e;
                        break;
                    case '1':
                        this.type_idx2 = e;
                        break;
                    default:
                        this.type_idx3 = e;
                        break;
                }
            },
            go_return:function () {
                window.history.go(-1);
                document.getElementsByTagName("body")[0].className = '';
            },
            getListData:function (page) {
                let that = this;

                that.getListDataFromNet(page.num, page.size, function (curPageData) {
                    console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length);
                    that.mescroll.endSuccess(curPageData.length);

                    that.setListData(curPageData);
                },function () {
                    that.mescroll.endErr();
                });
            },
            getListDataFromNet:function (pageNum,pageSize,successCallback,errorCallback) {
                setTimeout(function () {
                    $.ajax({
                        type: 'GET',
                        url: '../../static/json/book.json',
                        dataType: 'json',
                        success: function(data){
                            //模拟分页数据
                            let listData=[];
                            for (let i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
                                if(i==data.length) break;
                                listData.push(data[i]);
                            }
                            successCallback(listData);
                        },
                        error: errorCallback
                    });
                },300)
            },
            setListData:function (curPageData) {

                for(let i=0;i<curPageData.length;i++){
                    this.bookRmdData.push(curPageData[i]);
                }
            },
        },
        components: {
            'navMenu': NavMenu,
            'topMenu': TopMenu,
        },
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../assets/scss/pages/bookWarehouse.scss";

</style>