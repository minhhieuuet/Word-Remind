import { createWebHistory, createRouter } from "vue-router";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import { auth } from '../services/firebase';

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            // requiresAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    if (requiresAuth && !auth.currentUser) {
        next('/')
    } else {
        next()
    }
})
export default router;