import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import UserInfoSection from '../components/section/user-info-section/index'
import HomeSection from '../components/section/home-section'
import DiarySection from '../components/section/diary-section'
import GallerySection from '../components/section/gallery-section'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeSection
    },
    {
        path: '/user',
        name: 'User',
        component: UserInfoSection
    }, {
        path: '/diary',
        name: 'Diary',
        component: DiarySection
    }, {
        path: '/gallery',
        name: 'Gallery',
        component: GallerySection
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
