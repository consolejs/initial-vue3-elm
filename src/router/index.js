import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

// 创建一个routerHistory对象
const routerHistory = createWebHistory()

/**
 * createRouter 创建路由器
 * 它接受一个对象
 * 传递 routerHistory 变量以及两个路由的数组 
 */

const router = createRouter({
    history: routerHistory,
    routes: [{
            path: '/',
            component: Home,
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})


export default router