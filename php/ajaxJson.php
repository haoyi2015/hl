<?php
// use function \mysql_query;   // 导入这个函数 从而直接使用这个函数
include_once("connect.php"); //连接数据库
//phpinfo();
/**
 * Created by PhpStorm.
 * User: monty
 * Date: 2018/10/29
 * Time: 11:58
 */
    // include_once("connect.php"); //连接数据库
    // // $book=$_POST['book'];
    // $book = isset($_GET["q"]) ? intval($_GET["q"]) : '';
    // //通过将json字符串解析为json对象数据
    // $bookjson = (array)json_decode($book);
    // // 查询表
    // $sql = "SELECT * FROM MyGuests WHERE id = '".$book."'";//"insert into book(bookname,price,leibie) VALUES ('{$bookjson["bookname"]}','{$bookjson["price"]}','{$bookjson["leibie"]}')";
    // @mysqli_query($conn,$sql);
    // //将返回数据转码为json字符串
    // $row = mysql_fetch_array($sql);
	// $list = array("id"=>$row[id],"firstname"=>$row[firstname],"lastname"=>$row[lastname],"email"=>$row[email],"reg_date"=>$row[reg_date]);
    // echo 1;
    
    // include_once("connect.php"); //连接数据库
    // $action = $_GET[action];
    // $id = intval($_GET[id]);
    // if($action == "getlink"){
    //     $query = mysql_query("select * MyGuests user where id=$id");
    //     // $row = mysql_fetch_array($query);
    //     // $list = array("id"=>$row[id],"firstname"=>$row[firstname],"lastname"=>$row[lastname],"email"=>$row[email],"reg_date"=>$row[reg_date]);
    //     // echo json_encode($list);
    // }
    // $action=$_GET[action];
    // $id = intval($_GET[id]);
    // 错误打印
    // ini_set('display_errors','on');
    // error_reporting(E_ALL);
    // if($action == "getlink"){
    //     $query = mysqli_query("SELECT id, username, sex, tel FROM user");
    //     $row = mysqli_fetch_array($query);
    //     $list = array("name"=>$row[username],"sex"=>$row[sex],"tel"=>$row[tel],"email"=>$row[email]);
    //     if ($row) {
    //         echo "rs";
    //     } else {
    //         echo "查询失败" . $conn->error;
    //     }
    //     echo json_encode($query);
    // }
    // $query = mysqli_query("SELECT * FROM user WHERE id=$id");
    $sql = "SELECT * FROM user";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            $list = array("name"=>$row[username],"sex"=>$row[sex],"tel"=>$row[tel],"email"=>$row[email]);//array("id: " . $row["id"]. " - username: " . $row["username"]. " " . $row["sex"]. "<br>");
            echo json_encode($list);
        }
    } else {
        echo "0 结果";
    }
    $conn->close();
?>

