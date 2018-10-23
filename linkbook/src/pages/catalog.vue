<template>
    <div :class="idx_sex == 1?'male':'female'" class="root">
        <!------------ 顶部 ------------>
        <div class="headerTop">
            <a @click="go_return" class="header_item" href="javascript:;"><i
                    class="icon iconfont icon-arrow-line-left"></i></a>
            <div class="header_item"><span>目录</span></div>
            <div class="header_item"><i :class="iconMenu" @click="openTopMenu"></i></div>
        </div>
        <div class="line2"></div>
        <div id="mescroll" class="mescroll " style="height: auto">
            <div class="list-content ">
                <div class="list-content-top ">
                    <ul class="catalog_wrap" id="dataList">
                        <li class="catalog_list " v-for="(item,index) in catalog_list">
                            {{item}}
                            <span :class="is_toll < index ?'toll_icon_right':''" :style="{background:'url('+toll+')'}"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {getCookie, setCookie, delCookie} from '../../static/js/util';

    import MeScroll from '../../node_modules/mescroll.js';
    import 'mescroll.js/mescroll.min.css';
    import totop from '../assets/images/mescroll-totop.png';
    import toll from '../assets/images/locks.png';
    export default {
        name: 'catalog',

        data () {
            return {
                idx_sex: 1,

                iconMenu: 'icon iconfont icon-daoxu',

                mescroll: '',
                catalog_list: [],
                toll: toll,
                is_toll: 5,
            }
        },
        mounted() {
            let that = this;
            this.setSex();

            this.mescroll = new MeScroll("mescroll", {
                up: {
                    page: {size: 5},
                    loadFull: {
                        use: true,
                        delay: 300
                    },
                    callback: that.getListData,
                    isBounce: false,
                    clearEmptyId: "dataList",
                    toTop: {
                        src: totop,
                    }
                }
            });
        },
        methods: {
            setSex: function () {
                this.idx_sex = getCookie('is_sex');
            },
            openTopMenu: function () {
                let open_k = 'icon iconfont icon-daoxu';
                let open_g = 'icon iconfont icon-zhengxu';

                let o = this.iconMenu == open_k;

                this.iconMenu = o ? open_g : open_k;

            },
            go_return: function () {
                window.history.go(-1);
            },
            getListData: function (page) {
                let that = this;

                that.getListDataFromNet(page.num, page.size, function (curPageData) {
                    console.log("page.num=" + page.num + ", page.size=" + page.size + ", curPageData.length=" + curPageData.length);
                    that.mescroll.endSuccess(curPageData.length);

                    that.setListData(curPageData);
                }, function () {
                    that.mescroll.endErr();
                });
            },
            getListDataFromNet: function (pageNum, pageSize, successCallback, errorCallback) {
                setTimeout(function () {
                    $.ajax({
                        type: 'GET',
                        url: './static/json/catalog.json',
                        dataType: 'json',
                        success: function (data) {
                            //模拟分页数据
                            let listData = [];
                            for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
                                if (i == data.length) break;
                                listData.push(data[i]);
                            }
                            successCallback(listData);
                        },
                        error: errorCallback
                    });
                }, 300)
            },
            setListData: function (curPageData) {

                for (let i = 0; i < curPageData.length; i++) {
                    this.catalog_list.push(curPageData[i]);
                }
            },
        },
        components: {
        },
    }
</script>


<style lang="scss" scoped type="text/css">
    .mescroll {
        position: fixed;
        top: 1.27rem;
        bottom: 0;
        height: auto;
    }

    .catalog_wrap {
        width: 100%;
    }

    .catalog_list {
        position: relative;
        width: 100%;
        padding: .4rem 0;
        color: #666;
        font-size: .32rem;
    }

    .catalog_list + .catalog_list {
        border-top: 1px solid #eee;
    }

    .toll_icon_right {
        display: block;
        width: .4rem;
        height: .5rem;
        position: absolute;
        top: .36rem;
        right: .25rem;
        background-size: 100% 100% !important;
        background-repeat: no-repeat !important;
    }
</style>