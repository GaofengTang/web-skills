<template>
  <div class="root">
    <Header titles="我的喵喵"/>
    <div class="loginBox">
      <input class="loginText" type="text" placeholder="账户名/手机号/Email">
      <input class="loginPasswd" type="password" placeholder="请输入您的密码" id="passwd">
      <input class="loginBtn" type="button" value="登录">
      <div class="link">
        <a href="#">立即注册</a>
        <a class="findPsw" href="#">找回密码</a>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

/* eslint-disable no-new */
export default {
  name: 'mine',
  data () {
    return {
      pullDownMsg: ''
    }
  },
  components: {
    Header,
    Footer
  }
}

</script>

<style scoped>
/* #root {
  height: 100%;
} */
.loginBox{
  display: flex;
  flex-direction: column;
  position: relative;
  top: 52px;
}
.loginBox .loginText{
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  text-indent: 10px;
  float: left;
}
.loginBox .loginPasswd{
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  outline: none;
  text-indent: 10px;
  float: left;

}
.loginBox .loginBtn{
  width: 100%;
  height: 50px;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: #fff;
  font-size: 20px;
}
.loginBox .link{
  padding: 0 10px;
}
.loginBox .link a{
  font-size: 12px;
  color: red;
  text-decoration: none;
}
.loginBox .link .findPsw{
  float: right;
  top: 5px;
  position: relative;
}
</style>
