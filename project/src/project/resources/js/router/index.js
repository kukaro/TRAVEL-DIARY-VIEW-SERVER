import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import UserInfoSection from '../components/section/user-info-section/index'
import HomeSection from '../components/section/home-section'
import DiarySection from '../components/section/diary-section'
import GallerySection from '../components/section/gallery-section'
import HiworksSection from '../components/section/hiworks-section'
import FriendSection from '../components/section/friend-section'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeSection
    },
    {
        path: '/hiworks',
        name: 'Hiworks',
        component: {
            hiworks: HiworksSection
        }
    },
    {
        path: '/user',
        name: 'User',
        component: UserInfoSection,
        props: {
            idx: 0,
        },
    },
    {
        path: '/friend',
        name: 'Friend',
        component: FriendSection,
        props: {
            idx: 1,
        },
    },
    {
        path: '/diary',
        name: 'Diary',
        component: DiarySection,
        props: {
            idx: 2,
        },
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GallerySection,
        props: {
            idx: 3,
        },
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
