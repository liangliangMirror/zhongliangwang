function verify() //核实；查证
{
    //生成四个随机数  验证码
    var kong = '';
    for (i = 0; i < 4; i++) {
        var shuZu = '0123456789asdfghjklzxcvbnmqwertyuiopASDFGHJKLQWERTYUIOPZXCVBNM';
        var suiJi = parseInt(Math.random() * shuZu.length);
        //读取到的是他的下标
        kong += shuZu[suiJi];
    }
    return kong;
}
function verify2() //核实；查证
{
    //生成四个随机数  验证码
    var kong = '';
    for (i = 0; i < 4; i++) {
        var shuZu = '0123456789';
        var suiJi = parseInt(Math.random() * shuZu.length);
        //读取到的是他的下标
        kong += shuZu[suiJi];
    }
    return kong;
}



function sJyanSe() {
    //随机颜色
    var kong = '#';
    for (i = 0; i < 6; i++) {
        var bgcolor = '0123456789abcdefABCDEF';
        var suiji = parseInt(Math.random() * bgcolor.length);
        kong += bgcolor[suiji];
    }
    return kong;
}


function getid(id) {
    //读ID啊
    return document.getElementById(id);
}

//补零函数
function toDb(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}



//毫秒数->xx天xx时xx分xx秒
function msec(time) {
    var times = parseInt(time / 1000);//从毫秒变成秒；
    var sec = times % 60; //秒
    var min = parseInt(times / 60) % 60;//分
    var hour = parseInt(times / 60 / 60) % 24; //小时
    var day = parseInt(times / 60 / 60 / 24);//天
    return {
        secs: sec,
        mins: min,
        hours: hour,
        days: day
    }
}



//参数转对象
function strToObj(str) {
    var obj = {}; //先声明一个对象
    var arr = str.split('&'); //先以&分割前后
    arr.forEach(function (item) {
        var innerarr = item.split('=');//把期中中的一个值以 ‘=’ 分割成两个
        obj[innerarr[0]] = innerarr[1]; //用第一个做键名，以第二个做键值存起来
    });
    return obj;
}


//对象转参数
function objToStr(obj) {
    var str = '';
    for (var key in obj) {
        html += key + '=' + obj[key] + '&';
    }
    return html.slice(0, -1);
}



//表单验证
var validator = {
    accounts: function (parameter) {
        //账号验证
        var str = /^[a-zA-Z][\w\-]{3,19}$/;
        return str.test(parameter);

    },
    names: function (parameter) {
        //昵称验证
        var str = /^[\u2E80-\u9FFF]{2,69}$/;
        return str.test(parameter);

    },
    emails: function (parameter) {
        var str = /^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/;
        return str.test(parameter);
        //邮箱验证

    },
    identitys: function (parameter) {
        var str = /^(\d{17}|\d{14})[\dxX]$/;
        return str.test(parameter);
        //身份证验证

    },
    phones: function (parameter) {
        var str = /^1[3-9]\d{9}$/;
        return str.test(parameter)
        //手机号验证
    },
    birthdays: function (parameter) {
        var str = /^\d{4}([\/\-]?)\d{1,2}\1\d{1,2}$/;
        return str.test(parameter);
        /* \1 的意思 后向引用，表示表达式中，从左往右数，第一个左括号对应的括号内的内容
            以此类推，\2表示第二个，\0表示整个表达式
        */
        //生日验证
    },
    /*
        密码
            长度6-20
            不能包含空格
     */
    // passwords: function (parameter) {
    //     var str = /^\S{6,20}$/;
    //     return str.test(parameter)
    // },


    //密码强度
    //弱
    passWeak: function (parameter) {
        var str = /^\S{8,}$/;
        return str.test(parameter);
    },
    //中等
    passMedium: function (parameter) {
        var str = /^.*(?=.{7,16})(?=.*\d{1,})(?=.*[A-Za-z]{1,})|(?=.*[!@#$%^&*?\(\)]{1,}).*$/;
        return str.test(parameter);
    },

    passStrong: function (parameter) {
        var str = /^.*(?=.{8,16})(?=.*\d{1,})(?=.*[A-Za-z]{1,})(?=.*[!@#$%^&*?\(\)]{1,}).*$/;
        return str.test(parameter);
    }
}



//ajax
function ajax(obj) {
    function comparison(obj1, obj2) {
        for (var key in obj1) {
            obj2[key] = obj1[key];
        }
    }
    var opt = {
        other: true,
        data: ''
    }
    comparison(obj, opt);
    var hxr = new XMLHttpRequest();
    if (opt.type == 'get') {
        opt.url += '?' + opt.data;
        hxr.open(opt.type, opt.url, opt.other);
        hxr.send(null);
    } else if (opt.type == 'post') {
        hxr.open(opt.type, opt.url, opt.other);
        hxr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        hxr.send(opt.data);
    }
    hxr.onreadystatechange = function () {
        if (hxr.readyState == 4) {
            if (hxr.status == 200) {
                if (opt.fn) {
                    opt.fn(hxr.responseText);
                }
            } else {
                alert('出错了，状态码是：' + hxr.status)
            }
        }
    }

}