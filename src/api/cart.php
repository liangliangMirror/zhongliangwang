<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
    //购物车
    $uid = isset($_GET['uid'])?$_GET['uid']:'';
    $gid = isset($_GET['gid'])?$_GET['gid']:'';
    $isok = isset($_GET['isok'])?$_GET['isok']:false;
    $isok2 = isset($_GET['isok2'])?$_GET['isok2']:false;
    $isok3 = isset($_GET['isok3'])?$_GET['isok3']:false;
    $num = isset($_GET['num'])?$_GET['num']:'';
    $num2 = isset($_GET['num2'])?$_GET['num2']:'';
    $contnum1=null;
    $contnum2=null;
    if($isok){
        $sql10 = "DELETE  FROM cart WHERE uid='$uid'";
        $res10 = $conn->query($sql10);
    }
    if($isok3){
        $sql11 = "DELETE  FROM cart WHERE uid='$uid' AND gid=$gid";
        $res11 = $conn->query($sql11);
    }
    if($isok2){
        $sql4 = "SELECT * FROM erjieduan_list WHERE gid=$gid";
        $res4 = $conn->query($sql4);
        $cont = $res4->fetch_all(MYSQLI_ASSOC);
        $cid = $cont[0]['cid'];
        $img = $cont[0]['img1'];
        $title = $cont[0]['title'];
        $price = $cont[0]['price'];
        $zhong = $cont[0]['evaluate'];
        $sql5 = "SELECT * FROM cart WHERE gid=$gid AND uid='$uid'";
        $res5 = $conn->query($sql5);
        if($res5->num_rows==1){
            $sql6 = "UPDATE cart SET num=$num2+num WHERE gid=$gid AND uid='$uid'";
            $res6 = $conn->query($sql6);
        }else{
            $sql7 = "INSERT INTO cart(cid,uid,title,img,num,price,gid,wuight) VALUES('$cid','$uid','$title','$img',$num2,$price,$gid,$zhong)";
            $res7 = $conn->query($sql7);
        }
    }
    if($num){
        $sql3 = "UPDATE cart SET num=$num WHERE gid=$gid AND uid='$uid'";
        $res3 = $conn->query($sql3);
    }
     $sql8 = "SELECT SUM(num) FROM cart WHERE uid='$uid'";
    $res8 = $conn->query($sql8);
    $contnum1 = $res8->fetch_all(MYSQLI_ASSOC);
    $sql9 ="SELECT SUM(num*price) FROM cart WHERE uid='$uid'";
    $res9 = $conn->query($sql9);
    $contnum2 = $res9->fetch_all(MYSQLI_ASSOC);
    $sql = "SELECT  DISTINCT cid FROM cart WHERE uid='$uid'";
    $sql2 = "SELECT * FROM `cart` WHERE uid='$uid'";
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $content2 = $res2->fetch_all(MYSQLI_ASSOC);
    $datalist = array(
        'data1' =>$content,
        'data2'=> $content2,
        'num1'=>$contnum1,
        'num2'=>$contnum2,
    );
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>