<?php
	$i = 0;
	$contactList = array();
	$fName = $lName = $email = $number = $error = null;
	$request = json_decode(file_get_contents("php://input"), true);
	$searchTerm = $request["SearchTerm"];
	$id = $request["UserID"];
	$conn = new mysqli("localhost", "admin", "27isBest", "main");

	if(!$conn->connect_error){
		$query;
		$command = "SELECT * FROM Contacts WHERE";

		if($searchTerm){
			$fName = $lName = $number = $email = '%'.$searchTerm.'%';
			$command.= " (FirstName LIKE ? OR LastName LIKE ? OR PhoneNumber LIKE ? OR Email LIKE ?) AND (UserID = ?)";
			$query = $conn->prepare($command);
			$query->bind_param("sssss", $fName, $lName, $number, $email, $id);
		}
		else{
			$command.= " UserID = ?";
			$query = $conn->prepare($command);
			$query->bind_param("s", $id);
		}

		$query->execute();
		
		$res = $query->get_result();

		if($res->num_rows != 0){
			while($data = $res->fetch_assoc()){
				$currContact = array("ID" => $data["ID"], "DateCreated" => $data["DateCreated"], "FirstName" => $data["FirstName"], "LastName" => $data["LastName"], "Email" => $data["Email"], "PhoneNumber" => $data["PhoneNumber"]);
				$contactList[$i] = $currContact;
				$i++;
			}
		}
		
		if($i == 0){
			$error = "No Contacts Found";	
		}

		$conn->close();
	}
	else{
		$error = $conn->connect_error;
	}
	
	header("Content-Type: application/json");

	$out = '{"Contacts": '.json_encode($contactList).', "Error": "'.$error.'"}';

	echo $out;
?>
