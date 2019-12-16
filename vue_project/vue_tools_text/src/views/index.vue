<template>
  <div id="indexBox">
    <h2>index</h2>
    <div class="contentBox" ref="contentBox">
      <div>
        <div class="loading" v-show="loading">
          <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </div>
        <ul>
          <router-link type="li" to="/better-scroll">better-scroll例子</router-link>
          <router-link type="li" to="/swiper">Swiper例子</router-link>
          <router-link type="li" to="/mint-ui">mint-ui例子</router-link>
          <router-link type="li" to="/element">Element例子</router-link>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index',
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      var scroll = new BScroll(this.$refs.contentBox, {
        tap: true,
        probeType: 1
      })
      scroll.on('scroll', (pos) => {
        if (pos.y > 20) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 2000)
        }
      })
      // scroll.on('touchEnd', (pos) => {
      //   if (pos > 20) {
      //     setTimeout(() => {
      //       this.loading = false
      //     }, 2000)
      //   }
      // })
    })
  }
}
</script>

<style scoped>
/* #indexBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
} */
#indexBox h2{
  height: 50px;
  width: 100%;
  background: red;
  color: white;
  line-height: 50px;
  position: fixed;
  text-align: center;
  z-index: 999;
}
#indexBox .contentBox{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50px;
  /* overflow: auto; */
  background: rgb(253, 251, 251);
}
#indexBox .contentBox .loading{
  display: flex;
  justify-content: center;
}
#indexBox .contentBox ul{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 50px;
}
#indexBox .contentBox ul a{
  height: 40px;
  border: 5px ridge rgb(171, 171, 253);
  margin: 10px;
  line-height: 40px;
  text-align: center
}
#indexBox .contentBox ul li{
  height: 40px;
  border: 5px ridge rgb(171, 171, 253);
  margin: 10px;
  line-height: 40px;
  text-align: center
}
</style>
