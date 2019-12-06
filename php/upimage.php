<?php
    // 调试错误打印 mysqli_connect
    ini_set('display_errors','on');
    error_reporting(E_ALL);
    require_once('header.php');

    // post请求
    function _post($str){ 
        $val = !empty($_POST[$str]) ? $_POST[$str] : null; 
        return $val; 
    }
    // $dir_base = "photo/"; //文件上传根目录
    $dir_base = 'file:///Applications/MAMP/htdocs/webPC/uploadImage/';

    $file = $_FILES['form_data'];
    $index = 0; //$_FILES 以文件name为数组下标，不适用foreach($_FILES as $index=>$file)
    $dataarr = array();
    if($file['error'] > 0){
        $msg = '传入参数错误' . $file['error'] . "  ";
        Response::json(203,'文件已经存在，重新上传', $msg);
    }else{
        foreach($_FILES as $file){
            // $upload_file_name = $_FILES['form_data'];//$_FILES['form_data'] . $index;//'form_data' . $index; //对应index.html FomData中的文件命名
            $filename = $index.'_up_' . $file['name'];
            $gb_filename = iconv('utf-8','gb2312',$filename);//iconv('utf-8','gb2312',$filename); //名字转换成gb2312处理
            //文件不存在才上传
            if(!file_exists($dir_base.$gb_filename)) {
                $isMoved = false;  //默认上传失败
                $MAXIMUM_FILESIZE = 20 * 1024 * 1024;     //文件大小限制    1M = 1 * 1024 * 1024 B;
                $rEFileTypes = "/^\.(jpg|jpeg|gif|png){1}$/i"; 
                if ($file['size'] <= $MAXIMUM_FILESIZE && 
                    preg_match($rEFileTypes, strrchr($dir_base.$gb_filename, '.'))) {
                    $isMoved = @move_uploaded_file ($file['tmp_name'], $dir_base.$gb_filename); //上传文件
                    $index++;
                    setUpSql($filename);
                    Response::json(200,'上传成功', array('file_name'=>$filename,'dir_base'=>$dir_base));
                }else{
                    Response::json(203,'上传失败，稍后重试', array('file_name'=>'error.jpg','dir_base'=>$dir_base));
                }
            }else{
                Response::json(203,'文件已经存在，重新上传', array('file_name'=>$filename,'dir_base'=>$dir_base));
            }
        }
    }
    
    function setUpSql ($name) {
        require_once('conn.php');
        /*
        *选择数据表 
        *查询数据
        * */
        $form_data_name = $_FILES['form_data']['name'];
        $form_data_size = $_FILES['form_data']['size'];
        $form_data_type = $_FILES['form_data']['type'];
        $form_data = $_FILES['form_data']['tmp_name'];
        $user_id = _post('userId');
        // 用户头像
        $user_up_type = _post('upType');
        $description = _post('articleImageMark');
        $cover_user_id = '';
        $cover_article_id = '';
        if($user_up_type == 'user'){
            $cover_user_id = 'cover_user_2';//'cover_user_'.rand(1, 10);
        }
        // 文章封面图
        if($user_up_type == 'article'){
            $cover_article_id = 'cover_article_'.rand(1, 10);
        }
        //$cover_article_id = 'cover_article'.rand(1, 10);

        // 使用 sql 插入数据
        $articleImage = $name;//$_POST['articleImage'];
        $sqlINsert = "INSERT INTO article_image (description,bin_data,filename,filesize,filetype,cover_article_id,cover_user_id)
        VALUES ('$description','1111111','$articleImage','$form_data_size','$form_data_type','$cover_article_id','$cover_user_id')";
        if ($conn->query($sqlINsert)) {
            $cover_id = $user_up_type == 'user'?$cover_user_id:$cover_article_id;
            Response::json(200,'图片上传成功',array('file_name'=>$articleImage,'cover_id'=>$cover_id));
        } else {
            //echo "插入错误： " . $conn->error;
            Response::json(203,'图片上传错误');
        }
    }
?>