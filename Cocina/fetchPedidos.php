<?php
include '../backend/sqlVariables.php';

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$res = $conn->query('SELECT * FROM Pedidos');

$output = array();
for($i = 0; $i < $res->num_rows; $i++) $output[$i] = $res->fetch_array(MYSQLI_ASSOC);

echo json_encode($output);

?>