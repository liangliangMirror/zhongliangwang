$(function () {
    var $data = decodeURI(location.search);
    var $str = $data.slice(1);
    var $p = new Promise(function (res) {
        $.ajax({
            type: 'get',
            url: '../api/datails_xuanran.php',
            data: { 'gid': $str },
            dataType: 'json',
            success: function (str) {
                res(str);
            }
        })
    })
    $p.then(function (str) {
        $('.crumbs .cid').html(str[0].cid);
        $('.crumbs .title').html(str[0].title);
        $('.jqzoom img').attr('src', str[0].img1);
        var $html = `
         <ul class="spec-scroll_ul">
            <li><img src="${str[0].img1}" alt=""></li>
            <li><img src="${str[0].img2}" alt=""></li>
            <li><img src="${str[0].img3}" alt=""></li>
            <li><img src="${str[0].img4}" alt=""></li>
        </ul>
        `;
        $('.common_t_l .pingjia').html(str[0].evaluate);
        $('.spec-scroll').html($html);
        $('.p-title').html(str[0].title);
        $('.dl_price1').html(str[0].price);
        $('#buyBtn').attr({ 'data-gid': str[0].gid, 'title': str[0].cid });
        $('.spec-scroll img').on('mouseover', function () {
            $('.jqzoom img').attr('src', $(this).attr('src'));
        })
        jQuery(function () {

            $(".my-foto").imagezoomsl({

                zoomrange: [3, 3]
            });
        });
    })
    $('#cityChoice').on('click', function () {
        $('.ssss').css('background-position', '-62px -68px');
    })
    $('.pop_btn_r,.buy_pop_close').on('click', function () {
        $('.loadBuy .pro_pop').removeClass('displayblock');
    })
    $('.coupon-phone').on('click', function () {
        $('.erweima').toggleClass('displayblock');
    })
    $('.input_plus').on('click', function () {
        var $val = $(this).prev().val();
        $val++;
        $(this).prev().val($val);
    })
    $('.input_minus').on('click', function () {
        var $val = $(this).next().val();
        if ($val <= 1) {
            $(this).next().val(1);
            return;
        }
        $val--;
        $(this).next().val($val);
    })
    chuan();
    var $p2 = new Promise(function (res) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/liuyanban.php',
            dataType: 'json',
            success: function (str) {
                res(str);
            }
        })
    })
    $p2.then(function (str) {
        var $html = str.data.map(function (item) {
            return `<li class="clearfix">
                        <div class="head_icon fl">
                            <img src="../img/touxiang.png" alt="">
                            <i></i>
                        </div>
                        <div class="reply_r fl">
                            <dl class="clearfix">
                                <dt class="fl">${item.uid}</dt>
                                <dd class="date fr">${item.shijian}</dd>
                            </dl>
                            <p><strong>标题：</strong><span style="color:red;">热评</span>${item.biaoti}</p>
                            <p><strong class="tit">内容：</strong>
                                <a class="neirong">${item.content}</a> </p>
                            <p class="show_praise"><a class="show_pr2"  title="${item.lid}"><span><b class="laud">点赞</b>(<span>${item.dianzan}</span>)</span></a>
                            </p>
                        </div>
                    </li>`
        }).join('');
        haoping();
        quanbu()
        $('.common_content').html($html)
        dianzana();
        $('.line_one').on('click', function () {
            var $html = `
             <div>
                        <h3>评价</h3>
                        <p class="liuyan_two clearfix">
                            <label for="biaoqian">标签:</label>
                            <input type="text" id="biaoqian" placeholder="标题">
                        </p>
                        <p class="liuyan_theer clearFix">
                            <span> <label for="x1">好评</label><input type="radio" name="haoping" value="1"
                                    id="x1"></span>
                            <span> <label for="x2">中评</label><input type="radio" name="haoping" value="2"
                                    id="x2"></span>
                            <span> <label for="x3">差评</label><input type="radio" name="haoping" value="3"
                                    id="x3"></span>
                        </p>
                        <p class="liuyan_four clearFix">
                            <span>内容：</span>
                            <textarea class="ly_content"></textarea>
                        </p>
                        <p class="liuyan_five">
                            <span class="ly_btn1">确定</span>
                            <span class="ly_btn2">取消</span>
                        </p>
                        <span class="liuyan_six">X</span>
                    </div>

            `
            $('.liuyan').show().html($html);
            liuyanfn();
        })
    })
    function quanbu() {
        //筛选好评差评的
        $('.common_tab li').on('click', function () {
            $(this).addClass('select').siblings().removeClass('select');
            if ($(this).index() == 0) {
                lyxuanran();
            }
            if ($(this).index() == 1) {
                $.ajax({
                    type: 'get',
                    url: "http://localhost:8080/erjieduanxiangmu/src/api/haoping.php",
                    dataType: 'json',
                    success: function (str) {

                        var $html = str.hao2.map(function (item) {
                            return xuan(item);
                        }).join('');
                        $('.common_content').html($html)
                        haoping();
                        dianzana();
                    }
                })
            }
            if ($(this).index() == 2) {
                $.ajax({
                    type: 'get',
                    url: "http://localhost:8080/erjieduanxiangmu/src/api/haoping.php",
                    dataType: 'json',
                    success: function (str) {
                        var $html = str.zhong3.map(function (item) {
                            return xuan(item);
                        }).join('');
                        $('.common_content').html($html)
                        haoping();
                        dianzana();
                    }
                })
            }
            if ($(this).index() == 3) {
                $.ajax({
                    type: 'get',
                    url: "http://localhost:8080/erjieduanxiangmu/src/api/haoping.php",
                    dataType: 'json',
                    success: function (str) {
                        var $html = str.cha4.map(function (item) {
                            return xuan(item);
                        }).join('');
                        $('.common_content').html($html)
                        haoping();
                        dianzana()
                    }
                })
            }
            if ($(this).index() == 4) {
                $.ajax({
                    type: 'get',
                    url: "http://localhost:8080/erjieduanxiangmu/src/api/haoping.php",
                    dataType: 'json',
                    success: function (str) {
                        var $html = str.quan1.map(function (item) {
                            return xuan(item);
                        }).join('');
                        $('.common_content').html($html)
                        haoping();
                        dianzana()
                    }
                })
            }
        })
    }
    function liuyanfn() {
        //留言版功能
        $('.liuyan_six,.ly_btn2').on('click', function () {
            $(this).parents('.liuyan').hide().html();
        })
        $('.ly_btn1').on('click', function () {
            $(this).parents('.liuyan').hide().html();
            var $cookie = getCookie("uid");//uid
            var $val1 = $(this).parents('.liuyan').find('#biaoqian').val();//标题内容
            var $val2 = $(this).parents('.liuyan').find('.ly_content').val();//内容
            var $item = $('input:radio[name="haoping"]:checked').val();
            var $type = null;
            if ($item == '1') {
                $type = 'haoping'
            } else if ($item == '2') {
                $type = 'zhongping'
            } else if ($item == '3') {
                $type = 'chaping'
            }
            $.ajax({
                type: 'get',
                url: 'http://localhost:8080/erjieduanxiangmu/src/api/ly.php',
                data: { 'uid': $cookie, 'biaoti': $val1, 'content': $val2, 'type': $type },
                success: function (str) {
                    lyxuanran();
                }
            })
        })
    }
    function haoping() {
        //好评条数
        $.ajax({
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/haoping.php',
            dataType: 'json',
            success: function (str) {
                $('.common_tab .r1').html(str.quan);
                $('.common_tab .r2').html(str.hao);
                $('.common_tab .r3').html(str.zhong);
                $('.common_tab .r4').html(str.cha);
            }
        })
    }
    function lyxuanran() {
        //渲染
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/liuyanban.php',
            dataType: 'json',
            success: function (str) {
                var $html = str.data.map(function (item) {
                    return xuan(item);
                }).join('');
                $('.common_content').html($html)
                haoping();
                dianzana();
            }
        })
    }
    function xuan(item) {//渲染
        return `<li class="clearfix">
                        <div class="head_icon fl">
                            <img src="../img/touxiang.png" alt="">
                            <i></i>
                        </div>
                        <div class="reply_r fl">
                            <dl class="clearfix">
                                <dt class="fl">${item.uid}</dt>
                                <dd class="date fr">${item.shijian}</dd>
                            </dl>
                            <p><strong>标题：</strong><span style="color:red;">热评</span>${item.biaoti}</p>
                            <p><strong class="tit">内容：</strong>
                                <a class="neirong">${item.content}</a> </p>
                            <p class="show_praise"><a class="show_pr2"  title="${item.uid}"><span><b class="laud">点赞</b>(<span>${item.dianzan}</span>)</span></a>
                            </p>
                        </div>
                    </li>`
    }
    function dianzana() {
        //点赞
        $('.show_pr2').on('click', function () {
            var $val = $(this).children().children().eq(1).html();
            $val++;
            var $uid = $(this).attr('title');
            $.ajax({
                type: 'get',
                data: { 'num': $val, 'uid': $uid },
                url: 'http://localhost:8080/erjieduanxiangmu/src/api/dianzan.php',
            })
            $(this).children().children().eq(1).html($val);
        })
    }
    function chuan() {
        //NOTE 传数据到购物车表；
        $('.buyBtn').on('click', function () {
            var $uid = getCookie('uid');
            $('.loadBuy .pro_pop').addClass('displayblock');
            var $gid = $(this).attr('data-gid');
            var $num2 = $('#amount').val();
            $.ajax({
                type: 'get',
                url: 'http://localhost:8080/erjieduanxiangmu/src/api/cart.php',
                data: { 'uid': $uid, 'gid': $gid, 'num2': $num2, 'isok2': true },
                dataType: 'json',
                success: function (str) {
                    $('.buy-font1').html(str.num1[0]['SUM(num)']);
                    $('.hejijiage').html(str.num2[0]['SUM(num*price)']);
                }
            })
        })
    }
})