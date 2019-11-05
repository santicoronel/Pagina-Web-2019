<?php
include './sql_variables.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "CREATE TABLE IF NOT EXISTS Indice (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    seccion VARCHAR(100) NOT NULL )";
$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS Combos_Ofertas (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    oferta VARCHAR(100) NOT NULL,
	disponibilidad VARCHAR(100),
    descripcion VARCHAR(100),
    precio INT(4) UNSIGNED,
	disponible BOOLEAN DEFAULT true )";
$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS Carta (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	plato VARCHAR(100) NOT NULL,
	precio INT(4) UNSIGNED,
    tipo VARCHAR(100) NOT NULL,
    imagen VARCHAR(200),
	disponible BOOLEAN DEFAULT true )";
$conn->query($sql);

$conn->close();

?>