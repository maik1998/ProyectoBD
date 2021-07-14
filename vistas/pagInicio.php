<?php
session_start();

if($_SESSION["s_usuario"] === null){
    header("Location: ../index.php");
}

?>
<!doctype html>
<html>
    <head>
        <link rel="shortcut icon" href="#" />
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Inicio </title>
        <link rel="stylesheet" href="../plugins/bootstrap/bootstrap.min.css">
        <link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.min.css">
        <link rel="stylesheet" href="../css/style.css">           
    </head>    
    <body>
      
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="jumbotron">
                        
                        <h1 class="display-4 text-center">¡Bienvenido!</h1>
                      <h2 class="text-center">Usuario: <span class="badge badge-primary"><?php echo $_SESSION["s_usuario"];?></span></h2>    
                      <p class="lead text-center">Esta es la página de inicio, luego de un LOGIN correcto.</p>
                      <hr class="my-4">          
                      <a class="btn btn-danger btn-lg" href="../bd/logout.php" role="button">Cerrar Sesión</a>
                    </div>
                </div>
            </div>
        </div>        
        <script type="text/javascript" src="../js/main.js"></script>
        <script type="text/javascript" src="../js/jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="../plugins/bootstrap/bootstrap.min.js"></script>
        <script type="text/javascript" src="../plugins/popper/popper.min.js"></script>
        <script type="text/javascript" src="../plugins/sweetalert2/sweetalert2.all.min.js"></script>
        <script type="text/javascript" src="../js/code.js"></script>
    </body>
</html>