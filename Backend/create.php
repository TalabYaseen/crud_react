<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once './config.php';
    include_once './users.php';

    $database = new DB();
    $db = $database->getConnection();

    $user = new User($db);
    $data = json_decode(file_get_contents("php://input"));

    $user->first_name = $data->first_name;
    $user->second_name = $data->second_name;
    $user->last_name = $data->last_name;
    $user->Occupation = $data->Occupation;
    $user->password = $data->password;
    $user->phone = $data->phone;
    $user->photo = $data->photo;
    $user->email = $data->email;
    if($user->createUser()){
        echo json_encode("User created.");
    } else{
        echo json_encode("Failed to create user.");
    }
?>