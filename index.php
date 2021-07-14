<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Inicio de Sesión</title>
	<link rel="stylesheet" type="text/css" href="plugins/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="plugins/sweetalert2/sweetalert2.min.css">
	<link rel="stylesheet" type="text/css" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
	<img class="wave" src="img/wave.png">
	<div class="container">
		<div class="img">
			<img src="img/bg.svg">
		</div>
		<div class="login-content">
			<form id="formLogin" class="form" action="" method="post">
				<img src="img/avatar.svg">
				<h3 class="title">Bienvenido</h2>
					<div class="input-div one">
						<div class="i">
							<i class="fas fa-user"></i>
						</div>
						<div class="div">
							<h5>Usuario</h5>
							<input id="usuario" class="input form-control " type="text" name="usuario">
						</div>
					</div>
					<div class="input-div pass">
						<div class="i">
							<i class="fas fa-lock"></i>
						</div>
						<div class="div">
							<h5>Contraseña</h5>
							<input id="password" class="input form-control" type="password" name="password">
						</div>
					</div>
					<a href="#">Olvido su contraseña?</a>
					<input id="submit" name="submit" class="btn form-control " type="submit" value="Ingresar">
			</form>
		</div>
	</div>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="plugins/bootstrap/bootstrap.min.js"></script>
	<script type="text/javascript" src="plugins/popper/popper.min.js"></script>
	<script type="text/javascript" src="plugins/sweetalert2/sweetalert2.all.min.js"></script>
	<script type="text/javascript" src="js/code.js"></script>
</body>

</html>