<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');
    require_once('conn.php');
    // post请求
    function _post($str){ 
        $val = !empty($_POST[$str]) ? $_POST[$str] : null; 
        return $val; 
    } 
    /*
     *选择数据表 
     * */
    $id = _post('id');
    $fileId = _post('fileId');
    // 文件上传根目录
    $file_path = 'file:///Applications/MAMP/htdocs/webPC/uploadImage/';

    // 查询封面图片表
    $fileSql = "SELECT * from article_image Where cover_article_id='$fileId' and cover_article_id!=''";
    $fileResult = $conn->query($fileSql);

    if (is_object($fileResult) && $fileResult->num_rows > 0) {
        while($row = mysqli_fetch_assoc($fileResult)){
            //echo $file_path.$row['filename'];
            $sql = "delete from article_image where cover_article_id='$fileId'";
            $result = $conn->query($sql);
            if($result){
                // 删除本地文件
                if(is_file($file_path.$row['filename'])) {
                    if(unlink($file_path.$row['filename'])) {
                        //echo "删除成功";
                        $sql = "delete from article_image where cover_article_id=$fileId";
                        $result = $conn->query($sql);
                    }
                }
            }
        }
    }
    // 删除执行
    $sql = "delete from article where id=$id";
        $result = $conn->query($sql);
        if($result){//如果操作的返回值为true
            Response::json(200,'删除成功');
        }else{
            Response::json(203,'删除数据失败');
        }
?>