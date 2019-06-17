<?php
$servername = "PaginaWeb";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql = "CREATE DATABASE DB";
$conn->query($sql);

$sql = "CREATE TABLE Indice (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    seccion VARCHAR(30) NOT NULL";
$conn->query($sql);

$sql = "CREATE TABLE Combos_Ofertas (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    oferta VARCHAR(30) NOT NULL,
	disponibilidad VARCHAR,
    descripcion VARCHAR,
    precio INT(4) UNSIGNED,
	disponible BOOLEAN DEFAULT true
	id_items INT(4) UNSIGNED DEFAULT 0";
$conn->query($sql);

$sql = "CREATE TABLE Oferta_Carta (
    id_oferta INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    id_plato INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY";
$conn->query($sql);

$sql = "CREATE TABLE Carta (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	plato VARCHAR(30) NOT NULL,
	precio INT(4) UNSIGNED,
	disponible BOOLEAN DEFAULT true
	id_guarnicion INT(4) UNSIGNED DEFAULT 0";
$conn->query($sql);

$sql = "CREATE TABLE Plato_Guarnicion (
    id_plato INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    id_guarnicion INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY";
$conn->query($sql);


include 'head_and_logo.html';
include 'bottom.html';



$conn->close();
?>