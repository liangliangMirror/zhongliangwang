<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
    $uid = isset($_GET['uid'])?$_GET['uid']:'';
    $biaoti =isset($_GET['biaoti'])?$_GET['biaoti']:'';
    $content =isset($_GET['content'])?$_GET['content']:'';
    $type =isset($_GET['type'])?$_GET['type']:'';
    $sql = "INSERT INTO liuyanbanbiao (uid,content,biaoti,`$type`) VALUES ('$uid','$content','$biaoti','1')";
    $res = $conn->query($sql);
?>