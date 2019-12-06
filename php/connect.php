<?php
/**
 * Created by PhpStorm.
 * User: monty
 * Date: 2018/10/29
 * Time: 11:58
 */
    $conn = @mysqli_connect('localhost','root','root','myDB') or die("数据库连接失败！");
    // mysqli_query($conn,"set names 'utf8'");
    mysqli_query($conn,"SET NAMES utf8");
?>