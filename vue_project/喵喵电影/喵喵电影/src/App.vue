<template>
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
input{
  outline: none;
}
#app {
  min-width: 300px;
  width: 300px;
  height: 700px;
  min-height: 700px;
  border: 2px solid red;
  position: fixed;
  margin: 30px auto;
}
</style>
