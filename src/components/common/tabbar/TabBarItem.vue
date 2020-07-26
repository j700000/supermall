<template>
  <div class='tab-bar-item' @click='itemClick'>
    <div v-if='!isActive'><slot name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <!-- <div :style="{color: isActive?activeColor:''}"><slot name="item-text"></slot></div> -->
    <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        path: String, 
        activeColor: {
            type: String,
            default: '#00A2FE'
        }
    },
    data() {
        return {
            // isActive: false
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        isActiveColor() {
            return this.isActive?{color: this.activeColor}: {}
        }
    },
    methods: {
        itemClick() {
        //    console.log('click');
           this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    font-weight: 600;
  }
img {
    width: 24px;
    height: 24px;
    /* margin: 2px 0; */
    margin-top: 5px;
    /* vertical-align: middle; */
}
</style>