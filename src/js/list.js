$(function () {
    $('.all_kinds').hover(function () {
        $(this).find('.cont').toggleClass('displayblock');
    }, function () {
        $(this).find('.cont').toggleClass('displayblock');
    })
    $('.one-level').hover(function () {
        $(this).find('.other-cont').toggleClass('displayblock');
        $(this).find('i').toggleClass('i2');
    }, function () {
        $(this).find('.other-cont').toggleClass('displayblock');
        $(this).find('i').toggleClass('i2');
    })
    //列表渲染
    var $num = 1;
    var $type = 'gid';
    var $t1 = null;
    var $t2 = null;
    //翻页插件
    function int(num) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/list_xuanran.php',
            data: {
                'num': num,
                'type': $type,
            },
            dataType: 'json',
            success: function (str) {
                $t1 = str.page;
                $t2 = str.total;
                var $html = str.data.map(function (item) {
                    return ` <li  data-gid="${item.gid}" class="">
                    <div class="tab-content" data-gzpid="${item.gid}">
                        <div class="pImg"  data-product-id="${item.gid}">
                            <a href="###"">
                                <img class="lazyload"
                                    src="${item.img1}"
                                    alt="">
                                <div class="label_icon">
                                    <span class="new_icon_bg png">抢购</span>
                                </div>
                            </a>
                        </div>
                        <div class="price" ><b>￥</b>${item.price}</div>
                        <div class="season_icon2">当季时令</div>
                        <div class="clear"></div>
                        <div class="list-title">
                            <p title="">
                                <a >
                                    ${item.title}
                                </a>
                            </p>
                        </div>
                        <div class="list-icon">
                            <span class="zy">自营</span>
                        </div>
                        <div class="rated">

                            <span class="evaluated">已评价<a target="_blank"
                                    href="###"><em>${item.evaluate}</em></a></span>
                            <span class="collection" name="favorite" ><b
                                    class="png"></b>收藏</span> <span class="addCart" id="items_buy_649707" style=""
                                ><b class="png"></b>加入购物车</span> <span class="addCart"
                               style="display: none;"
                                ><b class="png"></b>立即结算</span> <span
                                class="addCart"  style="display: none;"
                               name="notice"><b class="png"></b>到货通知</span>
                        </div>
                    </div>
                </li>`
                }).join('');
                $('.list_cont').html($html);
                fanye(num);
                $('.list_cont li').hover(function () {
                    $(this).toggleClass('on');
                }, function () {
                    $(this).toggleClass('on');
                })
                $('.list_cont li').on('click', function () {
                    var $gid = $(this).attr('data-gid');
                    window.location.href = '../html/details.html?' + $gid;
                })
            }
        })
    }
    int($num);
    //翻页插件
    function fanye(one) {
        $('.list_btn').paging({
            pageNo: one,
            totalPage: Math.ceil($t2 / 10),
            totalSize: $t2,
            callback: function (num) {
                int(num);
            }
        })
        $('.result-sum .ti').html($t2);
    }


    $('.sort-1 a').on('click', function () {
        if ($(this).hasClass('jiage')) {
            $type = 'price';
            int(1);
        } else if ($(this).is('.pinglun')) {
            $type = 'evaluate';
            int(1);
        } else if ($(this).hasClass('zonghe')) {
            $type = 'gid';
            int(1);
        }

    })
    // 生成随机评价条数
    // $('.btn-sub').on('click', function () {
    //     console.log(123)
    //     var $id = 15;
    //     for (var $i = 0; $i < $t2; $i++) {

    //         $id++;
    //         var $rand = parseInt(Math.random() * 3000);
    //         var $jiage = parseInt(Math.random() * 1000);
    //         var $jiage2 = parseInt(Math.random() * 100);
    //         var $jiage3 = $jiage + '.' + $jiage2;
    //         $.ajax({
    //             type: 'get',
    //             url: 'http://localhost:8080/erjieduanxiangmu/src/api/suijipingjia.php',
    //             data: { 'num': $rand, 'gid': $id, 'jiage': $jiage3 },
    //             success: function (str) {
    //                 console.log($(this).data);
    //             }
    //         })

    //         console.log($id)
    //     }
    // })


})