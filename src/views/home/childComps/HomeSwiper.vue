<!-- 轮播图组件 -->
<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/commons/swiper";
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>