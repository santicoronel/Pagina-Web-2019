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
$id = json_decode($_POST["x"], false);

$sql = "DELETE FROM Pedidos SET WHERE id_plato = '".$id."'";
$conn->query($sql);
?>