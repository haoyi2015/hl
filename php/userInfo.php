<?php
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');

    $user = session::get('username');
    if(isset($_SESSION["username"]) && isset($_SESSION["sso-token"])){
        // 查询用户数据
        //$sql = "SELECT * from user Where userName='$user'";
        $sql = "select userName,userNick,article_image.filename from user left join article_image on user.userName='$user' and user.cover_user_id = article_image.cover_user_id";
        $result = $conn->query($sql);
        $dataarr = array();
         if (is_object($result) && $result->num_rows > 0) {
             while($row = mysqli_fetch_assoc($result)){
                 if($row['userName'] == $user){
                     $dataarr[] = $row;
                 }
             }
             //Response::json(200,'登录成功',$dataarr[0]);
             $rout = array('path'=>'/from','name'=>'from');
             $permissions = array('permissions'=>[$rout]);
             Response::json(200,'成功',array('role'=>$permissions,'user'=>$dataarr[0]));
         }
    }else {
        Response::json(50008,'用户信息过期',array('user'=>$user,'sso'=>isset($_SESSION["sso-token"])));
    }
?>