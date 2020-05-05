<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}} </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendVue",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
  .recommend{
    display: flex;
    padding:10px 0 20px;
    border-bottom: 8px solid #eee;
    text-align: center;
    font-size: 12px;

  }
  .recommend-item{
    flex:1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
  }
</style>