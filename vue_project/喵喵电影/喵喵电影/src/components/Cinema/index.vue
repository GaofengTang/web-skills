<template>
  <div class="cinemaBox">
    <ul>
      <li v-for="item in cinemaList" :key="item.id">
        <div>
          <span>{{ item.nm }}</span>
          <span class="q"><span class="price">{{ item.sellPrice }}</span> 元起</span>
        </div>
        <div class="address">
          <span>{{ item.addr }}</span>
          <span>{{ item.distance }}</span>
        </div>
        <div class="card">
          <div :class="key | classCard" v-for="(num, key) in item.tag" :key="key" v-if="num === 1">{{ key | formatCard}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'cinemaBox',
  data () {
    return {
      cinemaList: ''
    }
  },
  mounted () {
    this.$axios('/api/cinemaList?cityId=10').then(res => {
      var msg = res.data.msg
      if (msg === 'ok') {
        this.cinemaList = res.data.data.cinemas
      }
    })
  },
  filters: {
    formatCard (key) {
      var card = [
        {key: 'allowRefund', value: '改签'},
        {key: 'endorse', value: '退'},
        {key: 'sell', value: '折扣卡'},
        {key: 'snack', value: '小吃'}
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ''
    },
    classCard (key) {
      var card = [
        {key: 'allowRefund', value: 'blue'},
        {key: 'endorse', value: 'gray'},
        {key: 'sell', value: 'orange'},
        {key: 'snack', value: 'orange'}
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ''
    }
  }
}
</script>
<style scoped>
#cinemaBox{
  flex: 1;
  overflow: auto;
}
#cinemaBox ul{
  padding: 20px;
}
#cinemaBox ul li{
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
#cinemaBox div{
  margin-bottom: 10px;
}
#cinemaBox .q{
  font-size: 11px;
  color: #f03d37;
}
#cinemaBox .price{
  font-size: 18px;
}
#cinemaBox address{
  font-size: 13px;
  color: #666;
}
#cinemaBox address span:nth-of-type(2){
  float: right;
}
#cinemaBox .card{
  display: flex;
}
#cinemaBox .card div{
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
}
#cinemaBox .card div.orange{
  color: #f90;
  border: 1px solid #f90;
}
#cinemaBox .card div.blue{
  color: #589daf;
  border: 1px solid #589daf;
}
#cinemaBox .card div.gray{
  color: #d1d4d4;
  border: 1px solid #d1d4d4;
}
</style>