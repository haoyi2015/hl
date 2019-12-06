<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    // post请求
    function _post($str){ 
        $val = !empty($_POST[$str]) ? $_POST[$str] : null; 
        return $val; 
    } 
    /*
     *选择数据表 
     * */
    $id = _post('id');
    $sql = "delete from article_image where id=$id";
    $result = $conn->query($sql);
    if($result){//如果操作的返回值为true
        Response::json(200,'删除成功');
    }else{
        Response::json(203,'删除数据失败');
    }
?>