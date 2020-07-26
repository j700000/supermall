<template>
  <div id="home">
      <nav-bar class='nav-bar'>
        <div slot='center'>购物街</div>
      </nav-bar>
      <home-swiper :banners='banners' />
      <RecommendView :recommends='recommends' />
      <feature-view />

      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
      </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'
import {getHomeMultiData} from 'network/home'
export default {
  components: {NavBar, HomeSwiper, RecommendView, FeatureView},
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultiData().then(res => {
      console.log('res++++', res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    console.log('看看result====', this.result)
  }
}
</script>

<style>
#home {
    padding-top: 44px;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>