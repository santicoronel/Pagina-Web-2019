<?php

include './sqlVariables.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo 'Connection failed';
}


header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$sql = "INSERT INTO Pedidos (id_plato, plato, mesa, listo) VALUES ('".$obj->id."', '".$obj->name."', '".$obj->table."', NULL) ";
$conn->query($sql);
?>
