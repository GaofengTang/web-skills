<template>
  <div class="root">
    <Header titles="我的喵喵"/>
    <div class="loginBox" v-show="loginShow">
      <input class="loginText clearContent" type="text" v-model="login_userName" placeholder="账户名/手机号/Email">
      <input class="loginPasswd clearContent" type="password" v-model="login_passWd" placeholder="请输入您的密码">
      <input class="loginBtn" type="button" @click="login" value="登录">
      <!-- <router-link type="button" class="loginBtn" to="/Mine/center"></router-link> -->
      <div class="link">
        <a href="#" @click="registerboxShow">立即注册</a>
        <a class="findPsw" href="#">找回密码</a>
      </div>
    </div>
    <div class="registerBox" v-show="registerShow">
      <input class="registerText clearcontent" type="text" v-model="register_name" placeholder="账户名/手机号/Email">
      <input class="registerPasswd clearcontent" type="password" v-model="register_psw" placeholder="请输入您的密码">
      <input class="registerPasswdAg clearcontent" type="password" v-model="register_pswag" placeholder="请再次输入您的密码">
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
      login_userName: '',
      login_passWd: '',
      register_name: '',
      register_psw: '',
      register_pswag: ''

    }
  },
  components: {
    Header,
    Footer
  },
  mounted () {
    var users = [
      {
        name: 'admin',
        psw: '12345'
      }
    ]
    window.localStorage.setItem('users', JSON.stringify(users))
  },
  methods: {
    registerboxShow () {
      // this.$options.methods.clearValue()
      this.loginShow = false
      this.registerShow = true
    },
    loginboxShow () {
      this.$options.methods.clearValue()
      this.registerShow = false
      this.loginShow = true
    },
    login () {
      if (this.login_userName === '' || this.login_passWd === '') {
        alert('请输入用户名密码')
        document.getElementsByClassName('loginText')[0].value = ''
        document.getElementsByClassName('loginPasswd')[0].value = ''
      } else {
        var users = JSON.parse(window.localStorage.getItem('users'))
        console.log(users)
        for (var user of users) {
          if (user.name === this.login_userName && user.psw === this.login_passWd) {
            alert('登录成功')
            this.$router.push('/userCenter')
            document.getElementsByClassName('loginText')[0].value = ''
            document.getElementsByClassName('loginPasswd')[0].value = ''
            window.localStorage.setItem('loginIsTrue', true)
            break
          } else if (user.name !== this.login_userName) {
            alert('该用户不存在，请注册')
            document.getElementsByClassName('loginText')[0].value = ''
            document.getElementsByClassName('loginPasswd')[0].value = ''
            break
          } else {
            alert('密码输入不正确，请重新输入')
            document.getElementsByClassName('loginText')[0].value = ''
            document.getElementsByClassName('loginPasswd')[0].value = ''
            break
          }
        }
      }
    },
    register () {
      let users = JSON.parse(window.localStorage.getItem('users'))
      for (let user of users) {
        if (user.name === this.register_name) {
          alert('该用户名已存在')
          document.getElementsByClassName('registerText')[0].value = ''
          break
        } else {
          if (this.register_psw !== this.register_pswag) {
            alert('请核对密码是否一致')
            break
          } else {
            let users = [
              {
                name: this.register_name,
                psw: this.register_psw
              }
            ]
            window.localStorage.setItem('users', JSON.stringify(users))
            alert('注册成功，请登录')
            var content = document.getElementsByClassName('clearcontent')
            for (var i = 0; i < content.length; i++) {
              content[i].value = ''
            }
            break
          }
        }
      }
    },
    clearValue () {
      var inputs = document.getElementsByClassName('clearcontent')
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
      }
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
  outline: none;
  text-indent: 10px;
  float: left;
}
.registerBox .registerPasswdAg {
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
