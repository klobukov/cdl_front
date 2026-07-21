<?php
//указать соотв. праметры для хостинга
define("SERVERNAME", "localhost");
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "crimealab");
// добавить это error_reporting(0);

$conn = new mysqli (SERVERNAME, USERNAME, PASSWORD, DATABASE);
if(!$conn) {
	die('ошибка подключения к mysql <br>');
}

$conn->set_charset("utf8");

function send_query($x){
	global $conn;
	$n = $conn->query($x);
	if($n){
		return $n;
	} else {
		$conn->close();
	}
}






?>