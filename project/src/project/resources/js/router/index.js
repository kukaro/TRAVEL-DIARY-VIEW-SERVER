import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import UserInfoSection from '../components/section/user-info-section/index'
import HomeSection from '../components/section/home-section'
import DiarySection from '../components/section/diary-section'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeSection
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
    {
        path: '/user',
        name: 'User',
        component: UserInfoSection
    },{
        path: '/diary',
        name: 'Diary',
        component: DiarySection
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
