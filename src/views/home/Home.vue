<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">主页</div></nav-bar>
    <home-swiper :banners="banners"/>
    <Recommend-vue :recommends="recommends"/>
  </div>
</template>
<script>
  import NavBar from "components/commons/navbar/NavBar"
  // 导入封装好的轮播图
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendVue from "./childComps/RecommendVue"
  // 导入首页数据
  import {getHomeMultiData} from "network/home.js"

  export default{
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendVue
    },
    data () {
      return {
        banners:[],
        recommends:[]
      }
    },
    //在组件创建的时候就开始请求数据
    created () {
      getHomeMultiData().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        
      })
    }
  }
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>