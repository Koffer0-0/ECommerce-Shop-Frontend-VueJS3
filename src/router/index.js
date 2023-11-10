import {createRouter, createWebHistory} from 'vue-router'

const index = createRouter({
    history: createWebHistory("/"),
    routes: [
        {path: "", name: "Home", component: () => import('../pages/MainPage.vue')},
        {path: "/login", name: "Login", component: () => import('../pages/LoginPage.vue'), meta: {fullScreen: true}},
        {path: "/register", name: "Register", component: () => import('../pages/AuthorizationPage.vue'), meta: {fullScreen: true}},
        {path: "/500", name: "ServerError", component: () => import('../pages/ServerErrorPage.vue'), meta: {fullScreen: true}},
        {path: "/404", name: "NotFound", component: () => import('../pages/NotFoundPage.vue'), meta: {fullScreen: true}},
        {
            path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
            redirect: '/404',
        },
        {path: "/profile", name: "Profile", component: () => import('../pages/ProfilePage.vue'), meta: {requiresAuth: true}},
        {path: "/product/:id", name: "Profile", component: () => import('../pages/ProfilePage.vue'), meta: {requiresAuth: true}, props: true},
    ]
})

index.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth) {
        if (localStorage.getItem('access_token') == null) {
            next({
                path: '/login?message=login',
                params: { nextUrl: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default index
