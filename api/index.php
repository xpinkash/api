<?php 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	
	$con = mysqli_connect('localhost','root','', 'apidb');

	if (isset($_GET['action'])) {
		function resultToArray($result) {
		    $rows = array();
		    while($row = $result->fetch_assoc()) {
		        $rows[] = $row;
		    }
		    return $rows;
		}

		if ($_GET['action'] === 'getUsers') {
			$query = mysqli_query($con, "SELECT name from tbl_users");

			$data = array(
				'result' => resultToArray($query),
				'count' => count($query),
				'success' => 1
			);

			echo json_encode($data);
		}

		if ($_GET['action'] === 'addUser') {
			$name = $_POST['name'];

			$query = mysqli_query($con, "INSERT INTO tbl_users (`name`) VALUES ('$name')");

			$data = array(
				'message' => 'Record was saved',
				'success' => $query
			);

			echo json_encode($data);
		}
	}
?>