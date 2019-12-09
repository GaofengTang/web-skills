<template>
  <div class="wrapper" ref="wrapper">
    {{ pullDownMsg }}
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { timeout } from 'q'
/* eslint-disable no-new */
export default {
  name: 'Scoller',
  data () {
    return {
      pullDownMsg: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      var scroll = new BScroll(this.$refs.wrapper, {
        tap: true,
        probeType: 1
      })
      scroll.on('scroll', (pos) => {
        if (pos.y > 30) {
          this.pullDownMsg = '正在更新'
        }
      })
      scroll.on('touchEnd', (pos) => {
        if (pos.y > 30) {
          this.pullDownMsg = '已更新'
          timeout(() => {
            this.pullDownMsg = ''
          }, 1000)
        }
      })
    })
  }
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 52px
}
</style>
