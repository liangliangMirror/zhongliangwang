<?php
 header('content-type:text/html;charset=utf-8');
    //设置编码
    include './conn.php';
    $uids = isset($_POST['uids'])?$_POST['uids']:'';
    $phone = isset($_POST['phone'])?$_POST['phone']:'';
    $pas = isset($_POST['pas'])?$_POST['pas']:'';
    $sql = "SELECT * FROM erjieduan_register WHERE (uid='$uids' OR email='$phone') AND pas='$pas'";
    $res = $conn->query($sql);
     if($res->num_rows){
        echo 1;
    }else{
        echo 0;
    }
?>