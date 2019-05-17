$(function () {
    var $uid = getCookie("uid");
    var $num = 0;
    var $zongjia = 0;
    var $zongzhong = 0;
    if ($uid) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/cart.php',
            data: { 'uid': $uid },
            dataType: 'json',
            success: function (str) {
                //拿到一共有多少个店
                var $html = "";
                $.each(str.data1, function (index, item) {
                    $html += `<div class="ordercont_content_cw clearFix" title="${item.cid}">
                    <div class="ordercont-title-cw  clearFix">
                        <div class="title fl">
                            <input type="checkbox" name="dianpu" id="" class="fl" checked="checked">
                                <label for="">${item.cid}</label>
                        </div>

                    </div>
                        <div class="ordercont-cw-con">
                        `;
                    $.each(str.data2, function (index1, item1) {
                        if (item.cid == item1.cid) {
                            $zongjia += (item1.num * item1.price);
                            $zongzhong += (item1.num * item1.wuight)
                            $num += item1.num * 1;
                            $html += `<div class="content_type_zp type1 clearFix" data-gid="${item1.gid}">
                        <div class="ct_zp fl">
                            <div class="clearFix">
                                <input type="checkbox" name="check" checked="callback" class="fl">
                                <a href="###" class="img_a">
                                    <img src="${item1.img}"
                                        alt="">
                                </a>
                                <div class="cent fl">
                                    <a href="###">
                                        ${item1.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span class="cont2 fl">
                            ￥<span class="cont2_jiage">${item1.price}</span>
                        </span>
                        <div class="cont3 ">
                            <span class="fl prev">-</span>
                            <input type="text" name="text" value="${item1.num}" class="fl">
                            <span class="fl next">+</span>
                        </div>
                        <span class="cont4 fl">
                            ${(item1.wuight * item1.num).toFixed(2)}
                        </span>
                        <div class="cont5 fl">
                            ￥ <span>${ (item1.price * item1.num).toFixed(2)}</span>
                        </div>
                        <div class="cont6 fl am-icon-close">
                            删除
                        </div>
                    </div>`;
                        }
                    })
                    $html += `</div>
                </div>`;
                });
                $('.order_nav em,#j-totaldeliveryrule1,.oar-money-total span').html($zongjia.toFixed(2));
                $('.oar_weight span').html($zongzhong.toFixed(2));
                $('.loadshowcart1').html($html);
                $('.num em,.jian').html($num.toFixed(2));
                $('.ordercont_edit .one a').on('click', function () {
                    if ($('input[name="quan"]').prop('checked')) {
                        var isok = true;
                        $.ajax({
                            type: 'get',
                            url: 'http://localhost:8080/erjieduanxiangmu/src/api/cart.php',
                            data: { 'isok': isok, 'uid': $uid },
                            success: function (str) {
                                $('.loadshowcart1').html('');
                            }
                        })
                    }
                })
                $('input[name="text"]').on('keyup', function () {
                    var reg = /^[1-9]\d/g;
                    if (reg.test($(this).val())) {
                    } else {
                        $(this).val(1);
                    }
                    xiaoji($(this));
                    jkq();
                })
                itin();
                quanxuan();
                jkq();
                $('input[type="checkbox"]').on('click', function () {
                    jkq();
                    console.log()
                })
                $(function () {
                    $('#doc-modal-list').find('.am-icon-close').add('#doc-confirm-toggle').
                        on('click', function () {
                            $('#my-confirm').modal({
                                relatedTarget: this,
                                onConfirm: function (options) {
                                    var $link = $(this.relatedTarget).parents('.content_type_zp');
                                    var $link2 = $(this.relatedTarget).parents('.ordercont_content_cw');
                                    if ($link2.find('.cont6').size() == 1) {
                                        $link2.remove();
                                    }
                                    $link.remove();
                                    var isok = true;
                                    var gid = $link.attr('data-gid')
                                    $.ajax({
                                        type: 'get',
                                        url: 'http://localhost:8080/erjieduanxiangmu/src/api/cart.php',
                                        data: { 'isok3': isok, 'uid': $uid, 'gid': gid },
                                    })
                                    xiaoji($link);
                                    jkq();
                                },
                                // closeOnConfirm: false,
                                onCancel: function () {

                                }
                            });
                        });
                });
            }
        })
    } else {
        $('.loadshowcart1').html('');
    }

    function itin() {
        //点击
        $('.cont3 span').on('click', function () {
            var gid = $(this).parents('.content_type_zp').attr('data-gid');
            if ($(this).hasClass('prev')) {
                var val = $(this).next().val();
                val--;
                if (val < 1) {
                    val = 1;
                }
                $(this).next().val(val);
                charu(val, gid, $uid);
            } else {
                var val = $(this).prev().val();
                val++;
                $(this).prev().val(val);
                charu(val, gid, $uid);
            }
            console.log(val);
            xiaoji($(this));
            jkq();
        })
        $('.cont6').on('click', function () {

        })
    }
    function xiaoji(item) {
        var num = item.parents('.content_type_zp').find('.cont3').children('input').val();
        var jiage = item.parents('.content_type_zp').find('.cont2_jiage').html();
        var xiaoji = (num * jiage).toFixed(2);
        item.parents('.content_type_zp').find('.cont5').children().html(xiaoji);
    }
    function charu(num, gid, uid) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/cart.php',
            data: { 'num': num, 'gid': gid, 'uid': uid },
        })
    }
    function quanxuan() {
        //NOTE 全选按钮
        $('input[name="quan"]').on('click', function () {
            //全选控制所有
            $('input[type="checkbox"]').prop('checked', $(this).prop('checked'));
        })
        $('input[name="dianpu"]').on('click', function () {
            //店铺控制商品
            $(this).parents('.ordercont_content_cw').find('input[type="checkbox"]').prop('checked', $(this).prop('checked'))
        })
        $('input[name="check"]').on('click', function () {
            //商品控制店铺
            var val = $(this).parents('.ordercont_content_cw').find('input[name="check"]:checked').size();
            var val1 = $(this).parents('.ordercont_content_cw').find('input[name="check"]').size();
            if (val == val1) {
                $(this).parents('.ordercont_content_cw').find('input[name="dianpu"]').prop('checked', true);
            } else {
                $(this).parents('.ordercont_content_cw').find('input[name="dianpu"]').prop('checked', false);
            }
        })
    }
    function jkq() {
        var val3 = $('input[name="check"]:checked').size();
        var val4 = $('input[name="check"]').size();
        if (val3 == val4 && val3 != 0) {
            $('input[name="quan"]').prop('checked', true);

        } else {
            $('input[name="quan"]').prop('checked', false);
        }
        if (val3 == 0) {
            $('.ord-btn a').addClass('cur_ccc');
        } else {
            $('.ord-btn a').removeClass('cur_ccc');
        }
        var $num = 0;
        var $num1 = 0;
        $.each($('input:checkbox[name="check"]:checked'), function (index, item) {
            $num += $(this).parents('.content_type_zp').find('.cont5 span').html() * 1;
            $num1 += $(this).parents('.content_type_zp').find('.cont3 input').val() * 1;
        });
        $('.order_nav em,#j-totaldeliveryrule1,.oar-money-total span').html($num.toFixed(2));
        $('.num em,.jian').html($num1);
        console.log($num)
    }
})
