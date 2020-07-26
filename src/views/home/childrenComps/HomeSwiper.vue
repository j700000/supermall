<template>
  <div class="home-swiper">
    <Swiper>
        <Swiper-item v-for='(item,index) in banners' :key='item.index'>
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </Swiper-item>
      </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
 components: {Swiper, SwiperItem},
 props: {
    banners: {
        type: Array,
        default() {
            return []
        }
    }
 }
}
</script>

<style>

</style>