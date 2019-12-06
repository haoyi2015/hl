<?php
    require_once('header.php');
    /*if(isset($_SESSION["userName"])) {
        session_unset();
        session_destroy();
    }*/
    //echo $_COOKIE[session_name()];
    $_SESSION = array(); //清除SESSION值.
    /*if(isset($_SESSION["username"]) && isset($_SESSION["sso-token"])){
        echo 111;
    }*/
    if(isset($_COOKIE[session_name()])){
        setcookie(session_name(),null,time()-1,'/');
        Response::json(200,'退出成功','ok');
    }
    session_destroy();
    exit;
?>