<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
         $num = isset($_GET['num'])?$_GET['num']:'';
          $uid = isset($_GET['uid'])?$_GET['uid']:'';
          $sql = "UPDATE liuyanbanbiao SET dianzan=$num WHERE lid='$uid'";
          $res =  $conn->query($sql);
?>