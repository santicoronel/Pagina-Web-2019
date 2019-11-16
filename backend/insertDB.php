<?php

include './sqlVariables.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo 'Connection failed';
} 

$sql = "INSERT INTO Indice (`id`, `seccion`) VALUES (NULL, 'Carnes')";
$conn->query($sql);
$sql = "INSERT INTO Indice (`id`, `seccion`) VALUES (NULL, 'Hamburguesas')";
$conn->query($sql);
$sql = "INSERT INTO Indice (`id`, `seccion`) VALUES (NULL, 'Cervezas')";
$conn->query($sql);


$sql = "INSERT INTO Menu 
        (id, plato, precio, seccion, imagen, disponible)
    VALUES
        (NULL, 'Hamburguesa Especial', '350', 'Hamburguesas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0RF4ScfR26Uti2rmUPLbj8qyUJUBLSBOvVsquV3OOeNQuFAKI', '1')";
$conn->query($sql);

$sql = "INSERT INTO Menu 
        (id, plato, precio, seccion, imagen, disponible)
    VALUES
        (NULL, 'Ravioles', '200', 'Pastas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpSa1xnR7-2kGScMhxHv4hql9RFq5av4m8BU2phZtlBhnds68K', '1')";
$conn->query($sql);


$sql = "INSERT INTO
    Combos_Ofertas (id, oferta, disponibilidad, descripcion, precio, disponible)
  VALUES 
    (NULL, 'COMBO ROMA', 'SIEMPRE', 'JEJE', '6969', '1')";
$conn->query($sql);


$conn->close();

?>