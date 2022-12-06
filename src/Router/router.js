import {createRouter, createWebHistory} from "vue-router";
//=====================
// Pages
//=====================


const routes = [

    {
        path: '/',
        name: "Home",
        component: () => import('../Layout/page-layout.vue'),
        children: [
            {path: '/', name: 'Dashboard', component: () => import('../Pages/page-dashboard.vue')},


        ]
    },
    {
        path: '/',
        name: "auth",
        component: () => import('../Layout/auth-layout.vue'),
        children: [
            {path: '/auth/login', name: 'Login', component: () => import('../Pages/page-login.vue')},

        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
