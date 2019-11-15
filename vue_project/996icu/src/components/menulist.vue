<template>
  <div id="menu">
    <div class="title" @click="title_li">
      Language
    </div>
    <ul v-show="title_list">
      <!-- <li @click="title_li" v-for="data in datalist" :key="data">{{data}}</li> -->
      <router-link :to=data.b tag="li" @click="title_li" v-for="data in datalist" :key="data.a">{{ data.a }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menulist',
  data () {
    return {
      datalist: [
        {'a': '简体中文', 'b': 'zh_CN'},
        {'a': 'English', 'b': 'en_US'},
        {'a': '日本語', 'b': 'ja_JP'},
        {'a': 'Español', 'b': 'es_MX'}
      ],
      title_list: false
    }
  },
  methods: {
    'title_li' () {
      this.title_list = !this.title_list
    }
  }
}
</script>

<style>
#menu{
  width: 83px;
  height: 226px;
  top: 15px;
  right: 20px;
  position: absolute;
  float: right;
}
#menu .title{
  font-family: Avenir;
  text-align: right;
  margin-bottom: 10px;
}
#menu ul li{
  padding: 0 3px;
  width: 80px;
  height: 24px;
  text-align: right;
}
</style>
