<?php
 header('content-type:text/html;charset=utf-8');
    //设置编码
    include './conn.php';
    $name = isset($_GET['name'])?$_GET['name']:'';
    $sql = "SELECT uid FROM erjieduan_register WHERE email='$name'";
    $res = $conn->query($sql);
     $content = $res->fetch_all(MYSQLI_ASSOC);
    if($res->num_rows){
     echo json_encode($content ,JSON_UNESCAPED_UNICODE);
    }else{
        echo 1;
    }
?>