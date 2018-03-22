<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['topic'])&&$_POST['topic']!="")&&(isset($_POST['sms'])&&$_POST['sms']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
$name = $_POST['name'];
$email = $_POST['email'];
$topic = $_POST['topic'];
$sms = $_POST['sms'];
$to = "wipermailwiper@gmail.com";
$subject = $topic;
$headers = 'From: Заявка на сайт' . "\r\n";
$body = 'Заказ от '.$name.'и его email:'.$email.' Его сообщение:'.$sms. "\r\n";
if(mail($to, $subject, $body, $headers))
{
  echo 'Ваш заказ отправлен, с вами свяжутся';
}
else {
  echo "Ошибка";
}
}



?>
