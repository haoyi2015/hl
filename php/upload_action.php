<?php
/**
 * 图片上传处理
 * User: CorwienWong
 * Date: 16-06-15
 * Time: 00:33
 */
header("Content-type:text/html;charset=utf-8");
ini_set('display_errors','on');
error_reporting(E_ALL);
// 配置文件需要上传到服务器的路径，需要允许所有用户有可写权限，否则无法上传成功
$uploadPath = 'file:///Applications/MAMP/htdocs/webPC/uploadImage/';
// 获取提交的图片数据
$file = $_FILES['opus'];

// 获取图片回调路径
$callbackUrl = $_POST['callbackUrl'];

if($file['error'] > 0)
{

    $msg = '传入参数错误' . $file['error'] . "  ";
    exit($msg);
}
else
{

   // chmod($uploadPath, 0666);

    if(file_exists($uploadPath.$file['name'])){
       $msg = $file['name'] . "文件已经存在！";
       exit($msg);
    }
    else{
        if(move_uploaded_file($file['tmp_name'], $uploadPath.$file['name'])){

          $img_url =    $uploadPath.$file['name'];//"http://localhost/".$uploadPath.$file['name'];
          $img_url = urlencode($img_url);
          $img_urls = $file['name'];

          $url = $callbackUrl."?img_url={$img_urls}";

          // 跳转
          header("location:{$url}");
          exit();

        } else {

          exit ('12');
        }

    }

}