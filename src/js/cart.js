$(function () {
    var $uid = getCookie("uid");
    var $num = 0;
    var $zongjia = 0;
    var $zongzhong = 0;
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
                            <input type="checkbox" name="" id="all" class="fl" checked="checked">
                                <label for="all">${item.cid}</label>
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
                                <input type="checkbox" name="checkbox" checked="callback" class="fl">
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
                            <input type="text" value="${item1.num}" class="fl">
                            <span class="fl next">+</span>
                        </div>
                        <span class="cont4 fl">
                            ${item1.wuight * item1.num}
                        </span>
                        <div class="cont5 fl">
                            ￥ <span>${item1.price * item1.num}</span>
                        </div>
                        <div class="cont6 fl">
                            删除
                        </div>
                    </div>`;
                    }
                })
                $html += `</div>
                </div>`;

            });
            $('.order_nav em,#j-totaldeliveryrule1,.oar-money-total span').html($zongjia);
            $('.oar_weight span').html($zongzhong);
            $('.loadshowcart1').html($html);
            $('.num em').html($num);
            itin();
        }
    })
    function itin() {
        $('.cont3 span').on('click', function () {
            var gid = $(this).parents('.content_type_zp').attr('data-gid');
            if ($(this).hasClass('prev')) {
                var val = $(this).next().val();
                val--;
                if (val < 1) {
                    val = 1;
                }
                $(this).next().val(val);
                charu(true, val, gid);
            } else {
                var val = $(this).prev().val();
                val++;
                $(this).prev().val(val);
            }
            xiaoji($(this));
            charu(true, val, gid);
        })
        $('.cont6').on('click', function () {
            $(this).parents('.content_type_zp').remove();
        })
    }
    function xiaoji(item) {
        var num = item.parents('.content_type_zp').find('.cont3').children('input').val();
        var jiage = item.parents('.content_type_zp').find('.cont2_jiage').html();
        var xiaoji = num * jiage;
        item.parents('.content_type_zp').find('.cont5').children().html(xiaoji);
    }
    function charu(type, num, gid) {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/erjieduanxiangmu/src/api/cart.php',
            data: { 'isok': type, 'num': num, 'gid': gid },
        })
    }
})
