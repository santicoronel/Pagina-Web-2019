<!DOCTYPE html>
<html>
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


include 'head_and_logo.html';
include 'body.html';
include 'bottom.html';

?>
</html>