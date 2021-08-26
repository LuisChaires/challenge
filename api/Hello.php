<?php 
	//localhost:8080/..../api/user.php

	switch($_SERVER['REQUEST_METHOD']) {
		case 'POST':
		case 'PUT':
		case 'DELETE':
				echo json_encode(array(
					'message' => "Request type not supported"
				));
			break;
		case 'GET': 
				echo json_encode(array(
					'message' => "Hello, World."
				));
			break;

		default:
			echo json_encode(array(
					'message' => "404 message not found"
				));
			break;
	};
?>