import Vue from 'vue'
import VueRouter from 'vue-router'
// import GamePage from "@/views/GamePage";
import loginRegister from "@/views/LoginRegister";
import SearchPage from "@/views/SearchPage";
import administratorPage from "@/views/AdministratorPage";
import viewMore from "@/views/ViewMore";
import AdministratorGamebase from "@/views/AdministratorGamebase";
// import borderTest from "@/views/BorderTest";
// import GameInfo from "@/views/GameInfo";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'administratorPage',
    component: administratorPage
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
  },
  {
    path:'/viewMore',
    name:'ViewMore',
    component: viewMore
  },
  {
    path:'/administratorGameBase',
    name:'AdministratorGameBase',
    component: AdministratorGamebase
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
