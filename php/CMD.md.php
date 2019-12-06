<?php
// mysql 文件记录

https://www.cnblogs.com/bypp/p/8618382.html



1.创建文件夹
<?php
 //使用 file_exists("d:/mydir") 或 is_dir("d:/mydir")判断该文件夹是否存在
 if(!file_exists("d:/mydir")) {
     if(mkdir("d:/mydir")) {
         echo "创建文件夹成功";
     }else{
         echo "创建文件夹失败";
     }
 } else {
     echo "该文件夹已存在";
 }
?>
    2.创建多级目录（上面所说的，只能创建一级目录）
<?php
//使用 file_exists("d:/mydir") 或 is_dir("d:/mydir")判断该文件夹是否存在
$path="d:/mydir/p/h/p/test";
if(!file_exists($path)) {
    if(mkdir($path,0777,true)) {
        echo "创建文件夹成功";
    }else{
        echo "创建文件夹失败";
    }
} else {
    echo "该文件夹已存在";
}
?>
    3.删除文件夹
<?php
//如果文件夹下有文件，或者目录，均不能删除成功
if(rmdir("d:/mydir/p/h/p/test")) {
    echo "删除文件夹成功";
} else {
    echo "删除文件夹成功";
}
?>
    4.文件的创建
<?php
//在d:/mydir目录下，创建一个文件并写入hello
$file_path="d:/mydir2/test.txt";
$fp=fopen($file_path,"w+");

fwrite($fp,"hello,world");
fclose($fp);
echo "文件写入成功";
?>
    5.删除文件
<?php
$file_path="d:/mydir2/test.txt";
if(is_file($file_path)) {
    if(unlink($file_path)) {
        echo "删除成功";
    } else {
        echo "删除失败";
    }
} else {
    echo "文件不存在";
}
?>
    复制文件的函数：
<?php
PHP自身提供的copy文件函数：应用拷贝图片
copy("来源","地点")
$file_path=iconv("utf-8","gb2312","含中文路径");
//将utf-8编码转为gb2312码
/*if(!copy("C:\\bh.PNG","D:\\bh2.png")) {
 echo 'error';
} else {
 echo 'ok';
}*/


//自制拷贝文件的函数
function myCopyFunc($res, $des) {
    if(file_exists($res)) {
        $r_fp=fopen($res,"r");

        //定位
        $pos=strripos($des,"\\");
        $dir=substr($des,0,$pos);
        if(!file_exists($dir)) {
            //可创建多级目录
            mkdir($dir,0777,true);
            echo "创建目录成功<br/>";
        }

        $d_fp=fopen($des,"w+");
        //$fres=fread($r_fp,filesize($res));

        //边读边写
        $buffer=1024;
        $fres="";
        while(!feof($r_fp)) {
            $fres=fread($r_fp,$buffer);
            fwrite($d_fp,$fres);
        }

        fclose($r_fp);
        fclose($d_fp);

        echo "复制成功";
    } else {
        echo "源文件不存在";
    }
}

myCopyFunc("C:\\bh.PNG","D:\\PHPTest\\test\bh2.PNG");
//myCopyFunc("C:\\bh.PNG","D:\\bh.PNG");
?>