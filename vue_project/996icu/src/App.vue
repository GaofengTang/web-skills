<template>
  <div>
    <router-view></router-view>
  </div>
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
body{
  background-color: #de335e;
  color: #fff;
}
.content{
  width: 500px;
  height: 1306px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
}

.markdown-body a, p{
  color: #fff;
}
.markdown-body{
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
}
</style>
