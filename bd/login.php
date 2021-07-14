<?php
session_start();

include_once 'conexion.php';
$conn=new Conexion();
$conexion = $conn->Conectar();

//recepción de datos enviados por POST desde ajax
$usuario=(isset($_POST['usuario'])) ? $_POST['usuario']: '';
$password=(isset($_POST['password'])) ? $_POST['password']: '';

$pass=md5($password); //Encriptamos la clave dada por el usuario

$consulta= "SELECT * FROM usuarios WHERE usuario='$usuario' AND password='$pass' ";
$res=$conexion->prepare($consulta);
$res->execute();

if($res->rowCount() >=1 ){
    $data= $res->fetchAll(PDO::FETCH_ASSOC);
    //Variables de Session
    $_SESSION['s_usuario'] =$usuario;                 
}else{
    $_SESSION['s_usuario'] = null;
    $data=null;
}

print json_encode($data);
$conexion=null;

//usuario:admin pass:12345
//usuario:demo pass:demo