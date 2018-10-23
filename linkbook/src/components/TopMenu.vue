<template>
    <div class="menu-modal-bg">
        <div class="menu-content">
            <a href="JavaScript:;" v-for="(item,index) in menu" @click="goPage(index)">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
            </a>
        </div>
    </div>
</template>
<script>
    import router from '../router';

    export default {
        data () {
            return {
                menu:[
                    {icon:'icon iconfont icon-shouyedianji focus_fb5',title:'首页'},
                    {icon:'icon iconfont icon-shujiadianji focus_fb5',title:'书架'},
                    {icon:'icon iconfont icon-yuedujiludianji focus_fb5',title:'阅读历史'},
                    {icon:'icon iconfont icon-sousuodianji focus_fb5',title:'收索'},
                    {icon:'icon iconfont icon-shukudianji focus_fb5',title:'书库'},
                    {icon:'icon iconfont icon-bangdandianji focus_fb5',title:'排行榜'},
                    {icon:'icon iconfont icon-chongzhidianji focus_fb5',title:'充值'},
                    {icon:'icon iconfont icon-gerenzhongxindianji focus_fb5',title:'个人中心'}
                ]
            }
        },
        mounted() {
        },
        methods: {
            goPage:function (e) {

                switch (e){
                    case 0:
                        router.push({name: 'Index'});
                        break;
                    case 1:
                        router.push({name: 'Bookrack'});
                        break;
                    case 2:
                        router.push({name: 'ReadLog'});
                        break;
                    case 3:
                        router.push({name: 'Search'});
                        break;
                    case 4:
                        router.push({name: 'BookWarehouse'});
                        break;
                    case 5:
                        router.push({name: 'Ranking'});
                        break;
                    case 6:
                        router.push({name: 'Pay'});
                        break;
                    default:
                        router.push({name: 'Personal'});
                        break;
                }
                document.getElementsByTagName("body")[0].className = '';
            }
        }
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../assets/scss/components/topMenu.scss";
</style>