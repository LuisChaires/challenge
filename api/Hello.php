<?php 
	include ('..\utils\config.php');

	if(allowed_request($_SERVER['REQUEST_METHOD'])){
		switch($_SERVER['REQUEST_METHOD']) {
			case 'GET':
					if(isset($_GET['apikey']) && 
						$_GET['apikey'] === APIKEY){
						if(isset($_GET['action']) && 
							function_exists($_GET['action'])) {
						   $_GET['action']();
						}else{
							http_response_code(405);
							message("No such action", 405);
						}
					}else{
						http_response_code(401);
						message("API key needed.", 401);
					}
				break;
			
			case 'POST':
				if(isset($_POST['apikey']) && 
					$_POST['apikey'] === APIKEY){
					if(isset($_POST['action']) && 
						function_exists($_POST['action'])) {
					   $_POST['action']();
					}else{
						http_response_code(405);
						message("No such action", 405);
					}
				}else{
					http_response_code(401);
					message("API key needed.", 401);
					}
				break;
		}
	}else{
		http_response_code(405);
		message("Request type not supported", 405);
	}

	function hello(){
		http_response_code(200);
		message("Hello, World.", 200);
	}

	function allowed_request($param){
		switch($param) {
			case 'GET':case 'POST':
				return true;
				break;

			case 'PUT':case 'PATCH':
				case 'COPY':case 'HEAD':case 'OPTIONS':
				case 'LINK':case 'UNLIK':case 'PURGE':
				case 'DELETE': case 'LOCK': case 'UNLOCK':
				case 'PROPFIND':case 'VIEW':
			default:
				return false;
				break;
		}
	}

	function message($param, $code){
		echo json_encode(array(
			'message' => $param,
			'code' => $code
		));
	}

?>