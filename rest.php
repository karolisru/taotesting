<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$fileType = $_GET['type']; //CSV either JSON else  
if($fileType == "CSV"){
	header("Content-type: text/csv");
	echo file_get_contents("testtakers.csv");
} else {
	header("Content-Type: application/json; charset=UTF-8");
	echo file_get_contents("testtakers.json");
}
?>