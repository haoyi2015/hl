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
    $userNick = _post('userNick');
    $userPower = _post('userPower');

    $sql = "SELECT * from user Where userName='$userName'";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        // while($row = mysqli_fetch_assoc($result)){
        //     $dataarr[] = $row;
        // }
        Response::json(203,'用户名不能重复，请做确认',[]);
    } else {
        // 使用 sql 更新数据
        $cover_user_id = 'cover_user_'.rand(1, 10);
        $sqlINsert = "INSERT INTO user (userNick, userName, userPwd,userPower,cover_user_id)
        VALUES ('$userNick', '$userName', '$userPwd', $userPower,'$cover_user_id')";
        if ($conn->query($sqlINsert)) {
            Response::json(200,'添加成功');
        } else {
            echo "插入错误： " . $conn->error;
            //Response::json(203,'信息错误');
        }
    }
?>