
// src/router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import User from './pages/User.vue'
import UserProfile from './pages/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About},    
    { path: '/contact', component: Contact},
    { path: '/user', component: User},
    { path: '/user/:id', component: UserProfile}
]

const router = new VueRouter({
    routes: routes, mode: 'history'
})
export default router


