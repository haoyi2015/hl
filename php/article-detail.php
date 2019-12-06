<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    // get 请求
    function _get($str){ 
        $val = !empty($_GET[$str]) ? $_GET[$str] : null; 
        return $val; 
    } 
    /*
     *选择数据表 
     * */
    $id = _get('articleId');
    $sql = "select articleTitle,articleState,articleContent,articleStatus,articleImage,articleMark,articleType,articleSetBase,article_image.filename,article_image.description from article left join article_image on article.id='$id' and article.cover_article_id = article_image.cover_article_id and article_image.cover_article_id!=''";//"SELECT * from article Where id=$id";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        while($row = mysqli_fetch_assoc($result)){
            $dataarr[] = $row;
        }
        Response::json(200,'成功',array('list'=>$dataarr[0]));
    } else {
        Response::json(203,'暂无数据');
    }
?>