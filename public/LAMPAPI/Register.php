<?php
	$error = null;
	$request = json_decode(file_get_contents("php://input"), true);
	$fName = $request["FirstName"];
	$lName = $request["LastName"];
	$login = $request["Login"];
	$pass= $request["Password"];
	$date = date("Y-m-d H:i:s");
	$conn = new mysqli("localhost", "admin", "27isBest", "main");

	if(!$conn->connect_error){
		$query = $conn->prepare("SELECT * FROM Users WHERE Login = ? AND FirstName = ? AND LastName = ?");
		$query->bind_param("sss", $login, $fName, $lName);
		$query->execute();
		$res = $query->get_result();
		
		if($res->num_rows == 0){
			$query = $conn->prepare("INSERT into Users (DateCreated, DateLastLoggedIn, FirstName, LastName, Login, Password) VALUES (?, ?, ?, ?, ?, ?)");
			$query->bind_param("ssssss", $date, $date, $fName, $lName, $login, $pass);
			$query->execute();
		}
		else{
			$error = "This User Already Exists";
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
