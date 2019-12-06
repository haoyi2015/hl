<?php
    // // 指定允许其他域名访问  
    // header('Access-Control-Allow-Origin:*');  
    // // 响应类型  
    // header('Access-Control-Allow-Methods:*');  
    // // 响应头设置  
    // header('Access-Control-Allow-Headers:x-requested-with,content-type');
    // // 调试错误打印 mysqli_connect
    // ini_set('display_errors','on');
    //error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    require_once('openssl.php');
    $getMap = Openssl::get($_POST['postData']);
    /*
     *选择数据表
     * */
    $user = $getMap['user'];/*获取登录表单提交过来的数据*/
    $pwd = $getMap['pwd'];
    $sql = "SELECT * from user Where userName='$user' and userPwd=$pwd";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            session::set('username', $row['userName'], 24*3600*2);
            session::set('sso-token', Openssl::getToken(1,38), 24*3600*2);
            $dataarr[] = $row;
        }
        Response::json(200,'登录成功',array('token'=>Openssl::getToken(1,38)));
    } else {
        Response::json(203,'用户名或者密码错误');
    }
?>