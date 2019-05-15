<?php
 header('content-type:text/html;charset=utf-8');
     include './conn.php';
     $data = isset($_GET['data'])?$_GET['data']:'';
     $sql = "SELECT * FROM erjieduan_list WHERE cid='全部团购'";
     $res = $conn->query($sql);
     $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content ,JSON_UNESCAPED_UNICODE);
?>
