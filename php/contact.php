<?php
include 'connect.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql)) {
    echo "Thank you for your message!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
