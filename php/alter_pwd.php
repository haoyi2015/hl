<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    /*
     *选择数据表 
     *查询数据
     * */

    // post请求
    function _post($str){ 
        $val = !empty($_POST[$str]) ? $_POST[$str] : null; 
        return $val; 
    }
    $userName = _post('userName');
    $userPwd = _post('userPwd');
    $userNewPwd = _post('userNewPwd');
    
    $sql = "SELECT * from user Where userName='$userName' and userPwd='$userPwd'";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {

        // 使用 sql 更新数据
        $sqlINsert = "update user set userPwd='$userNewPwd'  where userName='$userName'";
        if ($conn->query($sqlINsert)) {
            Response::json(200,'修改成功');
        } else {
            // echo "插入错误： " . $conn->error;
            Response::json(203,'输入信息有误');
            // Response::json(203,'插入错误');
        }
    } else {
        Response::json(203,'旧密码错误，请重新输入',[]);
    }
?>