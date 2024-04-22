import { createWebHistory, createRouter } from "vue-router";
import DashboardPage from '../views/DashboardPage'
import GridSystem from '../views/GridSystem'

const routes = [
    {
        path: '/',
        name: 'DashboardPage',
        component: DashboardPage
    },
    {
        path: '/grid-system',
        name: 'Dashboard',
        component: GridSystem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;