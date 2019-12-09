<template>
  <div class="nowPlaying" ref="wrapper">
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
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { timeout } from 'q'
export default {
  name: 'nowPlaying',
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
            this.$axios('/api/movieOnInfoList?cityId=' + this.$store.state.cityid).then((res) => {
              var msg = res.data.msg
              if (msg === 'ok') {
                this.filmList = res.data.data.movieList
              }
            })
            this.pullDownMsg = ''
          }, 1000)
        }
      })
    })
  }
}
</script>

<style>
.nowPlaying{
  position: absolute;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  top: 52px;
  text-align: center;
  line-height: 20px;
}
.nowPlaying ul{
  width: 100%;
  position: relative;
}
.nowPlaying ul li{
  height: 100px;
  width: 100%;
  padding: 10px 0 0;
  background: rgb(252, 251, 249);
  border-top: 2px solid rgb(221, 220, 220);
}
.nowPlaying ul li .imgShow .flimPhoto{
  width: 64px;
  height: 90px;
  position: relative;
  left: 15px;
  float: left;
}
.nowPlaying ul li .imgShow .version{
  float: right;
  width: 50px;
  position: absolute;
  right: 70px;
  margin-top: 10px;
}
.nowPlaying ul li .filmDescribe{
  position: relative;
  left: 25px;
  float: left;
  text-align: left;
}
.nowPlaying ul li .filmDescribe h2{
  height: 24px;
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nowPlaying ul li .filmDescribe p{
  font-size: 13px;
  color:#666;
  line-height: 22px;
  width: 200px;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nowPlaying ul li .filmDescribe p:hover{
  text-overflow:inherit;
  overflow:visible;
}
.comingSoonBox ul li .filmDescribe p span{
  font-weight: 700;
  color:#faaf00;
  font-size: 15px;
  margin-left: 5px;
}
.nowPlaying ul li .btn_mall{
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color:#f03d37;
  color:#fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  float: right;
  margin: 35px 15px;
  position: relative;
}
</style>
