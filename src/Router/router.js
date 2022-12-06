import {createRouter, createWebHistory} from "vue-router";

import AuthLayout from "@/Layout/auth-layout";
import MainLayout from "@/Layout/main-layout";
import RootLayout from "@/Layout/root-layout";


import pageLogin from "@/Pages/page-login";
import PageDashboard from "@/Pages/page-dashboard";
import PagePhotos from "@/Pages/page-photos";
import PageJobs from "@/Pages/page-jobs";
import PageMembers from "@/Pages/page-members";


//=====================
// Pages
//=====================


const routes = [

    {
        path: '/', name: "root", component: RootLayout,
        children: [
            {
                path: '/', component: MainLayout,
                children: [
                    {path: '/', name: 'Dashboard', component: PageDashboard},
                    {path: '/photos', name: 'Photos', component: PagePhotos},
                    {path: '/jobs', name: 'Jobs', component: PageJobs},
                    {path: '/members', name: 'Members', component: PageMembers},
                ]
            },
            {
                path: '/', component: AuthLayout,
                children: [
                    {path: '/auth/login', name: 'Login', component: pageLogin},
                ]
            },
        ]
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
