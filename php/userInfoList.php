<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    /*
     *选择数据表 
     * */
    // $id = $_GET['id'];
    $sql = "select user.id,userName,userNick,userSex,userTell,userEmail,userMark,user.created_date,article_image.filename from user left join  article_image  on  user.cover_user_id = article_image.cover_user_id and article_image.cover_user_id !='' order by id asc;";//"select user.id,userName,userNick,userSex,userTell,userEmail,userMark,user.created_date,article_image.filename from user,article_image where user.cover_user_id !='';";//"select a.*, b.* from user a join article_image b on a.id = b.userId";//"SELECT * from user";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            $dataarr[] = $row;
        }
        Response::json(200,'成功',array('list'=>$dataarr));
    } else {
        Response::json(203,'暂无数据');
    }
?>