import {testRoutes} from './routes/testRoutes.js' // 测试模块

// 公用路由
export const commonRoutes = [
    {
        path: '/',
        redirect: '/home'
    },
    // 登录相关
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue'),
    },
    // 首页
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/home.vue'),
    }
]
// 输出路由
export const routes = [
    ...commonRoutes,
    testRoutes
]
