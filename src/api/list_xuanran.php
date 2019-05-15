<?php
    header('content-type:text/html;charset=utf-8');
    include './conn.php';
    $num = isset($_GET['num'])?$_GET['num']:'1';//第几页
    $type = isset($_GET['type'])?$_GET['type']:'gid';//排序方式
     $index = ($num-1) * 10;//第几个开始
     $sql = "SELECT * FROM erjieduan_list ORDER BY $type DESC LIMIT $index ,10" ;//查询方式
       $res = $conn->query($sql);//执行
         $content = $res->fetch_all(MYSQLI_ASSOC);//转码
     $sql2 = "SELECT * FROM erjieduan_list";//总条数
         $res2 =  $conn->query($sql2); 
             $datalist = array(
		'data' => $content,//需要渲染的数据
		'total' => $res2->num_rows,//总条数
		'page' => $num,//第几页
	);
	
	echo json_encode($datalist,JSON_UNESCAPED_UNICODE);     
?>