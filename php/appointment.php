<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'connect.php';

$name = $_POST['name'];
$email = $_POST['email'];
$service = $_POST['service'];
$date = $_POST['date'];
$time = $_POST['time'];

$stmt = $conn->prepare("INSERT INTO appointment (name, email, service, date, time) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $service, $date, $time);

if ($stmt->execute()) {
    echo "Appointment booked successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
