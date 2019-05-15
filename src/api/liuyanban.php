<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
    $num = isset($_GET['num'])?$_GET['num']:'1';
    $index = ($num-1) * 5;
    $sql = "SELECT * FROM `liuyanbanbiao` ORDER BY lid DESC LIMIT $index ,5";
    $sql2 = "SELECT * FROM `liuyanbanbiao`";
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $res2 =  $conn->query($sql2); 
    $datalist = array(
		'data' => $content,
		'total' => $res2->num_rows,
		'page' => $num,
	);
	
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);   
?>