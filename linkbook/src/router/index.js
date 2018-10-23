import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index'
import Ranking from '../pages/ranking';
import Pay from '../pages/pay';
import Personal from '../pages/personal';
import BookWarehouse from '../pages/bookWarehouse';
import GoMore from '../pages/goMore';
import Free from '../pages/free';
import GetService from '../pages/getService.vue';
import ReadLog from '../pages/readLog.vue';
import PayLog from '../pages/payLog.vue';
import ConsumeLog from '../pages/consumeLog.vue';
import Bookrack from '../pages/bookrack.vue';
import Search from '../pages/search.vue';
import BookInfo from '../pages/bookInfo.vue';
import Catalog from '../pages/catalog.vue';
import AwardLog from '../pages/awardLog.vue';
import BookRead from '../pages/bookRead.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/Ranking',
            name: 'Ranking',
            component: Ranking
        },
        {
            path: '/Pay',
            name: 'Pay',
            component: Pay
        },
        {
            path: '/Personal',
            name: 'Personal',
            component: Personal
        },
        {
            path: '/BookWarehouse',
            name: 'BookWarehouse',
            component: BookWarehouse
        },
        {
            path: '/GoMore',
            name: 'GoMore',
            component: GoMore
        },
        {
            path: '/Free',
            name: 'Free',
            component: Free
        },
        {
            path: '/GetService',
            name: 'GetService',
            component: GetService
        },
        {
            path: '/ReadLog',
            name: 'ReadLog',
            component: ReadLog
        },
        {
            path: '/PayLog',
            name: 'PayLog',
            component: PayLog
        },
        {
            path: '/ConsumeLog',
            name: 'ConsumeLog',
            component: ConsumeLog
        },
        {
            path: '/Bookrack',
            name: 'Bookrack',
            component: Bookrack
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search
        },
        {
            path: '/BookInfo',
            name: 'BookInfo',
            component: BookInfo
        },
        {
            path: '/Catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/AwardLog',
            name: 'AwardLog',
            component: AwardLog
        },
        {
            path: '/BookRead',
            name: 'BookRead',
            component: BookRead
        }

    ]
})
