<template>
  <div class="cityList">
    <div class="cityHot">
      <h2>热门城市</h2>
      <ul class="clearfix">
        <li v-for="item in hotList" :key="item.id" @click="cityName(item.nm, item.id)">{{ item.nm }}</li>
      </ul>
    </div>
    <div class="citySort">
      <div v-for="item in cityList" :key="item.index" ref="cityList">
        <h2 ref="city">{{ item.index }}</h2>
        <ul>
          <li v-for="itemList in item.list" :key="itemList.id" @click="cityName(itemList.nm, itemList.id)">{{ itemList.nm }}</li>
        </ul>
      </div>
    </div>
    <div class="cityIndex">
      <ul>
        <li v-for="(itemindex, index) in cityList" :key="itemindex.index" @click="handleToIndex(index)">{{ itemindex.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import cityLists from '../../api/cityList.json'

export default {
  name: 'city',
  data () {
    return {
      hotList: [],
      cityList: []
    }
  },
  mounted () {
    var cityList = window.localStorage.getItem('cityList')
    var hotList = window.localStorage.getItem('hotList')
    if (cityList && hotList) {
      this.cityList = JSON.parse(cityList)
      this.hotList = JSON.parse(hotList)
    } else {
      this.$axios.get('/api/cityList').then((res) => {
        var msg = res.data.msg
        if (msg === 'ok') {
          var cities = res.data.data.cities
          var {cityList, hotList} = this.formatCityList(cities)
          this.cityList = cityList
          this.hotList = hotList
          // 进行本地存储，减少ajax请求
          window.localStorage.setItem('cityList', JSON.stringify(cityList))
          window.localStorage.setItem('hotList', JSON.stringify(hotList))
        }
      })
    }
  },
  methods: {
    formatCityList (cities) {
      var cityList = []
      var hotList = []

      // 获取热门城市列表
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i])
        }
      }
      // 格式化城市列表
      for (i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.slice(0, 1).toUpperCase()
        // 判断该首字母在该列表中是否已存在，若不存在则在列表中新建对象, 若存在则累加
        if (toCom(firstLetter)) {
          cityList.push({index: firstLetter, list: [{nm: cities[i].nm, id: cities[i].id}]})
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({nm: cities[i].nm, id: cities[i].id})
            }
          }
        }
      }
      function toCom (firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false
          }
        }
        return true
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1
        } else if (n1.index < n2.index) {
          return -1
        } else {
          return 0
        }
      })
      return {cityList, hotList}
    },
    cityName (cityNm, cityId) {
      this.$store.commit('getCitynm', {cityNm, cityId})
      this.$router.push('/Movie')
    },
    handleToIndex (index) {
      document.documentElement.scrollTop = this.$refs.cityList[index].offsetTop
      console.log(this.$refs.cityList[index].offsetTop)
    }
  }
}
</script>

<style scoped>
.cityList{
  background: rgb(253, 238, 238);
  position: relative;
  top: 50px;
  /* height: 100%; */
}
.cityList h2{
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
  position: relative;
  top: 25px;
}
.cityList .cityHot .clearfix{
  display: block;
  height: 144px;
  overflow: auto;
  position: relative;
  top: 17px;
}
.cityList .cityHot ul li{
  flex: 1;
  float: left;
  background: #fff;
  width: 25%;
  height: 33px;
  margin-top: 15px;
  margin-left: 5%;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
}

.citySort ul li{
  list-style: none;
  line-height: 30px;
  margin-left: 15px;
}
.cityList .cityIndex{
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  text-align: center;
  border-left: 2px solid #c5c5c5;
}
.cityList .cityIndex ul{
  flex: 1;
  display: flex;
  position: relative;
  /* top: 20%; */
  top: 20vh;
  flex-direction: column;
  z-index: 1;
}
.cityList .cityIndex ul li{
  flex: 1;
}
</style>
