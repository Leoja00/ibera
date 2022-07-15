<?php 
	$destinatario="leoja00@gmail.com";
	$titulo="Contacto desde el sitio web";


	$nombre=$_POST['nombre'];
	$email=$_POST['email'];
    $telefono=$_POST['telefono'];
	$duda=$_POST['duda'];
	$carta="De: $nombre \n";
	$carta.="Correo: $email\n";
	$carta.="Telefono:$telefono";
    $carta.="Consulta:$duda";
	$headers='From: $email' . "\r\n" .
    'Reply-To: $email' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	mail($destinatario,$titulo,$carta,$headers);

 ?> 