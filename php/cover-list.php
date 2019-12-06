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
    $count_sql = "SELECT COUNT(1) nums FROM article_image";//查询数据总条数
    $query = $conn->query($count_sql);
    $row_count = $query->fetch_assoc();
    $query->free_result();
    $total = $row_count['nums'];

    $start = ($pageNo-1)*$pageSize;//按照分页规律计算出数据起始条数
    $sql = "SELECT * from article_image order by id asc LIMIT $start,$pageSize";
    $result = $conn->query($sql);

    $dataarr = array();
    if (is_object($result) && $result->num_rows > 0) {
        // mysql_fetch_array  mysqli_fetch_assoc mysqli_fetch_row
        while($row = mysqli_fetch_assoc($result)){
            $dataarr[] = $row;
        }
        Response::json(200,'成功',array('list'=>$dataarr,'total'=>$total));
    } else {
        Response::json(203,'暂无数据');
    }
?>