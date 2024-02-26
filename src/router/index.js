import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import {routes} from './router.js'

const router = createRouter({
    // history: createWebHashHistory(), // 路径中带有#
    history: createWebHistory(), // 由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，刷新后页面Cannot GET错误
    routes,
})
export default router
