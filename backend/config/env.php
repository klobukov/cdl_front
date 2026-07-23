<?php

$is_dev = false;
if ($_SERVER['REMOTE_ADDR'] === '127.0.0.1' || $_SERVER['REMOTE_ADDR'] === '::1') {
    $is_dev = true;
}
if (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false || strpos($_SERVER['HTTP_HOST'], '192.168.') !== false) {
    $is_dev = true;
}


if ($is_dev) {
    // handle CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
} else {
    error_reporting(0);
}

?>