<?php
define("SERVERNAME", "localhost");
define("USERNAME", "u0142_ashram");
define("PASSWORD", "ixS5e3$8ash007!@!");
define("DATABASE", "u0142932_crimealab");
error_reporting(0);

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