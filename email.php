<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';



$mail = new PHPMailer(true);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $mail->isSMTP();
  $mail->Host = 'smtp.zviko.tech';
  $mail->SMTPAuth = true;
  $mail->Username = 'me@zviko.tech';
  $mail->Password = 'vOvd*(k4';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
  $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format. Please try again.";
    exit();
  }

  $to = "recipient@example.com";


  $subject = "New Contact Form Submission from " . $name;


  $message_body = "Name: " . $name . "\r\n";
  $message_body .= "Email: " . $email . "\r\n";
  $message_body .= "Message: " . $message . "\r\n";


  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

 
  if (mail($to, $subject, $message_body, $headers)) {
    header("Location: sent.html");
    exit();
  } else {
    echo "Sorry, something went wrong. Please try again later.";
  }
}
