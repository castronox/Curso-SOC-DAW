

<?php 

$correo = $_POST['correo'];
$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];


//echo $correo . " " . $nombre . " " . $mensaje;


$destinatario = "castronox@gmail.com";
$asunto = "Nuevo mensaje desde el portfolio."; 
$cuerpo = '
    <html> 
        <head> 
            <title>Prueba de envio de correo</title> 
        </head>

        <body> 
            <h1>Te ha contactado ' .$nombre .' </h1>
            <p> 
                Contacto:  '.$correo . ' - ' . $asunto .'  <br><br><br>
                Mensaje: '.$mensaje.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $nombre <$correo>\r\n";
mail($destinatario,$asunto,$cuerpo,$headers);

echo "<script>alert('El Email se ha enviado!');window.location.href='../index.html';</script>"; 
?> 

<a href="../index.html">Volver a inicio</a>


</body>
</html>
