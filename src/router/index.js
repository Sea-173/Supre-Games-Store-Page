import Vue from 'vue'
import VueRouter from 'vue-router'
// import loginRegister from '../views/LoginRegister.vue'
import GamePage from "@/views/GamePage";
// import GameInfo from "@/views/GameInfo";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'login',
    component: GamePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
