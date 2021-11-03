import { createRouter, createWebHistory } from 'vue-router'
import User from "@/components/User";
import LandingPage from "@/components/VisualComponent/LandingPage";
import ClockManager from "@/components/ClockManager";
import WorkingTime from "@/components/WorkingTime";
import WorkingTimes from "@/components/WorkingTimes";
import ChartManager from "@/components/ChartManager";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage
    },
    {
        path: '/user/:page',
        name: 'User',
        component: User
    },
    {
        path: '/clock',
        name: 'Clock',
        component: ClockManager
    },
    {
        path: '/workingTime',
        name: 'WorkingTime',
        component: WorkingTime
    },
    {
        path: '/workingTimes',
        name: 'WorkingTimes',
        component: WorkingTimes
    },
    {
        path: '/chart',
        name: 'Chart',
        component: ChartManager
    },

];


const router =  createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
});

export default router