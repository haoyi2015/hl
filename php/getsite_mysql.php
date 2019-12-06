<?php
$q = isset($_GET["q"]) ? intval($_GET["q"]) : '';
 
if(empty($q)) {
    echo '请选择一个网站';
    exit;
}
 
$con = mysqli_connect('localhost','root','root');
if (!$con)
{
    die('Could not connect: ' . mysqli_error($con));
}
// 选择数据库
mysqli_select_db($con,"myDB");
// 设置编码，防止中文乱码
mysqli_set_charset($con, "utf8");


// 条件查询
// $sql="SELECT * FROM Websites WHERE id = '".$q."'";
// $sql = "SELECT id, firstname, lastname FROM MyGuests";

$sql="SELECT * FROM MyGuests WHERE id = '".$q."'";

 
$result = mysqli_query($con,$sql);
 
echo "<table border='1'>
<tr>
<th>ID</th>
<th>网站名</th>
<th>网站 URL</th>
<th>Alexa 排名</th>
<th>国家</th>
</tr>";
 
while($row = mysqli_fetch_array($result))
{
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['firstname'] . "</td>";
    echo "<td>" . $row['lastname'] . "</td>";
    echo "<td>" . $row['email'] . "</td>";
    echo "<td>" . $row['reg_date'] . "</td>";
    echo "</tr>";
}
echo "</table>";
 
mysqli_close($con);
?>