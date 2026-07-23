<?php

require_once __DIR__ . '/config/env.php';
require_once(__DIR__ . '/config/db.php');

$conn = new mysqli ($db_host, $db_user, $db_pass, $db_name);
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