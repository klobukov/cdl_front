<?php
require_once("admin_connect.php");
$sql = "SELECT subdivision FROM services GROUP BY subdivision";
$result = send_query($sql);
$subd = [];
for($i = 0; $i < $result->num_rows; $i++){
	$row = $result->fetch_row();
	array_push($subd, $row[0]);
}
echo json_encode($subd);
?>