// 日期格式化，Date 转化为指定格式的String  固定写法
// fmt = yyyy-MM-dd HH:mm:SS
Date.prototype.format=function(fmt) {
    var o = {
        'M+':this.getMonth()+1,  // 从0开始
        'd+':this.getDate(),
        'h+':this.getHours(),
        'm+':this.getMinutes(),
        's+':this.getSeconds(),
        'q+':Math.floor((this.getMonth()+3)/3),  // 季度
        'S':this.getMilliseconds()
    };
    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    // RegExp.$1 为被正则表达式匹配到的第一个子匹配所匹配到的内容，/(y+)/就这么一个匹配项，所以值的就是他所匹配到的值
    // (y+)的意思是：y+匹配到的内容通过分组来取到,这里是通过第一个分组取到.从后面的代码中可以看出,RegExp.$1就是取到的y+匹配到的内容 
    // 该表达式的意思是存在输入的fmt中有关于年份的格式如：yyyy，用当前的年份代替它。 如果年份只有两个yy，那么substr也会截取最后两位去替换
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ("00" + o[k]).substr(("" + o[k]).length))
        }
    }
    // 这里循环获取对象o中的key,去匹配输入的格式；new RegExp("("+ k +")")则是创建一个正则表达式("+ k +")作用同(M+)，获得内容的分组，后面的RegExp.$1才能调用
    // replace后半部分是判断获取格式的内容长度为1，则用当前时间去替换，如果长度大于1(一般为2即mm)时，在前面添加两位，保证能获取到两位（01，22）
    return fmt
}

var v = new Vue({
        el: '#comment',
        data: {
            // 原始用户评论信息
            comments: [
                {username: '张三', userimg: '1.jpg', words: '我的名字叫张三', time: '2019-11-16 20:22:43'},
                {username: '李四', userimg: '2.jpg', words: 'hi 我是李四', time: '2019-08-16 09:22:43'},
                {username: '王五', userimg: '3.jpg', words: 'hello,everybody', time: '2017-08-16 09:22:43'}
            ],
            users: [
                {username: 'zhangsan', password: '123456', userimg: '1.jpg'},
                {username: 'lisi', password: '123456', userimg: '2.jpg'},
                {username: 'wangwu', password: '123456', userimg: '3.jpg'}
            ],
            currentUser: {username: '', userimg: ''},
            loginStatus: false,
            registerStatus: false,
            userbarStatus: false,
            lrBtnStatus: true
        },
        methods: {
            // 登录
            showLogin(){
                document.getElementById("login").reset();    // 把表单中的元素重置为它们的默认值。
                this.loginStatus = true;
                this.registerStatus = false;
            },
            // 登录页面点击立即注册
            showregister(){
                document.getElementById("register").reset();
                this.loginStatus = false;
                this.registerStatus = true;
            },
            // 退出登录
            loginout(){
                this.currentUser.username = '';
                this.currentUser.userimg = '';
                this.userbarStatus = false;
                this.lrBtnStatus = true;
                alert("退出成功");
            },
            // 点击登录、注册框外，退出登录、注册页面
            loginboxClick(){
                this.loginStatus = false;
            },
            registerboxClick(){
                this.registerStatus = false;
            },
            // 点击登录注册时阻止事件冒泡
            stopProp: function(e){    
                e = e || event;
                e.stopPropagation()
            },

            login(){
                var username = document.getElementById("login-usernm").value;
                var psw = document.getElementById("login-pwd").value;
                // var username = $('.loginbox').find('.username').val();
                // var psw = $('.loginbox').find('.psw').val();
                // var flag = false;
                for(var i = 0; i < this.users.length; i++){
                    if(this.users[i].username === username && this.users[i].password === psw){
                        // flag = true;
                        this.loginStatus = false;
                        this.userbarStatus = true;
                        this.currentUser.username = this.users[i].username;
                        this.currentUser.userimg = this.users[i].userimg;
                        this.lrBtnStatus = false;
                        alert("登录成功");
                        break;
                    }else if(username === '' || psw === ''){
                        alert('用户名密码不能为空');
                        return;
                    }else{
                        alert('用户名密码输入错误')
                        document.getElementById("login").reset(); 
                        return;
                    }
                }
                // if(!flag){
                //     alert('用户名密码输入错误')
                //     document.getElementById("login").reset(); 
                // }
            },

            register(){
                var username = document.getElementById("register-usernm").value;
                var psw = document.getElementById("register-pwd").value;
                var pswAgain = document.getElementById("register-pwd-again").value;
                // var username = $('.registerbox').find('.username').val();
                // var psw = $('.registerbox').find('.pwd').val();
                // var flag = false;
                var obj = {};
                for(var i = 0; i < this.users.length; i++){
                    if(this.users[i].username === username && psw != '' && pswAgain != ''){
                        flag = true;
                        alert('该用户名已注册')
                        break;
                    }else if(username == '' || psw == '' ||  pswAgain == ''){
                        alert("账号密码不能为空")
                        return;
                    }else if(psw !== pswAgain){
                        alert("密码输入不一致！");
                        document.getElementById("register").reset();
                        return;

                    }else{ 
                        var randomNum = (Math.floor(Math.random() * 11) + 1) + 1 // [1, 12]
                        obj.username = username;
                        obj.password = psw;
                        obj.userimg = randomNum + '.jpg'
                        this.users.push(obj)
                        alert("注册成功")                      
                        this.userbarStatus = true;

                        this.currentUser.username = obj.username;
                        this.currentUser.userimg = obj.userimg;

                        this.lrBtnStatus = false;
                        document.getElementById("register").reset();
                        this.registerStatus = false;
                        return;
                    }
                };
                // if(!flag){
                //     if(username == '' || psw == ''){
                //         alert("账号密码不能为空")
                //     }else{
                //         var randomNum = Math.floor(Math.random() * 11) + 1
                //         obj.username = username;
                //         obj.password = psw;
                //         obj.userimg = randomNum + '.jpg'
                //         this.users.push(obj)
                //         alert("注册成功")                      
                //         this.userbarStatus = true;

                //         this.currentUser.username = obj.username;
                //         this.currentUser.userimg = obj.userimg;

                //         this.lrBtnStatus = false;
                //         document.getElementById("register").reset();
                //         this.registerStatus = false;
                //     }
                // }
            },

            // 评论
            subCommont(){
                if(!this.userbarStatus){
                    alert("请登录后再评论");
                    this.loginStatus = true;
                }else{
                    if(document.getElementById('textArea').value == ''){
                        alert('请先填写评论内容')
                    }else{
                        var obj = {};
                        obj.username = this.currentUser.username;
                        obj.userimg = this.currentUser.userimg;
                        obj.words = document.getElementById('textArea').value;
                        obj.time = new Date().format('yyyy-MM-dd hh:mm:ss')
                         
                        this.comments.push(obj);
                        alert('评论成功');
                        // $('.wordsbox textarea').val('');
                        document.getElementById('textArea').value = '';
                    }
                }
            }
        }
    })