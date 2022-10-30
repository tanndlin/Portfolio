<?php
	$request = json_decode(file_get_contents("php://input"), true);
	$id = $request["ID"];
	$conn = new mysqli("localhost", "admin", "27isBest", "main");

	if(!$conn->connect_error){
		$query = $conn->prepare("DELETE FROM Contacts WHERE ID = ?");
		$query->bind_param("s", $id);
		$query->execute();
		$query->get_result();
		$conn->close();
	}
	else{
		$error = $conn->connect_error;
	}

	$out = '{"Error": "'.$error.'"}';

	header("Content-Type: application/json");

	echo $out;
?>
