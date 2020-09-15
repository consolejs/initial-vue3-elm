import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Contact from '../views/Contact.vue'

const home = () => import(/* webpackChunkName: "home" */ '../page/home/index'); //


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
            component: home,
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})


export default router


// import App from '../App'

// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')



// export default [{
//     path: '/',
//     component: App, //顶层路由，对应index.html
//     children: [ //二级路由。对应App.vue
//         //地址为空时跳转home页面
//         {
//             path: '',
//             redirect: '/home'
//         },
//     ]
// }]
