<template>
    <div class="navMenu">
        <div v-for="(item,index) in navMenu" @click="goPages(index)" class="item-list-icon">
            <i :class="[item.icon, index == idx_focus ? 'focus_fb5':'']"></i>
            <span :class="index == idx_focus ? 'focus_fb5':''">{{item.title}}</span>
        </div>
    </div>
</template>
<script>
    import router from '../router';

    export default {
        data () {
            return {
                focus_fb5: 'focus_fb5',
                navMenu: [
                    {icon: 'icon iconfont icon-shouye', title: '首页'},
                    {icon: 'icon iconfont icon-bangdan', title: '榜单'},
                    {icon: 'icon iconfont icon-chongzhi1', title: '充值'},
                    {icon: 'icon iconfont icon-gerenzhongxin', title: '我的'}
                ]
            }
        },
        props: ['idx_focus'],
        mounted() {
            this.setBottomIocn();
        },
        methods: {
            goPages: function (e) {
                switch (e) {
                    case 0:
                        router.push({name: 'Index'});
                        break;
                    case 1:
                        router.push({name: 'Ranking'});
                        break;
                    case 2:
                        router.push({name: 'Pay'});
                        break;
                    default:
                        router.push({name: 'Personal'});
                        break;
                }
            },
            setBottomIocn: function () {
                switch (this.idx_focus) {
                    case 0:
                        this.navMenu[0].icon = 'icon iconfont icon-shouyedianji';
                        break;
                    case 1:
                        this.navMenu[1].icon = 'icon iconfont icon-bangdandianji';
                        break;
                    case 2:
                        this.navMenu[2].icon = 'icon iconfont icon-chongzhidianji';
                        break;
                    case 3:
                        this.navMenu[3].icon = 'icon iconfont icon-gerenzhongxindianji';
                        break;
                    default:

                        break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped type="text/css">
    @import "../assets/scss/components/NavMenu.scss";
</style>