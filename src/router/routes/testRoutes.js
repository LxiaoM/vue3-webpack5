import BaseLayout from '../../pages/layout/layout.vue'

export const testRoutes = {
    path: '/testModule',
    name: 'testModule',
    component: BaseLayout,
    children: [
        {
            path: '/test',
            name: 'test',
            component: () => import('../../pages/test.vue')
        }
    ]
}
