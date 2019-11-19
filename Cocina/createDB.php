<?php

include '../backend/sqlVariables.php';

$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE TABLE IF NOT EXISTS Pedidos (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    plato VARCHAR(100) NOT NULL,
    mesa INT(4) UNSIGNED,
    listo BOOLEAN DEFAULT false )";

$conn->query($sql);

$conn->close();
?>