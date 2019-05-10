$(function () {
    $('.btn_dengru').on('click', function () {
        var $val = $('.form_div').eq(0).find('.cont_input').val();
        var $val1 = $('.form_div').eq(1).find('.cont_input').val();
        if ($val) {
            if ($val1) {
                $.ajax({
                    type: 'post',
                    url: '../api/enter.php',
                    data: { 'uids': $val, 'phone': $val, 'pas': $val1 },
                    success: function (str) {
                        if (str == '1') {
                            $.ajax({
                                type: 'get',
                                url: '../api/enter_uid.php',
                                data: { 'name': $val },
                                dataType: 'json',
                                success: function (str) {
                                    console.log(str[0].uid);
                                    setCookie('uid', str[0].uid, 7);
                                    $(location).attr('href', '../indexaaa.html');
                                }
                            })

                        } else {
                            $('.form_div_none').html('用户名或密码不正确');
                            $('.form_div_none').show();
                        }
                    }
                })
            } else {
                $('.form_div_none').eq(1).html('内容不能为空');
                $('.form_div_none').eq(1).show();
            }

        } else {
            $('.form_div_none').eq(0).html('内容不能为空');
            $('.form_div_none').eq(0).show();
        }
    })
    $('.input_pas').on('focus', function () {
        $('.form_div_none').eq(1).hide();
    })
    $('.input_uid').on('focus', function () {
        $('.form_div_none').eq(0).hide();
    })
    $('.form_div').on('keyup', '.cont_input', function () {
        if ($(this).val()) {
            $(this).next().show();
        } else {
            $(this).next().hide();
        }
    })
    $('.user_input').on('click', function () {
        $(this).prev().val('');
    })
    $('.btn_zhuce').on('click', function () {
        $(location).attr('href', '../html/register.html');
    })
})