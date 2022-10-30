<?php
	$error = null;
	$request = json_decode(file_get_contents("php://input"), true);
	$id = $request["ID"];
	$conn = new mysqli("localhost", "admin", "27isBest", "main");

	if(!$conn->connect_error){
		$command = "UPDATE Contacts SET";

		if($request["NewFirst"]){
			$temp = $command;
			$command.=" FirstName = ? WHERE ID = ?";
			$query = $conn->prepare($command);
			$query->bind_param("ss", $request["NewFirst"], $id);
			$query->execute();
			$query->close();
			$command = $temp;
		}
	
		if($request["NewLast"]){
			$temp = $command;
			$command.=" LastName = ? WHERE ID = ?";
			$query = $conn->prepare($command);
			$query->bind_param("ss", $request["NewLast"], $id);
			$query->execute();
			$query->close();
			$command = $temp;
		}
			
		if($request["NewEmail"]){
			$temp = $command;
			$command.=" Email = ? WHERE ID = ?";
			$query = $conn->prepare($command);
			$query->bind_param("ss", $request["NewEmail"], $id);
			$query->execute();
			$query->close();
			$command = $temp;
		}
	
		if($request["NewNumber"]){
			$temp = $command;
			$command.=" PhoneNumber = ? WHERE ID = ?";
			$query = $conn->prepare($command);
			$query->bind_param("ss", $request["NewNumber"], $id);
			$query->execute();
			$query->close();
			$command = $temp;
		}

		$conn->close();
	}
	else{
		$error = $conn->connect_error;
	}

	$out = '{"Error":"'.$error.'"}';

	header("Content-Type: application/json");

	echo $out;
?>
