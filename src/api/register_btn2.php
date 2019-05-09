<?php
 header('content-type:text/html;charset=utf-8');
    //设置编码
    include './conn.php';
    $phone = isset($_POST['phone'])?$_POST['phone']:'';
    $uids = isset($_POST['uids'])?$_POST['uids']:'';
    $pas = isset($_POST['pas'])?$_POST['pas']:'';
    $sql = "INSERT INTO erjieduan_register(uid,email,pas) VALUES('$uids','$phone','$pas')";
    $res = $conn->query($sql);
    echo $res;
?>