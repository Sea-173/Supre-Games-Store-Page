import Vue from 'vue'
import VueRouter from 'vue-router'
import GamePage from "@/views/GamePage";
import loginRegister from "@/views/LoginRegister";
import SearchPage from "@/views/SearchPage";
// import administratorPage from "@/views/AdministratorPage";
// import borderTest from "@/views/BorderTest";
// import GameInfo from "@/views/GameInfo";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'GamePage',
    component: GamePage
  },
  {
    path:'/login',
    name:'login',
    component: loginRegister
  },
  {
    path:'/search',
    name:'SearchResult',
    component: SearchPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
