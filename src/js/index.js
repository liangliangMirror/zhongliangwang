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
                    <li class="t_item"><a href="http://localhost:8080/erjieduanxiangmu/src/html/enter.html">登录</a></li>
                    <li class="t_item"><a href="http://localhost:8080/erjieduanxiangmu/src/html/register.html">注册</a></li>`;
        $('#top_login_span').html($html);
        var $html2 = '';
        $html2 = ` <p class="login">
                                <span>您还没有登录！</span>
                                <a href="http://localhost:8080/erjieduanxiangmu/src/html/enter.html">登录</a>
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
        var $html3 = '';
        var $html4 = '';
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
                        </li>`;
            $('.cont').html($cont_nav);
            if ($i < 10) {
                $html3 += `
                <li>
                <h3><a href="./html/list.html">生鲜蔬果</a></h3>
                    <div>
                       <a href="./html/list.html"> <img src="./img/foot_nav${$i + 1}.png" alt=""></a>
                    </div>
                    <ul class="clearFix">
                        <li><a href="./html/list.html">进口水果</a></li>
                        <li><a href="./html/list.html">低温乳品/饮料</a></li>
                        <li><a href="./html/list.html">国产水果</a></li>
                        <li><a href="./html/list.html">糕点</a></li>
                        <li><a href="./html/list.html">海鲜水产</a></li>
                        <li><a href="./html/list.html">蔬菜</a></li>
                        <li><a href="./html/list.html">主食</a></li>
                        <li><a href="./html/list.html">生鲜禽蛋</a></li>
                        <li><a href="./html/list.html">熟食/佐餐</a></li>
                        <li><a href="./html/list.html">冰淇淋</a></li>
                    </ul>
                    </li>`;
                $html4 += `<a href="./html/list.html">
                        <img src="./img/ad${$i + 1}.png" alt="">
                    </a>`
            }

        }
        $('.nav_cont').html($html3);
        $('.sft_right').html($html4);
        $('.sft_cont a').hover(function () {
            $(this).children().css('opacity', .8);
        }, function () {
            $(this).children().css('opacity', 1);
        })
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
    /** -------------------------头部动画 */
    $('.add_one').children().stop().animate({ 'height': 0 }, 1500, function () {
        $('.add_two').children().stop().animate({ 'height': 100 }, 300);
    });

    /** -------------------------头部动画 */
    /*轮播图按钮 */
    $('.swiper-container').hover(function () {
        $(this).find('.jiantou').toggleClass('displayblock');
    }, function () {
        $(this).find('.jiantou').toggleClass('displayblock');
    })
    /*轮播图按钮 */
    /**------------------每日推送左边图 */
    $('.verticaImg').hover(function () {
        $(this).children().eq(0).toggleClass('displayblock').stop().animate({ 'left': '242px' }, 500);
    }, function () {
        $(this).children().eq(0).toggleClass('displayblock').css({ 'left': -242 })
    })
    /**------------------每日推送左边图 */
    /**        --------------推荐下面的轮播图 */
    $(function () {
        var $p = new Promise(function (res) {
            $.ajax({
                type: 'get',
                url: 'http://localhost:8080/erjieduanxiangmu/src/api/verticabox.php',
                dataType: 'json',
                success: function (str) {
                    res(str);
                }
            })
        })
        $p.then(function (res) {
            var $html = res.map(function (item) {
                return `<li>
                                    <a href="" class="imgChange">
                                        <img src="${item.img1}" alt="">
                                    </a>
                                    <div class="inforBox">
                                        <p class="txtBt"><a href="">${item.title}</a></p>
                                        <p class="txtInfor"><a href="">${item.variety}</a></p>
                                        <p class="buy-btn">
                                            <span>
                                                ￥<span>${item.price}</span>
                                            </span>
                                            <a href="">
                                                去看看
                                            </a>
                                        </p>
                                    </div>
                                </li>`
            }).join('');
            $('.verticabox .qkk').html($html);
            $('.verticabox img').hover(function () {
                $(this).toggleClass('img2');
            }, function () {
                $(this).toggleClass('img2');
            })
        })
        $('.verticabox').hover(function () {
            $(this).find('.btn').toggleClass('displayblock');
        }, function () {
            $(this).find('.btn').toggleClass('displayblock');
        })
        $('.verticabox').on('click', '.btn', function () {
            var $iw = $(this).parent().children('ul').offset().left;
            var $ow = $(this).parent().children('ul').children('li').eq(1).width();
            if ($iw >= 0) {
                $(this).parent().children('ul').animate({ 'left': -(4 * $ow + 20) }, 500);
            } else {
                $(this).parent().children('ul').animate({ 'left': 0 }, 500);
            }
        })
    })
    $('.w2420 img').hover(function () {
        $(this).stop().animate({ 'left': -10 }, 300);
    }, function () {
        $(this).stop().animate({ 'left': 0 }, 300);
    })

    /**        --------------推荐下面的轮播图 */

    /** -------------------渲染的详情 */
    $('.floor-r .tit li').on('mouseover', function () {
        var $index = $(this).index();
        $(this).addClass('tit_cur').siblings().removeClass('tit_cur');
        $(this).parents('.floor-r').children('div').eq($index).addClass('displayblock').siblings().removeClass('displayblock');

    })
    $(function () {
        $.ajax({
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/index_wrap.php',
            dataType: 'json',
            success: function (str) {
                var $str1 = str.splice(0, 6);
                var $str2 = str.splice(0, 8);
                var $xuanran = function (item) {
                    return `
                    <li data-gid="${item.gid}">
                            <a href="###">
                                <img src="${item.img1}"
                                    alt="">
                            </a>
                            <p class="name">
                                ${item.title}
                            </p>
                            <p class="price">
                                <span>￥</span>
                                <span class="bold">${item.price}</span>
                            </p>
                        </li>
                    `;
                }
                var $html1 = $str1.map(function (item) {
                    return $xuanran(item);
                }).join('');
                var $html2 = $str2.map(function (item) {
                    return $xuanran(item);
                }).join('');
                for (var $i = 0; $i < $('.floor-r .transparency_wrap').size(); $i++) {
                    if ($i % 2 == 0) {
                        $('.floor-r .transparency_wrap').eq($i).html($html1).children().eq(0).addClass('first');
                    } else {
                        $('.floor-r .transparency_wrap').eq($i).html($html2);
                    }
                }
                $('.transparency_wrap img').hover(function () {
                    $(this).stop().animate({ 'left': 10 }, 300)
                }, function () {
                    $(this).stop().animate({ 'left': 0 }, 300)
                })
                $('.transparency_wrap').hover(function () {
                    $(this).find('.name').css('color', '#8cb91e');
                }, function () {
                    $(this).find('.name').css('color', '#606060');
                })
            }
        })
    })
    /** -------------------渲染的详情 */
})