<?php 
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$duda = $_POST['duda'];

$destinatario="leoja00@gmail.com";
$asunto="Consulta sobre Quinchos";


$cuerpo = '
<html>
	<head>
		<title>Prueba de envio de correo</title>
	</head>
	<body>
		<h3><b>Consulta hecha desde sitio web</b></h3>
		<h4>
			NOMBRE: '.$nombre . ' <br>
			TELÉFONO: '.$telefono.' <br>
			EMAIL: '.$email.'<br>
			<br>
			CONSULTA: '.$duda.'
		</h4>
		<p>Saludos!!!</p>
		
	</body>
</html>	
';
$headers = "MIME-Version: 1.0 \r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .="FROM: $nombre <$email>\r\n";

mail($destinatario,$asunto,$cuerpo,$headers);
echo "Correo enviado";
?>