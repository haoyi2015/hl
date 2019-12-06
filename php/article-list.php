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
    $pageNo = _get('pageNo');
    $pageSize = _get('pageSize');
    $count_sql = "SELECT COUNT(1) nums FROM article";//查询数据总条数
    $query = $conn->query($count_sql);
    $row_count = $query->fetch_assoc();
    $query->free_result();
    $total = $row_count['nums'];

    $start = ($pageNo-1)*$pageSize;//按照分页规律计算出数据起始条数
    $sql = "SELECT * from article order by id asc LIMIT $start,$pageSize";//"select article.id,articleTitle,articleState,articleContent,articleStatus,article.created_date,article_image.filename from article,article_image where article.articleCoverId = article_image.coverId and article_image.coverId !='';";//"SELECT * from article";
    $result = $conn->query($sql);
    $dataarr = array();
    if ($result && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            $dataarr[] = $row;
        }
        // 获取cookie
        //echo var_dump($_COOKIE["sso"]);//isset($_COOKIE["user"]);
        Response::json(200,'成功',array('toal'=>$total,'list'=>$dataarr));
    } else {
        Response::json(203,'暂无数据');
    }
?>