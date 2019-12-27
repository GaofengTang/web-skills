$(function(){
    // 常见时间获取方式
    function now_time(){
        var time = new Date()
         // 输出当前时间 Mon Nov 04 2019 21:19:02 GMT+0800 (中国标准时间)
        var year = time.getFullYear();
        var month = time.getMonth();
        var day = time.getDate();
        var week = time.getDay();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var week = (week == 0) ? "日":week
        var txt =  "当前时间：" + year + "年 " + month + "月 " + day + "日 " + hours + "时 " + minutes + "分 " + seconds + "秒 星期" + week
        $('#timeBox .now_time').html(txt);       
    }
    setInterval(now_time, 1000)
     // 常见时间获取方式 end

     // 秒表
    var num = 0;
    var timer = null;
    $("#miaobiao .button .start").click(function () { 
        var timer = setInterval(function(){
            num++;
            var s = num % 60
            var m = parseInt(num / 60) % 60
            var h = parseInt(num / 3600)
            s = (s < 10) ? ('0' + s) : s
            m = (m < 10) ? ('0' + m) : m
            h = (h < 10) ? ('0' + h) : h
            $('#miaobiao .screen .hours').html(h);
            $('#miaobiao .screen .minutes').html(m);
            $('#miaobiao .screen .seconds').html(s);
        }, 100);
        $('#miaobiao .button .stop').click(function () { 
            clearInterval(timer)
        });
        $('#miaobiao .button .qingling').click(function () { 
            clearInterval(timer);
            num = 0;
            $('#miaobiao .screen .hours').text('00');
            $('#miaobiao .screen .minutes').text('00');
            $('#miaobiao .screen .seconds').text('00');
        });
        // function showN(a){
        //     if(a < 10){
        //         return "0" + num;
        //     }else{
        //         return  num;
        //     }
        // }
    })     



    // 倒计时
    function daojishi(h, m, s){
        num = 3600 * h + 60 * m + s
        var stop = setInterval(function(){
            num--
            var s = num % 60
            var m = parseInt(num / 60) % 60
            var h = parseInt(num / 3600)
            s = (s < 10) ? ('0' + s) : s
            m = (m < 10) ? ('0' + m) : m
            h = (h < 10) ? ('0' + h) : h
            $('#daojishi ul .dgs_h').html(h)
            $('#daojishi ul .dgs_m').html(m)
            $('#daojishi ul .dgs_s').html(s)
            if(s == "00" && m == "00" && h == "00"){
                clearInterval(stop)
            }
        }, 1000)
    }
    daojishi(1,1,0)
})

