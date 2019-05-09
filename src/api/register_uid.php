<?php
 header('content-type:text/html;charset=utf-8');
    //设置编码
    include './conn.php';
    $uid = isset($_POST['uid'])?$_POST['uid']:'';
    $sql = "SELECT * FROM erjieduan_register WHERE uid='$uid'";
    $res = $conn->query($sql);
    if($res->num_rows){
        echo 0;
    }else{
        echo 1;
    }
?>