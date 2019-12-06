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
    // $sql = "CREATE TABLE article (
    // id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    // articleTitle VARCHAR(60) NOT NULL,
    // articleState VARCHAR(30) NOT NULL,
    // articleContent VARCHAR(1500),
    // articleStatus VARCHAR(20),
    // articleImage VARCHAR(500),
    // articleMark VARCHAR(150),
    // articleType VARCHAR(60),
    // articleSetBase VARCHAR(20),
    // created_date TIMESTAMP
    // )";
    
    // 插入数据
    //$sql = "INSERT INTO article (articleTitle, articleState, articleContent,articleStatus,articleImage,articleMark,articleType,articleSetBase)
    //VALUES ('用户收到的H5页面调整', '12', '当用户之前开具的是纸质发票，需要退回发票时，在用户收到的H5退费页面需有文字告知发票寄回地址。视图参考如下：', 10, 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg','退费页面需有文字告知发票寄回地址。视图参考如下',2,3);";
    $sql = "INSERT INTO article (articleTitle, articleState, articleContent,articleStatus,articleImage,articleMark,articleType,articleSetBase)
    VALUES ('沃尔沃新财路：除了卖车，他们还打算卖自动驾驶技术', '12', '作为汽车制造商的沃尔沃在这次合作里，不仅能让从竞争对手手中挣到钱，还能大大增加自动驾驶汽车的数量。不过要想把自动驾驶技术卖给其他汽车制造商，还是有很多技术问题需要解决。', 10, 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg','不过要想把自动驾驶技术卖给其他汽车制造商，还是有很多技术问题需要解决。',2,3);";
    //$sql = "INSERT INTO article (articleTitle, articleState, articleContent,articleStatus,articleImage,articleMark,articleType,articleSetBase)
    //VALUES ('谁才是真正的“妖怪手表”？精灵宝可梦 GO Plus 将在一周后决战 Apple Watch', '12', '但对于任天堂来说，通过软件联动 Apple Watch 来增加 Pokemon GO 的可玩性并不是主要目标。擅长用周边“压榨”粉丝钱包的他们，最后还是推出了一款 Pokemon GO 的可穿戴设备 Pokemon GO Plus。', 10, 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg','将在一周后决战 Apple Watch',2,3);";
 
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