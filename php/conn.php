<?php

    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "myDB";
    $conn = @mysqli_connect($servername,$username,$password,$dbname) or die("数据库连接失败！");
    // mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"SET NAMES utf8");


    // 前台接收数据后，中文显示/u格式的unicode编码。

    // 添加：
    // son_encode($webSite,JSON_UNESCAPED_UNICODE)

    // JSON_UNESCAPED_UNICODE告诉Json不要unicode编码

    // $webSite = array(
    //             'code' => 200,
    //             'msg' => '提交成功'
    // );

    // //把php数组编译为Json格式，并且处理中文编码问题
    // $webSite=json_encode($webSite,JSON_UNESCAPED_UNICODE);
    // echo urldecode($webSite);
 
?>