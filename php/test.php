<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    /*
     *选择数据表 
     * */
    $id = $_GET['id'];
    $sql = "SELECT * from user Where id=$id";
    $result = $conn->query($sql);
    $dataarr = array();
    if ($result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            $dataarr[] = $row;
        }
        Response::json(200,'成功',$dataarr);
    } else {
        Response::json(406,'暂无数据');
    }
?>