<?php
	date_default_timezone_set("America/New_York");
	$fName = $lName = $date = $error = null;
	$request = json_decode(file_get_contents('php://input'), true);
	$login = $request["Login"];
	$pass = $request["Password"];
	$conn = new mysqli("localhost", "admin", "27isBest", "main");

	if(!$conn->connect_error){
		$query = $conn->prepare("SELECT * FROM Users WHERE Login =? AND Password =?");
		$query->bind_param("ss", $login, $pass);
		$query->execute();
		$res = $query->get_result();
		
		if($res->num_rows != 0){
			$data = $res->fetch_assoc();
			$fName = $data["FirstName"];
			$lName = $data["LastName"];
			$id = $data["ID"];
			$date = date("Y-m-d H:i:s");
		}
		else{
			$error = "Invalid Login or Password";
		}

		$conn->close();
	}
	else{
		$error = $conn->connect_error;
	}

	$out = '{"FirstName": "'.$fName.'", "LastName":"'.$lName.'", "ID": "'.$id.'", "Date": "'.$date.'", "Error": "'.$error.'"}';

	header("Content-Type: application/json");

	echo $out;
?>
