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
    $userEmail = _post('userEmail');
    $userSex = _post('userSex');
    $userTell = _post('userTell');
    $userNick = _post('userNick');
    $userMark = _post('userMark');
    $userPower = _post('userPower');
    $userHeadImg = _post('userHeadImg');

    $sql = "SELECT * from user Where userName='$userName'";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        // while($row = mysqli_fetch_assoc($result)){
        //     $dataarr[] = $row;
        // }
        //Response::json(200,'可以操作',[]);

        // 使用 sql 更新数据
        $sqlINsert = "update user set userSex='$userSex', userTell='$userTell', userEmail='$userEmail', userNick='$userNick', userMark='$userMark', userPower='$userPower', userHeadImg='$userHeadImg'  where userName='$userName'";
        if ($conn->query($sqlINsert)) {
            Response::json(200,'成功');
        } else {
            echo "插入错误： " . $conn->error;
            // Response::json(203,'插入错误');
        }
    } else {
        Response::json(203,'未查到该用户信息，请做确认',[]);
    }
?>