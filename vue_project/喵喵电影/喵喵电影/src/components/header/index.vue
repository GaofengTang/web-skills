<template>
  <div id="header">
    <div class="flex">
      <h1>{{ titles }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['titles']
}
</script>

<style scoped>
  #header{
    width: 100%;
    height: 52px;
    position: fixed;
    z-index: 999;
    background: rgb(229, 72, 71);
  }
  #header .flex{
    display: flex;
  }
  #header h1{
    flex: 1;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: 400;
    color: aliceblue;
  }
</style>
