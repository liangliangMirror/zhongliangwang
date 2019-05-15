<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
    //购物车
    $uid = isset($_GET['uid'])?$_GET['uid']:'wei';
    $isok = isset($_GET['isok'])?$_GET['isok']:false;
    $num = isset($_GET['num'])?$_GET['num']:'';
    $gid = isset($_GET['gid'])?$_GET['gid']:'';
    if($isok){
        $sql3 = "UPDATE cart SET num=$num WHERE gid=$gid";
        $res3 = $conn->query($sql3);
    }
    $sql = "SELECT  DISTINCT cid FROM cart WHERE uid='$uid'";
    $sql2 = "SELECT * FROM `cart` WHERE uid='$uid'";
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $content2 = $res2->fetch_all(MYSQLI_ASSOC);
    $datalist = array(
        'data1' =>$content,
        'data2'=> $content2
    );
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>