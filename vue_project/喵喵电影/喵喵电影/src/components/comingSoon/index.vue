<template>
  <div class="comingSoonBox" ref="wrapper">
    {{pullDownMsg}}
    <ul>
      <li v-for="film in filmList" :key="film.id">
        <div class="imgShow">
          <img class="flimPhoto" :src="formatUrl(film.img)" alt="">
          <img class="version" v-show="film.version === ''" src="@/assets/3dimax.png" alt="">
        </div>
        <div class="filmDescribe">
          <h2>{{ film.nm }}</h2>
          <p>观众评<span>{{ film.sc }}</span></p>
          <p>主演: {{ film.star }}</p>
          <p>{{ film.showInfo }}</p>
        </div>
        <div class="btn_mall">预定</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { timeout } from 'q'
export default {
  name: 'comingSoon',
  data () {
    return {
      pullDownMsg: '',
      filmList: []
    }
  },
  methods: {
    formatUrl (url) {
      return url.replace(/w\.h/, '')
    }
  },
  mounted () {
    this.$axios('/api/movieOnInfoList?cityId=' + this.$store.state.cityid).then((res) => {
      var msg = res.data.msg
      if (msg === 'ok') {
        this.filmList = res.data.data.movieList
      }
    })
    this.$nextTick(() => {
      var scroll = new BScroll(this.$refs.wrapper, {
        tap: true,
        probeType: 1
      })
      scroll.on('scroll', (pos) => {
        if (pos.y > 20) {
          this.pullDownMsg = '正在更新'
        }
      })
      scroll.on('touchEnd', (pos) => {
        if (pos.y > 20) {
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

<style>
.comingSoonBox{
  /* 此处继承的父元素.content的内容，一直到底部，所以不需要overflow */
  position: absolute;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  top: 52px;
}
.comingSoonBox ul{
  width: 100%;
  position: relative;
}
.comingSoonBox ul li{
  height: 100px;
  width: 100%;
  padding: 10px 0 0;
  background: rgb(252, 251, 249);
  border-top: 2px solid rgb(221, 220, 220);
}
.comingSoonBox ul li .imgShow .flimPhoto{
  width: 64px;
  height: 90px;
  position: relative;
  left: 15px;
  float: left;
}
.comingSoonBox ul li .imgShow .version{
  float: right;
  width: 50px;
  position: absolute;
  right: 70px;
  margin-top: 10px;
}
.comingSoonBox ul li .filmDescribe{
  position: relative;
  left: 25px;
  float: left;
}
.comingSoonBox ul li .filmDescribe h2{
  height: 24px;
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.comingSoonBox ul li .filmDescribe p{
  font-size: 13px;
  color:#666;
  line-height: 22px;
  width: 200px;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.comingSoonBox ul li .filmDescribe p:hover{
  text-overflow:inherit;
  overflow:visible;
}
.comingSoonBox ul li .filmDescribe p span{
  font-weight: 700;
  color:#faaf00;
  font-size: 15px;
  margin-left: 5px;
}
.comingSoonBox ul li .btn_mall{
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color:#597ac0;
  color:#fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  float: right;
  margin: 35px 15px;
  position: relative;
}
</style>
