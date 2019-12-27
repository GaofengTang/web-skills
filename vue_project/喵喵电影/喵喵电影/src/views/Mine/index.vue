<template>
  <div class="root">
    <Header titles="我的喵喵"/>
    <div class="loginBox" v-show="loginShow">
      <input class="loginText" type="text" placeholder="账户名/手机号/Email">
      <input class="loginPasswd" type="password" placeholder="请输入您的密码">
      <input class="loginBtn" type="button" @click="login" value="登录">
      <div class="link">
        <a href="#" @click="registerboxShow">立即注册</a>
        <a class="findPsw" href="#">找回密码</a>
      </div>
    </div>
    <div class="registerBox" v-show="registerShow">
      <input class="registerText" type="text" placeholder="账户名/手机号/Email">
      <input class="registerPasswd" type="password" placeholder="请输入您的密码">
      <input class="registerPasswd" type="password" placeholder="请再次输入您的密码">
      <input class="registerBtn" type="button" @click="register" value="注册">
      <input class="loginboxShow" type="button" @click="loginboxShow" value="返回登录" style="background: #b9b6b6">
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
      pullDownMsg: '',
      loginShow: true,
      registerShow: false,
      userName: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    registerboxShow () {
      this.loginShow = false
      this.registerShow = true
    },
    loginboxShow () {
      this.loginShow = true
      this.registerShow = false
    },
    login () {

    }
  }
}

</script>

<style scoped>
.loginBox, .registerBox{
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
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.loginBox .link a{
  font-size: 12px;
  color: red;
  text-decoration: none;
}

.registerBox .registerText{
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  text-indent: 10px;
  float: left;
}
.registerBox .registerPasswd{
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  outline: none;
  text-indent: 10px;
  float: left;

}
.registerBox .registerBtn, .loginboxShow{
  width: 100%;
  height: 50px;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: #fff;
  font-size: 20px;
}
</style>
