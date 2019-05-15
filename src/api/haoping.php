<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
    $sql1 = "SELECT * FROM `liuyanbanbiao`";
    $sql2 = "SELECT * FROM liuyanbanbiao WHERE haoping IS NOT NULL";//好评
    $sql3 = "SELECT * FROM liuyanbanbiao WHERE zhongping IS NOT NULL";//中评
    $sql4 = "SELECT * FROM liuyanbanbiao WHERE chaping IS NOT NULL";//差评
     $res1 = $conn->query($sql1); $res2 = $conn->query($sql2); $res3 = $conn->query($sql3); $res4 = $conn->query($sql4);
       $content1 = $res1->fetch_all(MYSQLI_ASSOC);   $content2 = $res2->fetch_all(MYSQLI_ASSOC);   $content3 = $res3->fetch_all(MYSQLI_ASSOC);   $content4 = $res4->fetch_all(MYSQLI_ASSOC);
     $datalist = array(
        'quan' => $res1->num_rows,
        'hao' => $res2->num_rows,
        'zhong' => $res3->num_rows,
        'cha' => $res4->num_rows,
        'quan1' => $content1,
        'hao2' => $content2,
        'zhong3' => $content3,
        'cha4' => $content4,

    ) ;
    	echo json_encode($datalist,JSON_UNESCAPED_UNICODE); 
?>