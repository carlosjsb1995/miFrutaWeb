<?php

session_start();
$rol = $_SESSION['rol'];
$user = $_SESSION['nombre'];

//echo $rol.'</br>';

            $mysqli = new mysqli('localhost', 'root', '', 'mifruta');
			$mysqli->set_charset("utf8");
			//$con = mysqli_connect("localhost", "root", "", "mifruta");

			$res = $mysqli->query("SELECT * FROM tratamientos where perito='".$user."'");
           
            $tratamientos;
            while($f = $res->fetch_object()){
					
                if($f->agricultor){


                $tratamientos[] = array("agricultor"=>$f->agricultor,"localizacion"=>$f->localizacion,"fecha"=> $f->fecha,
                "tipo"=>$f->tipo,"compuesto"=>$f->compuesto,"estado"=>$f->estado,"comentario"=>$f->comentario);
                } 
                    
            }
            $mysqli->close();

            $json = json_encode($tratamientos);





?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>StoneFruit</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="js/tecnico.js"></script>
    <script src="../js/jquery-3.5.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../css/styleStoneFruitSL.css"></script>
    

</head>

<body style="background: #f3f3f3;">
    <!-- .navbar-expand-lg	Sirve para indicar en que punto aparecera el toggler -->
    <!-- .navbar-light 		Indicamos que usaremos un fondo claro -->
    <!-- .navbar-dark 		Indicamos que usaremos un fondo oscuro -->
    <!-- .bg-light 			Establecemos un fondo light para el navbar -->
    <!-- Tambien podemos darle nuestro propio color de fondo con CSS -->

    <!-- .fixed-top 		Nos permite fijar el menu en la parte superior -->
    <!-- .fixed-bottom 		Nos permite fijar el menu en la parte inferior -->


    <!-- EL NAV FUERA DEL CONTAINER PARA QUE AVARQUE EL 100%; -->
    <style>
        .marginz {

            margin-bottom: 30px;
        }
    </style>

    <nav class=" marginz navbar navbar-expand-md navbar-dark bg-dark ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content"
            aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Brand -->
        <img src="../img/logo2.png">
        <style>
            .dark {
                background-color: #292b2c;
                color: rgb(131, 133, 133);
            }

            ;
        </style>
        <!-- Links -->
        <div class="collapse navbar-collapse justify-content-end" id="nav-content">
            <ul class="navbar-nav">
               
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick='cargarTratamientos(<?php echo $json; ?>)'>Tratamientos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../index.html">Cerrar Sesion</a>
                </li>
            </ul>
    </nav>
    <br>
    <br>
    <br>
    <br>
    <div class="container" id="contenedorPrincipal">
    <div  class = "jumbotron">
			<div  class = "container text-center">
				<h1> <strong> Bienvenido </ strong >  <?php  echo  $_SESSION['nombre']; ?> </h1>
                <p> Rol | <span  class = "label label-info " style="color: #69A50B; font-weight: bold;"> <?php  echo  $_SESSION['rol'];?> </span> </p>
            </div>
        </div>


    </div>
    <div class="modal fade" id="añadirTratamiento-modal" tabindex="-1" role="dialog" aria-labelledby="fm-modal" aria-hidden="true">
        <div class="modal-dialog">
            <div  id="ModalAñadirTratamiento" class="modal-content">
                
            </div>
        </div>
    </div>

    <div class="modal fade" id="editarTratamientoModal" tabindex="-1" role="dialog" aria-labelledby="fm-modal" aria-hidden="true">
        <div class="modal-dialog">
            <div id="EditarTratmiento" class="modal-content">
                
            </div>
        </div>
    </div>
        
    <div class=" row alert alert-success" role="alert">
        <div class="col-4">
            <img src="../img/logo.png">
        </div>
        <div class="col-4 align-self-center">
            <center><strong>Polígono El Prado / Calle Carlos SN - Mérida Extremadura </strong></center>
        </div>
        <div class="col-4 align-self-center">
            <center> <img src="../img/soporte.png">
                admin@stonefruit.es</center>
        </div>
    </div>
   
    
</body>

</html>