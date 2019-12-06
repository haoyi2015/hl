<?php
header("charset=utf-8");
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 设置Credentials
header('Access-Control-Allow-Credentials:true');
// 响应类型
header('Access-Control-Allow-Methods:*');
// 响应头设置
//header('Access-Control-Allow-Headers:x-requested-with,content-type');
ini_set('display_errors','on');
error_reporting(E_ALL);
function get_tag_data($html,$tag,$attr,$value){
    $regex = "/<$tag.*?$attr=\".*?$value.*?\".*?>(.*?)<\/$tag>/is";
    //echo $regex."<br>";
    preg_match_all($regex,$html,$matches,PREG_PATTERN_ORDER);
    return $matches[1];
}
$url = "http://www.xinaliu.com/#blogItem";
$htmls = '<div class="desc">用技术为体验提供无限可能</div>';
$html = file_get_contents($url);
//如果出现中文乱码使用下面代码
//$getcontent = iconv("gb2312", "utf-8",$html);
$result = get_tag_data($html,"div","class","sub-category");

// 二次转化
echo json_encode(array($result),true);
//echo var_dump($result);
//echo "<textarea style='width:800px;height:600px;'>".$html."</textarea>";
?>
