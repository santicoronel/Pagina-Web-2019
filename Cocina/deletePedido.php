<?php

include '../backend/sqlVariables.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo 'Connection failed';
}


header("Content-Type: application/json; charset=UTF-8");
$id = json_decode($_POST["x"], false);

$sql = "UPDATE Pedidos SET pendiente = false WHERE id = '".$id."'";
$conn->query($sql);
?>