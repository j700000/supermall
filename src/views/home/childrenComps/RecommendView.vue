<template>
  <div class="recommend">
    <div v-for='(item,index) in recommends' :key='item.index' class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
 props: {
     recommends:{
         type: Array,
         default() {
             return []
         }
     }
 }
}
</script>

<style scoped>
.recommend {
  display: flex;
  font-size: 14px;
  text-align: center;
  border-bottom: 10px solid #eee ;
}
.recommend-item {
  flex: 1;
}

img {
  width: 100%;
  padding: 8px;
}
</style>