<?php
	date_default_timezone_set("America/New_York");
	$error = null;
	$request = json_decode(file_get_contents("php://input"), true);
	$date = date("Y-m-d H:i:s");
	$fName = $request["FirstName"];
	$lName = $request["LastName"];
	$email = $request["Email"];
	$number = $request["PhoneNumber"];
	$id = $request["UserID"];
	$conn = new mysqli("localhost", "admin", "27isBest", "main");

	if(!$conn->connect_error){
		$query = $conn->prepare("INSERT INTO Contacts (DateCreated, FirstName, LastName, Email, PhoneNumber, UserID) VALUES (?, ?, ?, ?, ?, ?)");
		$query->bind_param("ssssss", $date, $fName, $lName, $email, $number, $id);
		$query->execute();
		$conn->close();
	}
	else{
		$error = $conn->connect_error;
	}

	$out = '{"Error": "'.$error.'"}';

	header("Content-Type: application/json");

	echo $out;
?>
