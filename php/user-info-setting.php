
<?php
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    /*
     *选择数据表 
     * */
    $userName = session::get('username');//$_GET['user_id'];//$_POST['username'];/*获取登录表单提交过来的数据*/
    $sql = "select user.cover_user_id,userName,userNick,userSex,userTell,userEmail,userMark,userPower,user.created_date,article_image.filename,article_image.cover_user_id from user left join article_image on user.userName='$userName' and (user.cover_user_id = article_image.cover_user_id and user.cover_user_id !='')";//"SELECT id,userNick,userMark,userPower,userHeadImg,userEmail,userName,userSex,userTell from user Where id=$userId";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            if($row['userName'] == $userName){
                $dataarr[] = $row;
            }
        }
        Response::json(200,'成功',$dataarr[0]);
    } else {
        Response::json(203,'用信息不存在');
    }
?>