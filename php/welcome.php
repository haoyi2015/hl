欢迎 <?php echo $_POST["fname"]; ?>!<br>
你的年龄是 <?php echo $_POST["age"]; ?>  岁。

<?php
if ($_FILES["file"]["error"] > 0)
{
    echo "错误：" . $_FILES["file"]["error"] . "<br>";
}
else
{
    echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
    echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
    echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
    echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"];
}
?>
<br><br>
<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myDB";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 
// 使用 sql 创建数据表
// $sql = "CREATE TABLE MyGuests (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
// firstname VARCHAR(30) NOT NULL,
// lastname VARCHAR(30) NOT NULL,
// email VARCHAR(50),
// reg_date TIMESTAMP
// )";

    // 创建数据表
    $sql = "CREATE TABLE article (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    articleTitle VARCHAR(60) NOT NULL,
    articleState VARCHAR(30) NOT NULL,
    articleContent VARCHAR(1500),
    articleStatus VARCHAR(20),
    set_date TIMESTAMP
    )";
    
    // 插入数据
    // $sql = "INSERT INTO article (articleTitle, articleState, articleContent,articleStatus)
    // VALUES ('用户收到的H5页面调整', '12', '当用户之前开具的是纸质发票，需要退回发票时，在用户收到的H5退费页面需有文字告知发票寄回地址。视图参考如下：', 10);";
    // $sql .= "INSERT INTO MyGuests (firstname, lastname, email)
    // VALUES ('Mary', 'Moe', 'mary@example.com');";
    // $sql .= "INSERT INTO MyGuests (firstname, lastname, email)
    // VALUES ('Julie', 'Dooley', 'julie@example.com')";
 
// if ($conn->query($sql) === TRUE) {
//     echo "新记录插入成功";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $sql = "SELECT id, firstname, lastname, email FROM MyGuests";
// $result = $conn->query($sql);
 
// if ($result->num_rows > 0) {
//     // 输出数据
//     while($row = $result->fetch_assoc()) {
//         echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. " " . $row["email"]."<br>";
//     }
// } else {
//     echo "0 结果";
// }
 
if ($conn->query($sql) === TRUE) {
    echo "创建数据表创建成功";
} else {
    echo "创建数据表错误: " . $conn->error;
}
 
$conn->close();
?>