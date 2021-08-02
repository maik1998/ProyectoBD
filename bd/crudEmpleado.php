<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

// Recepción de los datos enviados mediante POST desde el JS   

$idEmpleado= (isset($_POST['idEmpleado'])) ? $_POST['idEmpleado'] : '';
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$apellido = (isset($_POST['apellido'])) ? $_POST['apellido'] : '';
$fechaNacimiento = (isset($_POST['fechaNacimiento'])) ? $_POST['fechaNacimiento'] : '';
$tipoUsuario = (isset($_POST['tipoUsuario'])) ? $_POST['tipoUsuario'] : '';
$idEmpresa = (isset($_POST['idEmpresa'])) ? $_POST['idEmpresa'] : '';
$codigoAreaComun = (isset($_POST['codigoAreaComun'])) ? $_POST['codigoAreaComun'] : '';
$codigoCargo = (isset($_POST['codigoCargo'])) ? $_POST['codigoCargo'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

switch($opcion){
    case 1: //alta
        $consulta = "INSERT INTO empleados (nombre, apellido,fechaNacimiento,tipoUsuario,idEmpresa,codigoAreaComun,codigoCargo) VALUES('$nombre','$apellido','$fechaNacimiento','$tipoUsuario','$idEmpresa','$codigoAreaComun','$codigoCargo') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 

        //$consulta = "SELECT idEmpleado, nombre, apellido,fechaNacimiento,tipoUsuario,idEmpresa,codigoAreaComun,codigoCargo FROM empleados ORDER BY idEmpleado DESC LIMIT 1";
        $consulta = "SELECT * FROM empleados";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2: //modificación
        $consulta = "UPDATE empleados SET nombre='$nombre', apellido='$apellido', fechaNacimiento='$fechaNacimiento', tipoUsuario='$tipoUsuario', idEmpresa='$idEmpresa', codigoAreaComun='$codigoAreaComun' codigoCargo='$codigoCargo' WHERE idEmpleado='$idEmpleado' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT idEmpleado, nombre, apellido,fechaNacimiento,tipoUsuario,idEmpresa,codigoAreaComun,codigoCargo FROM empleados WHERE id='$idEmpleado' ";       
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;      
    case 3://baja
        $consulta = "DELETE FROM empleados WHERE idEmpleado='$idEmpleado' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();  
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);                         
        break;        
}

print json_encode($resultado, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
