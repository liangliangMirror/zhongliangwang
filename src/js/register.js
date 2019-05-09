$(function () {
    var $arr = [];
    var $obj = {};
    $('.cont_phone').on('blur', function () {
        //验证邮箱和电话
        var $val = $(this).val();
        if (validator.emails($val) || validator.phones($val)) {
            $('.cont_phone_none').hide();
            $arr[$(this).parent().index()] = 1;
        } else {
            $('.cont_phone_none').show();
            $('.cont_phone_none').html(' 请您输入正确的邮箱或手机');
            $arr[$(this).parent().index()] = 0;
        }

    });
    $('.cont_userName').on('blur', function () {
        //验证用户名
        var $val = $(this).val();
        if (validator.accounts($val)) {

            var $p = new Promise(function (res) {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost:8080/erjieduanxiangmu/src/api/register_uid.php',
                    data: { 'uid': $val },
                    success: function (str) {
                        res(str);
                    }
                })
            })
            $p.then(function (str) {
                if (str == '0') {
                    $('.cont_uid_none').html('用户名已经存在，请换另外一个');
                    $('.cont_uid_none').show();
                    $arr[$(this).parent().index()] = 0;
                } else {
                    $('.cont_uid_none').hide();
                    $arr[$(this).parent().index()] = 1;
                }
            })
        } else {
            $('.cont_uid_none').html('请您输入正确用户名');
            $('.cont_uid_none').show();
            $arr[$(this).parent().index()] = 0;
        }
    })
    $('.cont_pas').on('blur', function () {
        var $val = $(this).val();
        if (validator.passWeak($val)) {
            if (validator.passMedium($val)) {
                $('.cont_pas_none').hide();
                $arr[$(this).parent().index()] = 1;
            } else {
                $('.cont_pas_none').text('密码必须需包含1个字母和1个数字的组合');
                $('.cont_pas_none').show();
                $arr[$(this).parent().index()] = 0;
            }
        } else {
            $('.cont_pas_none').text('密码长度必须为8-16个字符');
            $('.cont_pas_none').show();
            $arr[$(this).parent().index()] = 0;
        }
    });
    $('.cont_pass').on('blur', function () {
        var $val = $(this).val();
        var $val2 = $(this).parents('.main_form').find('.cont_pas').val();
        if ($val == $val2) {
            $('.cont_pass_none').hide();
            $arr[$(this).parent().index()] = 1;
        } else {
            $('.cont_pass_none').html('两次密码不一致');
            $('.cont_pass_none').show();
            $arr[$(this).parent().index()] = 0;
        }
    })
    $('.cont_checked').on('click', function () {
        if ($(this).is(':checked')) {
            $('.cont_btn2').addClass('btn_green');
            $('.accepttip').hide();
        } else {
            $('.cont_btn2').removeClass('btn_green');
            $('.accepttip').show();
        }
    });
    var $phone = '';
    var $code = '';
    $('.cont_btn').on('click', function () {
        $code = verify2();
        $phone = $('.cont_phone').val();
        if (validator.phones($phone)) {
            verifys($code, $phone);
            $('.verify').show();
            $('.zhezhao').show();
        } else {
            $('.cont_phone').next().html('手机格式不对');
            $('.cont_phone').next().show();
        }

    })
    function verifys(codes, phones) {
        console.log(codes, phones)
        $('#mpanel3').codeVerify({
            type: 2,
            figure: 100,	//位数，仅在type=2时生效
            arith: 0,	//算法，支持加减乘，不填为随机，仅在type=2时生效
            width: '200px',
            height: '50px',
            fontSize: '30px',
            btnId: 'check-btn2',
            ready: function () {
            },
            success: function () {
                console.log(codes, phones)
                $('.verify').hide();
                $('.zhezhao').hide();
                $.ajax({
                    type: 'get',
                    url: '../api/duanxin.php',
                    data: {
                        'phone': phones,
                        'code': codes
                    },
                    success: function (str) {
                        console.log(str)
                    }
                })
            },
            error: function () {
                $('.verify').hide();
                $('.alert-popup').show();
            }
        });
    }
    $('.cont_btn2').on('click', function () {
        var $isok = 0;
        $.each($arr, function (i, item) {
            if (!item) {
                $isok = i;
                $('.main_input').eq(i).find('div').html('内容错误');
                $('.main_input').eq(i).find('div').show();
                return;
            } else {
                $isok = 'ok'
            }
        })
        if ($code == $('.cont_phonePas').val()) {
            if ($(this).hasClass('btn_green')) {
                if ($isok == 'ok') {
                    $.each($('.main_input'), function (i, item) {
                        if (i < $arr.length) {
                            $obj[i] = $('.main_input').eq(i).find('input').val();
                        }
                    });
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:8080/erjieduanxiangmu/src/api/register_btn2.php',
                        data: { 'phone': $obj[0], 'uids': $obj[1], 'pas': $obj[2] },
                        success: function (str) {
                            if (str) {
                                $(location).attr('href', '../html/enter.html');
                            }
                        }
                    })
                }
            }
        }

    });
    $('.alert-x').on('click', function () {
        $('.zhezhao').hide();
        $('.alert-popup').hide();
    })
    $('.alert-a').on('click', function () {
        $('.alert-popup').hide();
        $('.verify').show();
    })
})
// Register.prototype.shades = function (_this) {
//     //插入遮罩
//     _this.shade = document.createElement('div');
//     _this.shade.className = 'shade';
//     _this.shade.innerHTML = `<div id="popUp">
//                              <span>X</span>
//                              <span>恭喜您注册成功在5秒后将跳转登入页面</span>
//                              </div>`;
//     document.body.appendChild(_this.shade);
//     _this.time = _this.shade.children[0].children[1];
//     _this.timers(_this);
//     //倒计时跳转登入页
//     _this.click();
//     //点击跳转登入页
// }

// Register.prototype.timers = function (_this) {
//     //计时器跳转
//     var num = 4;
//     clearInterval(timer);
//     var timer = setInterval(function () {
//         _this.time.innerHTML = `恭喜您注册成功在` + num + `秒后将跳转登入页面`;
//         num--;
//         if (num < 0) {
//             clearInterval(timer);
//             document.body.removeChild(_this.shade);
//             location.href = '../lwh4.26zuoye/dengruye.html';
//         }
//     }, 1000)
// }

// Register.prototype.click = function () {
//     //点击时跳转
//     this.popUpchild = this.shade.children[0].children[0];
//     this.popUpchild.onclick = function () {
//         document.body.removeChild(this.shade);
//         location.href = '../lwh4.26zuoye/dengruye.html';
//     }.bind(this);
// }