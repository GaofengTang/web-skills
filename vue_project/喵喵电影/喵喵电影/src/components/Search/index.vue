<template>
  <div id="searchBox">
    <div class="searchArea">
      <span><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="13" height="13" t="1575451119259" p-id="2562" version="1.1"><path fill="#1f3645" d="M 995.436 872.918 l -208.548 -208.616 a 89.4165 89.4165 0 0 0 -27.254 -18.0865 a 410.955 410.955 0 0 0 68.9817 -227.99 c 0 -228.125 -184.884 -412.987 -413.01 -412.987 C 187.504 5.23854 2.61927 190.123 2.61927 418.226 c 0 228.102 184.884 412.987 412.987 412.987 c 84.3586 0 162.643 -25.6056 228.057 -68.9817 c 4.24503 9.82227 10.0029 19.1929 17.9962 27.2088 l 208.639 208.593 a 88.4682 88.4682 0 0 0 125.138 0 a 88.423 88.423 0 0 0 0 -125.115 Z m -579.83 -159.708 c -162.937 0 -294.984 -132.047 -294.984 -294.962 c 0 -162.937 132.047 -294.984 294.984 -294.984 c 162.959 0 294.984 132.047 294.984 294.984 c 0 162.914 -132.025 294.962 -294.984 294.962 Z" p-id="2563" /></svg></span>
      <input type="text" v-model="message">
    </div>
    <div class="showMovie">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in movieList" :key="item.id">
          <div class="img">
            <img :src="formatUrl(item.img)" alt="">
          </div>
          <div class="score">{{ item.sc }}</div>
          <div class="info">
            <div class="flex">
              <p class="movieName">{{ item.nm }}</p>
              <p>{{ item.enm }}</p>
              <p>{{ item.cat }}</p>
              <p>{{ item.rt }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      message: '',
      movieList: []
    }
  },
  watch: {
    message (value) {
      this.cancelRequest()
      this.$axios('/api/searchList?cityId=' + this.$store.state.cityid + '&kw=' + value, {
        // axios自带防抖函数
        cancelToken: new this.$axios.CancelToken((c) => {
          this.source = c
        })
      }).then((res) => {
        if (res.data.msg === 'ok') {
          this.movieList = res.data.data.movies.list
          console.log(this.$store.state.cityid)
        }
      }).catch((err) => {
        if (this.$axios.isCancel(err)) {
          // 请求如果被取消，这里是返回取消的message
          console.log('Rquest canceled', err.message)
        } else {
          // handle error
          console.log(err)
        }
      })
      return this.movieList
    }
  },
  methods: {
    formatUrl (url) {
      return url.replace(/w\.h/, '')
    },
    cancelRequest () {
      if (typeof this.source === 'function') {
        this.source('请求终止')
      }
    }
  }
}
</script>

<style scoped>
#searchBox{
  width: 100%;
  height: 100%;
  background: #e2e1e1;
  margin-bottom: 50px;
  /* position: relative; */
}
#searchBox .searchArea{
  display: flex;
  position: relative;
  height: 100%;
  top: 10px;
  height: 30px;
  border: 1px solid #a8a8a8;
  margin: 20px;
  margin-top: 50px;
  padding: 2px;
  border-radius: 4px;
  background: white;
}
#searchBox .searchArea span svg{
  position: relative;
  top: 5px;
  left: 5px;
}
#searchBox .searchArea input{
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
  padding-left: 10px;
}
#searchBox .showMovie{
  position: relative;
  width: 100%;
  background: white;
  margin-top: 20px;
}
#searchBox .showMovie h3{
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
#searchBox .showMovie ul{
  overflow: hidden;
  position: relative;
  height: 100%;
}
#searchBox .showMovie ul li{
  list-style: none;
  width: 100%;
  height: 100px;
  border-bottom: 2px groove #e6e6e6;
}
#searchBox .showMovie ul li img{
  width:60px;
  height: 80px;
  float: left;
  position: relative;
  top: 8px;
  left: 15px;
}
#searchBox .showMovie ul li .info{
  position: relative;
  float: left;
  left: 25px;
  top: 8px;
}
#searchBox .showMovie ul li .flex{
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 50vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* #searchBox .showMovie ul li .flex:hover{
  text-overflow: inherit;
  overflow: visible;
  font-size: 12px;
} */
#searchBox .showMovie ul li p{
  font-size: 12px;
  margin-bottom: 3px;
  flex: 1;
}
#searchBox .showMovie ul li .movieName{
  font-size: 18px;
}
#searchBox .showMovie ul li .score{
  color: #fc7103;
  font-size: 16px;
  position: relative;
  float: right;
  top: 10px;
  right: 15px;
}
</style>
