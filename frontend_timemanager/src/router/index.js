import { createRouter, createWebHistory } from 'vue-router'
import User from "@/components/User";
import LandingPage from "@/components/VisualComponent/LandingPage";
import ClockManager from "@/components/ClockManager";
import WorkingTime from "@/components/WorkingTime";
import WorkingTimes from "@/components/WorkingTimes";
import ChartManager from "@/components/ChartManager";
import About from "@/components/VisualComponent/About";
import Error from "@/components/VisualComponent/Error";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: About
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
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: Error
    }

];


const router =  createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
});

export default router