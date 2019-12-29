<template>
  <div>
    <Header titles="个人中心"/>
    <footer class="footerBox">
      <input class="logoutBtn" type="button" value="退出" @click="logout">
    </footer>

    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'center',
  components: {
    Header,
    Footer
  },
  methods: {
    logout () {
      this.$router.push('/Mine')
      alert('退出成功')
      window.localStorage.removeItem('loginIsTrue')
    }
  }
}
</script>

<style scoped>
  .footerBox {
    position: absolute;
    bottom: 60px;
    width: 100%;
    height: 30px;
  }
  .logoutBtn {
    width: 50%;
    display: block;
    height: 30px;
    background: red;
    margin: 0 auto;
  }
</style>
