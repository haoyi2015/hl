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
    $title = $_POST['articleTitle'];
    $sql = "SELECT * from article Where articleTitle='$title'";
    $result = $conn->query($sql);
    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            $dataarr[] = $row;
        }
        Response::json(203,'文章标题已存在，您不烦换个试试',[]);
    } else {
        // 使用 sql 插入数据
        //$title = $_POST['articleTitle'];
        $articleState = $_POST['articleState'];
        $articleContent = $_POST['articleContent'];
        $articleStatus = $_POST['articleStatus'];
        $articleImage = $_POST['articleImage'];
        $articleMark = $_POST['articleMark'];
        $articleType = $_POST['articleType'];
        $articleSetBase = $_POST['articleSetBase'];
        $coverId = $_POST['cover_id'];
        
        $sqlINsert = "INSERT INTO article (articleTitle, articleState, articleContent,articleStatus,articleImage,articleMark,articleType,articleSetBase,cover_article_id)
        VALUES ('$title', $articleState, '$articleContent', $articleStatus, '$articleImage', '$articleMark', $articleType, $articleSetBase, '$coverId')";
        if ($conn->query($sqlINsert)) {
            Response::json(200,'成功');
        } else {
            echo "插入错误： " . $conn->error;
            // Response::json(203,'插入错误');
        }
    }
?>