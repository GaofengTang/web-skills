<template>
  <div id="movieBox">
    <Header titles="喵喵电影" />
    <div id="content">
      <div class="fixed">
        <div class="movie_menu">
          <div class="city_name">
            <router-link tag='div' to='/Movie/city' class="city_namebox">{{ this.citynm }}<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="12" height="12" t="1575337988309" p-id="2661" version="1.1"><path fill="#2c2c2c" d="M 957.464 326.609 L 541.393 753.982 l 0 0 l -29.7209 30.5273 l -29.7189 -30.5273 l 0 0 L 65.8835 326.609 l 29.7189 -30.5252 l 416.07 427.371 l 416.07 -427.371 L 957.464 326.609 Z" p-id="2662" /></svg></router-link>
          </div>
          <div class="centerarea">
            <router-link tag="div" to='/Movie/nowPlying' class="hot_item">正在热映</router-link>
            <router-link tag="div" to='/Movie/comingSoon' class="hot_item">即将上映</router-link>
          </div>
          <div class="search_entry">
            <router-link tag="div" to='/Movie/search' class="search_imgArea"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="32" height="32" t="1575296506234" p-id="2723" version="1.1"><path fill="#d81e06" d="M 485.376 238.933 A 239.388 239.388 0 1 0 724.764 477.867 a 239.616 239.616 0 0 0 -239.388 -238.933 Z m 0 444.644 a 204.8 204.8 0 1 1 204.8 -204.8 a 204.8 204.8 0 0 1 -204.8 203.89 Z" p-id="2724" /><path fill="#d81e06" d="M 403.456 344.519 a 155.876 155.876 0 0 0 -75.0933 133.348 a 17.0667 17.0667 0 0 0 34.1333 0 a 121.97 121.97 0 0 1 58.7093 -104.676 a 17.0667 17.0667 0 0 0 -17.7493 -28.672 Z M 773.689 755.94 l -78.2791 -78.2791 a 17.0667 17.0667 0 0 0 -24.1209 24.1209 l 78.2791 78.2791 A 17.0667 17.0667 0 1 0 773.689 755.94 Z" p-id="2725" /></svg></router-link>
          </div>
        </div>
      </div>
      <keep-alive>
        <router-view class="filmsArea"></router-view>
      </keep-alive>
    </div>
    <Footer class="footer"/>
    <div class="messageBox" v-show="theBox">
        <h2>当前定位</h2>
        <p>{{ this.defaultCity }}</p>
        <ul>
          <li @click="theBox = false">取消</li>
          <li class="changeBtn" @click="changeCity">切换定位</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import {mapState} from 'vuex'
export default {
  name: 'movie',
  data () {
    return {
      defaultCity: '',
      defaultId: '',
      theBox: false
    }
  },
  mounted () {
    this.$axios('/api/getLocation').then(res => {
      var msg = res.data.msg
      if (msg === 'ok') {
        this.defaultCity = res.data.data.nm
        this.defaultId = res.data.data.id
        if (this.defaultCity !== this.citynm) {
          this.theBox = true
        }
      }
    })
  },
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState(['citynm', 'cityid'])
  },
  methods: {
    changeCity () {
      this.$store.commit('getCitynm', {cityNm: this.defaultCity, cityId: this.defaultId})
      this.theBox = false
    }
  }
}
</script>

<style scoped>
#movieBox{
  display: flex
}
.messageBox{
  width: 200px;
  height: 100px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -100px;
  background: rgb(239, 245, 209);
  box-shadow: 3px 3px 3px 3px gray;
  border: 1px solid gainsboro;
  border-radius: 4px;
}
.messageBox h2{
  text-align: center;
  font-weight: 400;
}
.messageBox p{
  text-align: center;
}
.messageBox ul{
  display: flex;
}
.messageBox ul li{
  flex: 1;
  text-align: center;
  border: 1px solid gainsboro;
}
#content{
  position: absolute;
  top: 50px;
  /* height:100%; */
  width:100%;
  bottom: 112px;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
}
#content .fixed{
  width: 100%;
  position: fixed;
  z-index: 999;
  background: white;
}
#content .movie_menu{
  display: flex;
  text-align: center;
  height: 50px;
}
#content .movie_menu .city_name, .search_entry{
  flex: 1;
}
#content .movie_menu .city_name .city_namebox{
  height: 50px;
  line-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#content .movie_menu .city_name .city_namebox svg{
  margin-left: 5px;
}
#content .movie_menu .city_name .city_namebox.router-link-active{
  color: red;
  border-bottom: 2px solid red;
}
#content .movie_menu .centerarea{
  width: 208px;
  height: 50px;
}
#content .movie_menu .centerarea div{
  float: left;
  line-height: 45px;
  margin: 0 20px;
}
#content .movie_menu .search_entry{
  float: right;
  margin-right: 10px;
}
#content .movie_menu .search_entry .search_imgArea{
  /*  */
  float: right;
  width: 32px;
  height:50px;
  position: relative;
}
#content .movie_menu .search_entry .search_imgArea svg{
  margin-top: 8px;
}
#content .movie_menu .search_entry div.router-link-active{
  border-bottom: 2px solid red;
}
#content .movie_menu .centerarea div.router-link-active{
  color: red;
  border-bottom: 2px solid red;
}
</style>
