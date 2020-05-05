import Vue from "vue"
import VueRouter from "vue-router"
// 1.安装插件
Vue.use(VueRouter)

//页面懒加载
 const Home = () => import("views/home/Home") 
 const Category = () => import("views/category/Category") 
 const Cart = () => import("views/cart/Cart") 
 const Profile = () => import("views/profile/Profile") 
// 2.创建router
// 配置对应的映射关系
const routes = [
  {
    path:'/',
    redirect: "/home",
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  }

]
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
