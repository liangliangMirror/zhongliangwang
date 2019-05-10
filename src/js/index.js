$(function () {
    $('.site_like').on('click', function () {
        $(this).children().eq(0).toggleClass('site_like_span');
        $('.site_cont').toggleClass('display_block');
        $('#zhezhao').toggleClass('zhezhao');
    })
    $('.hot-city span').hover(function () {
        $(this).addClass('bg_green');
    }, function () {
        $(this).removeClass('bg_green');
    })
    $('.hot-city_one').on('click', 'span', function () {
        var $html = $(this).html();
        $('.site_like_span').html($html + '<i class="arrow_down png"></i>').removeClass('site_like_span');
        $('.city').text($html);
        $('.site_cont').removeClass('display_block');
        $('#zhezhao').removeClass('zhezhao');
    })
    $('.city_one').on('click', 'span', function () {
        var $html = $(this).html();
        $('.province').removeClass('cur').children('em').html($html).parent().next().toggleClass('site-input-city').addClass('cur');
        $(this).parents('.city_one').toggleClass('abridge-subcity').next().toggleClass('abridge-subcity')
    })
    $('.city_two').on('click', 'span', function () {
        var $html = $(this).html();
        $('.provincetwo').children('em').html($html);
        $('.site_like_span').html($html + '<i class="arrow_down png"></i>').removeClass('site_like_span');
        $('.city').text($html);
        $('.site_cont').removeClass('display_block');
        $('#zhezhao').removeClass('zhezhao');
    })
    $('.province').on('click', function () {
        $(this).addClass('cur').next().addClass('site-input-city').children('em').html('请选择城市');
        $('.city_one ').removeClass('abridge-subcity').next().addClass('abridge-subcity')
    })
    /*  ---------------------------------------------城市选择 */
    if (getCookie("uid")) {
        var $html = '';
        $html = `<li class="welcome">${getCookie("uid")}，欢迎回来</li>
                    <li class="t_item"><a href="indexaaa.html" class="removeCk">退出</a></li>`;
        $('#top_login_span').html($html);
        var $html2 = '';
        $html2 = ` <p class="login">
                                <span>${getCookie("uid")}</span>
                                <a href="###">账号首页</a>
                            </p>
                            <ul class="item">
                                <li>待付款订单</li>
                                <li>我的消息</li>
                                <li>待签收订单</li>
                                <li>我的订单</li>
                                <li>支付卡账户</li>
                                <li>我的积分</li>
                                <li>优惠券/团购卡</li>
                                <li>我的收藏</li>
                                <li>电子礼品卡</li>
                            </ul>`;
        $('.myaccount_cont').eq(0).html($html2);
    } else {
        var $html = '';
        $html = `<li class="welcome">hi，欢迎来我买网</li>
                    <li class="t_item"><a href="./html/enter.html">登录</a></li>
                    <li class="t_item"><a href="./html/register.html">注册</a></li>`;
        $('#top_login_span').html($html);
        var $html2 = '';
        $html2 = ` <p class="login">
                                <span>您还没有登录！</span>
                                <a href="./html/enter.html">登录</a>
                            </p>
                            <ul class="item">
                                <li>待付款订单</li>
                                <li>我的消息</li>
                                <li>待签收订单</li>
                                <li>我的订单</li>
                                <li>支付卡账户</li>
                                <li>我的积分</li>
                                <li>优惠券/团购卡</li>
                                <li>我的收藏</li>
                                <li>电子礼品卡</li>
                            </ul>`;
        $('.myaccount_cont').eq(0).html($html2);
    }
    $('.t_item').on('click', 'a', function () {
        if ($(this).hasClass('removeCk')) {
            removeCookie("uid");
        }
    })
    $('.mycount').hover(function () {
        $(this).children('.myaccount_cont').toggleClass('display_block');
        $(this).children().children('span').toggleClass('cur');
    }, function () {
        $(this).children('.myaccount_cont').toggleClass('display_block');
        $(this).children().children('span').toggleClass('cur');
    })
    $('.myaccount_cont li').hover(function () {
        $(this).toggleClass('bg_ccc');
    }, function () {
        $(this).toggleClass('bg_ccc');
    })
    /*-----------------------------------nav */
    $('.wm-toolbar-tab li').hover(function () {
        $(this).children('i').css('background', '#3da700').prev().show();
    }, function () {
        $(this).children('i').css('background', '').prev().hide();
    })
    /*           ----------------- */
    $('.huaban').on('click', function () {
        $('html ,body').animate({ scrollTop: 0 }, 300);
        //回到顶部
    })
    /*   ------------------------------ 侧边栏*/

    /*----------------渲染一级菜单 */
    $(function () {
        var $cont_nav = '';
        var $arr = ['樱桃', '奇异果', '橙子', '苹果', '哈密瓜', '油桃', '梨子', '番薯', '石榴', '草莓', '椰子'];
        for (var $i = 0; $i < 11; $i++) {
            var $html = '';
            for (var $j = 0; $j < 9; $j++) {
                $html += ` 
             <h4>精品${$arr[$i]}</h4>
                                        <ul class="c_kinds_ul">
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                            <li><a href="./html/list.html">${$arr[$i]}</a></li>
                                        </ul>`;
            }
            $cont_nav += `<li class="kinds">
                            <h3 class="title"><b></b><a href="./html/list.html">${$arr[$i]}水产</a> <a href="./html/list.html">水果${$arr[$i]}</a></h3>
                            <div class="sub_kinds">
                                <div class="kinds-box">
                                    <div class="c_kinds clearFix">
                                        ${$html}
                                    </div>
                                </div>
                            </div>
                        </li>
`;
            $('.cont').html($cont_nav);
        }
        $('.kinds').hover(function () {
            $(this).toggleClass('bg_fff').children(1).toggleClass('displayblock');
        }, function () {
            $(this).toggleClass('bg_fff').children(1).toggleClass('displayblock');
        })

        $('a').hover(function () {
            $(this).toggleClass('fncolor_green');
        }, function () {
            $(this).toggleClass('fncolor_green');
        })
    })

    // // --------------------------------二级菜单

    // a标签经过时字体变绿


    /*-------------------------------nav处购物车 */
    $('.min_cart').hover(function () {
        $(this).children().eq(1).toggleClass('displayblock');
        $(this).children().eq(0).toggleClass('cur2');
        $(this).find('.cart_ico').toggleClass('cart_ico2');
    }, function () {
        $(this).children().eq(1).toggleClass('displayblock');
        $(this).children().eq(0).toggleClass('cur2');
        $(this).find('.cart_ico').toggleClass('cart_ico2');
    })
    /* -----------------------------------------cont_w */
    $('.r_title').on('mouseenter', 'li', function () {
        $(this).addClass('r_cur').siblings().removeClass('r_cur');
        var $val = $(this).index();
        $(this).parent().next().children().eq($val).addClass('r_list').siblings().removeClass('r_list');
    })
    /*---------------------------------吸顶菜单 */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 700) {
            $('.xd').stop().animate({ 'height': 80, 'padding-bottom': 12 }, 100);
        } else {
            $('.xd').stop().animate({ 'height': 0, 'padding-bottom': 0 }, 30);
        }
    })
    /*---------------------------------吸顶菜单 */
})