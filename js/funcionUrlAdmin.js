var datosEntrada = [];


 var agricultores = {
     nombre: "Jose Sanchez Caja",
     variedad: "SummerGood",
     fecha : "16/07/2020",
     peso: 2.456,
     escandallo : {
         total: 30,
         PEDRISCOROZADURA: 2,
         FUERADECALIBRE : 9,
         INVALIDA: 19},
    azucar: "13, 7º Brix",
    Observaciones: "La mayoria de la fruta se encuentra en un estado demasiado madura ( aprx 20% de la entrega se declara como invalida), se recomineda la recolecta lo antes posible"
}
var agricultores1 = {
    nombre: "Jose Sanchez Caja",
    variedad: "SummerGood",
    fecha: "15/07/2020",
    peso: 3.089,
    escandallo: {
        total: 23,
        PEDRISCOROZADURA: 10,
        FUERADECALIBRE: 10,
        INVALIDA: 2
    },
    azucar: "13, 7º Brix",
    Observaciones: "Sin observaciones"
}
datosEntrada.push(agricultores);
datosEntrada.push(agricultores1);

var Tratamientos = [];

 var tratamiento = {
     agricultor: "Jose Sanchez Caja",
     localizacion: "5-67",
     fecha : "10/07/2020",
     tipo: "INSECTICIDAS",
    compuesto: "Solución Potásica K2O, 5 L (Hc)",
    estado: "SI",
    COMENTARIO: "Tratar lo antes posible, se observa mucha fruta picada de la mosca"
}

var tratamiento1 = {
    agricultor: "Jose Sanchez Caja",
    localizacion: "5-67",
    fecha : "07/05/2020",
    tipo: "HERBICIDAS",
   compuesto: "Roundup UltraPlus 500ml (Hc)",
   estado: "SI",
   COMENTARIO: " "
}

Tratamientos.push(tratamiento);
Tratamientos.push(tratamiento1);


function abrir(){
    console.log("esto va");


    let divEntradas = document.getElementById('contenedorPrincipal');
    var j=0;
    var par = "";
    /*for(let i=0;i<3;i++){
        console.log("esty en el for" + i);
        j=i;
        par += `<h1> esto es el parrago ${j}</h1>`;
      
    }*/

    entradas = `
    <style>
	.marginz{
		
		margin-bottom: 10px;
	}
</style>
    <div class ="row marginz">
    <div class="col-4"> 
    <button class="btn btn-primary " data-toggle="modal" data-target="#añadirEntradaModal" style="background: red;" onclick="AñadirEntrada()"> Añadir Nueva Entrada</button>
    </div>
    <div class="col-2"> 
    <select class="browser-default custom-select">
            <option selected="true" value="2020" >2020</option>
            </select>
    </div>
    <div class="col-3"> 
            <select class="browser-default custom-select">
            <option selected="true" value="Todos" >Todos</option>
            <option value="JoseSanchezCaja">Jose Sanchez Caja</option>
            </select>
    </div>
    <div class="col-3"> 
            <select class="browser-default custom-select">
            <option selected="true" value="Todos" >Todos</option>
            <option value="SummerGold">SummerGold</option>
            </select>
    </div>
    </div>
    
    
    
    <style>
        .titulo{

        font-weight: bold;
        color: #EC4811;
        font-size:20px;

    }
     </style >
        <div class="row" >
            <div class=" titulo col-2" style="padding-left: 25px">
                <p> Agricultor</p>
            </div>
            <div class="titulo col-2" style="padding-left: 25px">
                <p> Variedad</p>
            </div>
            <div class="titulo col-2" style="padding-left: 15px">
                <p> Fecha</p>
            </div>
            <div class="titulo col-2">
                <p> Peso</p>
            </div>
            <div class="titulo col-2">
                <p>Escandallo</p>
            </div>
        </div>`;

    //element.innerHTML = par;
    var i=0;
    datosEntrada.forEach(element => {
        console.log("ELEMENTO");
        console.log(element);

        var escandallo = 100 - element.escandallo.total;
        var pe = parseInt(escandallo) + element.escandallo.PEDRISCOROZADURA;
        var ca = parseInt(pe) + element.escandallo.FUERADECALIBRE;
        var inv = parseInt(ca) + element.escandallo.INVALIDA;



        console.log(escandallo);
        console.log(pe);
        console.log (ca);
        console.log(inv);
        entradas += `                  
                        <div class="row">
                         <div class="col-12">
                            <div id="accordion">
                                <!-- CARD #1 -->
                                <div class="card">
                                                    <div class="card-header" id="heading${i}">
                                                                        <style>
                                                                            .datos{
                                                            
                                                                                font-style: oblique;
                                                                                font-weight: bold;
                                                                                }
                                                                        </style>
                                        
                                                            <div class="row">
                                                                    <div class=" datos col-2 align-self-center">
                                                                    <p>${element.nombre}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <p>${element.variedad}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <p>${element.fecha}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <p>${element.peso} kg</p>
                                                                    </div>
                                                                    <div class="col-2 align-self-center">
                                                                    <p style="padding-left: 45px">${element.escandallo.total}%</p>
                                                                    </div>
                                                                    <div class=col-2">
                                                                    <button type="button" class="btn btn-dark" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse1"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                                    <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                                    </svg></button>
                                                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editarEntradaModal" onclick="EditarEntradaf(${i})"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                    </svg></button>
                                                                    <button type="button" class="btn btn-danger"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                                                    </svg></button>

                                                                    </div>
                                                                </div>     
                                                    </div>
                                                    <div id="collapse${i}" class="collapse" arial-labelledby="heading${i}" data-parent="#accordion">
                                                        <div class="row card-body">
                                                            <div class="col-6">
                                                                <div class="row">
                                                                <div class="col-6">
                                                                <h5>Agricultor:<h5> </div>
                                                                <div class="col-6">
                                                                <p>${element.nombre}</p></div>
                                                                </div>

                                                                <div class="row">
                                                                <div class="col-6">
                                                                <h5>Variedad:<h5> </div>
                                                                <div class="col-6">
                                                                <p>${element.variedad}</p></div>
                                                                </div>

                                                                <div class="row">
                                                                <div class="col-6">
                                                                <h5>Fecha<h5> </div>
                                                                <div class="col-6">
                                                                <p>${element.fecha}</p></div>
                                                                </div>

                                                                <div class="row">
                                                                <div class="col-6">
                                                                <h5>Kilos:<h5> </div>
                                                                <div class="col-6">
                                                                <p>${element.peso}kg</p></div>
                                                                </div>

                                                                <div class="row">
                                                                <div class="col-6">
                                                                <h5>Azucar:<h5> </div>
                                                                <div class="col-6">
                                                                <p>${element.azucar}</p></div>
                                                                </div>

                                                                <div class="row">
                                                                <div class="col-6">
                                                                <h5>Observaciones:<h5> </div>
                                                                <div class="col-6">
                                                                <p>${element.Observaciones}</p></div>
                                                                </div>

                                                            </div>
                                                            <div class="col-6">
                                                                        <center><h4>Escandallo</h4></center>
                                                                        <style>
                                                                            .Grafico${i}{

                                                                                width: 250px;
                                                                                height: 250px;
                                                                                border-radius: 50%;
                                                                                background: conic-gradient( 
                                                                                                        #292b2c ${escandallo}%,#69A50B ${escandallo}% ${pe}%,#EC4811 ${pe}% ${ca}%,blue ${ca}%);

                                                                            box-shadow: 1px 1px 5px 1px rgb(70,70,70);

                                                                            }
                                                                        </style>
                                                                                <center><div class="Grafico${i}"></div></center>
                                                                                <h5 style="color:#292b2c">${escandallo}% VALIDO</h5>
                                                                                <h5 style="color:#69A50B">${element.escandallo.PEDRISCOROZADURA}% PEDRISCO/ROZADURA</h5>
                                                                                <h5 style="color:#EC4811">${element.escandallo.FUERADECALIBRE}% FUERA DE CALIBRE</h5>
                                                                                <h5 style="color:blue">${element.escandallo.INVALIDA}% INVALIDA</h5>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                `

    i++;
    });
        divEntradas.innerHTML = entradas;
 
}


function abrirAlmacen(rol){

console.log("ENTRO EN ALMACEN");
    let divAlmacen = document.getElementById('contenedorPrincipal');
  
    let rol = rol;
   
    console.log(rol);


    $.ajax({

        url: '../php/almacenList.php',
        type: 'POST',
        data: { user },
        success: function (response) {

            console.log(response);
        }

            
    });

    divAlmacen.innerHTML = `
    <style>
	.marginz{
		
		margin-bottom: 10px;
	}
</style>
    <div class ="row marginz">
    <div class="col-3"> <button class="btn btn-primary " data-toggle="modal" data-target="#fm-modal" style="background: red;" onclick="AlmacenActual()"> ESTADO ACTUAL ALMACEN </button>
    </div>
    <div class="col-3"> <button class="btn btn-primary " data-toggle="modal" data-target="#fm-modal" style="background: red;" onclick="AlmacenActual()"> AÑADIR NUEVO MATERIAL</button>
    </div>
    <div class="col-3"> 
    <select class="browser-default custom-select">
                <option selected="true" value="2020" >2020</option>
                </select>
    </div>
    <div class="col-3"> 
            <select class="browser-default custom-select">
            <option selected="true" value="Todos" >Todos</option>
            <option value="JoseSanchezCaja">Jose Sanchez Caja</option>
            </select>
    </div>
    </div>
    <div class="row">
     
			<div class="col">
				<!-- table para separar los celdas y las filas con una linea  -->
				<!-- .table-dark Nos permite cambiar los colores de la tabla a osucors -->
				<!-- .table-striped Nos permite alternar colores entre cada fila -->
				<!-- .table-bordered Nos permite agregarle bordes a la tabla -->
				<!-- .table-hover Nos permite agregarle un hover a las filas -->
				<!-- .table-sm Nos permite hacer la tabla mas pequeña eliminando paddings -->
				<!-- .table-responsive-xx Nos permite adaptar nuestra tabla a dispositivos moviles -->
				<table class="table table-sm table-hover table-bordered table-responsive-lg">
					<thead>
						<tr>
							<th>Agricultor</th>
							<th>Material</th>
                            <th>Cantidad</th>
                            <th>   </th>
						</tr>
					</thead>

					<!-- .table-active - color gris -->
					<!-- .table-success  - color verde -->
					<!-- .table-warning  - color naranja -->
					<!-- .table-danger  - color rojo -->
					<!-- .table-info - color azul -->
					<!-- estos son colores opacos-->
					<tr>
						<td>Jose Sanchez Caja</td>
						<td>Pale derma 3451</td>
                        <td style="color:red">-22</td>
                        <td> <center>
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editarEntradaModal" onclick="EditarEntradaf(0)"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></button>
                         <button type="button" class="btn btn-danger"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                          </svg></button>
                          </center></td>
					</tr>

					<!-- .bg-primary  - azul -->
					<!-- .bg-success  - verde -->
					<!-- .bg-warning  - naranja -->
					<!-- .bg-danger - rojo  -->
					<!-- .bg-info - azulverdoso -->
					<tr>
						<td>Jose Sanchez Caja</td>
						<td>Pale derma 3451</td>
                        <td>6</td>
                        <td> <center>
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editarEntradaModal" onclick="EditarEntradaf(0)"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></button>
                         <button type="button" class="btn btn-danger"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                          </svg></button>
                          </center></td>
					</tr>
					<tr>
						<td>Jose Sanchez Caja</td>
						<td>Pale derma 3451</td>
                        <td>5</td>
                        <td> <center>
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editarEntradaModal" onclick="EditarEntradaf(0)"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></button>
                         <button type="button" class="btn btn-danger"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                          </svg></button>
                          </center></td>
					</tr>
				</table>
			</div>
    </div>
       `
}



function AlmacenActual(){
   

        console.log("funcion almacen actual en funcion");

    let modalAlmacen = document.getElementById("ModalAlmacen");

    modalAlmacen.innerHTML = 
    
    `

    <div class="row">
     
			<div class="col">
				<!-- table para separar los celdas y las filas con una linea  -->
				<!-- .table-dark Nos permite cambiar los colores de la tabla a osucors -->
				<!-- .table-striped Nos permite alternar colores entre cada fila -->
				<!-- .table-bordered Nos permite agregarle bordes a la tabla -->
				<!-- .table-hover Nos permite agregarle un hover a las filas -->
				<!-- .table-sm Nos permite hacer la tabla mas pequeña eliminando paddings -->
				<!-- .table-responsive-xx Nos permite adaptar nuestra tabla a dispositivos moviles -->
				<table class="table table-sm table-hover table-bordered table-responsive-lg">
					<thead>
						<tr>
							<th>Localizacion</th>
							<th>Material</th>
							<th>Cantidad</th>
						</tr>
					</thead>
                        <tr>
						<td>Fabrica</td>
						<td>Pale derma 3451</td>
						<td>634</td>
					</tr>
					<tr>
						<td>Fabrica</td>
						<td>Pale madera 422</td>
						<td>567</td>
                    </tr>
                    <tr>
						<td>Fabrica</td>
						<td>Caja derma 262</td>
						<td>2789</td>
                    </tr>
                    <tr>
						<td>Fabrica</td>
						<td>Caja madera 264</td>
						<td>3089</td>
                    </tr>
                    <tr>
						<td>Fabrica</td>
						<td>Plancha derma 127</td>
						<td>1345</td>
                    </tr>
                    <tr>
						<td>Fabrica</td>
						<td>Plancha madera 128</td>
						<td>2054</td>
					</tr>
					<!-- .table-active - color gris -->
					<!-- .table-success  - color verde -->
					<!-- .table-warning  - color naranja -->
					<!-- .table-danger  - color rojo -->
					<!-- .table-info - color azul -->
					<!-- estos son colores opacos-->
					<tr>
						<td>Jose Sanchez Caja</td>
						<td>Pale derma 3451</td>
						<td style="color:red">-11</td>
					</tr>

					<!-- .bg-primary  - azul -->
					<!-- .bg-success  - verde -->
					<!-- .bg-warning  - naranja -->
					<!-- .bg-danger - rojo  -->
					<!-- .bg-info - azulverdoso -->
					
				</table>
            </div>
        </div>`
}


function abrirTratamientos() {

    console.log("ENTRO EN TRATAMIENTOS");
    let divAlmacen = document.getElementById('contenedorPrincipal');
     
    var dival =`
    <style>
	.marginz{
		
		margin-bottom: 10px;
	}
</style>
    <div class ="row marginz">
        <div class="col-6"> 
        </div>
        <div class="col-3"> 
        <select class="browser-default custom-select">
                <option selected="true" value="2020" >2020</option>
                </select>
        </div>
        <div class="col-3"> 
                <select class="browser-default custom-select">
                <option selected="true" value="Todos" >Todos</option>
                <option value="JoseSanchezCaja">Jose Sanchez Caja</option>
                </select>
        </div>
    </div>

    <style>
        .titulo{

        font-weight: bold;
        color: #EC4811;
        font-size:20px;

    }
     </style >
        <div class="row" >
            <div class=" titulo col-2" style="padding-left: 25px">
                <p>Agricultor</p>
            </div>
            <div class="titulo col-1" style="padding-left: 0px">
                <p>Localizacion</p>
            </div>
            <div class="titulo col-2" style="padding-left: 40px">
                <p>Fecha</p>
            </div>
            <div class="titulo col-2">
                <p>Tipo</p>
            </div>
            <div class="titulo col-2">
                <p>Compuesto</p>
            </div>
            <div class="titulo col-2">
                <p>Realizado</p>
            </div>

        </div>
`
var i=0;
Tratamientos.forEach(element => {


    dival +=   `<div class="row">
     
			            <div class="col-12">
				                <div id="accordion">
                                                <!-- CARD #1 -->
                                                <div class="card">
                                                    <div class="card-header" id="heading${i}">
                                                                        <style>
                                                                            .datos{
                                                            
                                                                                font-style: oblique;
                                                                                font-weight: bold;
                                                                                }
                                                                        </style>
                                        
                                                            <div class="row">
                                                                    <div class=" datos col-2 align-self-center">
                                                                    <p>${element.agricultor}</p>
                                                                    </div>
                                                                    <div class="datos col-1 align-self-center">
                                                                    <p>${element.localizacion}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <p>${element.fecha}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <p>${element.tipo}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <p>${element.compuesto}</p>
                                                                    </div>
                                                                    <div class="datos col-1 align-self-center">
                                                                    <p style="color:green">${element.estado}</p>
                                                                    </div>
                                                                    <div class="datos col-2 align-self-center">
                                                                    <button type="button" class="btn btn-dark" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}"><svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                                    <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                                    </svg></button>
                                                                    
                                                                    </div>

                                                                    
                                                                </div>     
                                                    </div>
                                                    <div id="collapse${i}" class="collapse" arial-labelledby="heading${i}" data-parent="#accordion">
                                                        <div class="row card-body">
                                                            <div class="col">
                                                                <p><strong>COMENTARIO:</strong> ${element.COMENTARIO}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
			                    </div>
                         </div>
                    </div>`
    i++;
 });

 divAlmacen.innerHTML = dival;

 
}


function EditarEntradaf(index){

console.log("funcion editar entrada");

   var elem =  datosEntrada[index];
   console.log(elem);

    let modalAlmacen = document.getElementById("EditarEntrada");

    modalAlmacen.innerHTML =

        `

    
    <style>
    .marginltp{
    margin-left: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    }
    .margintp{
    
    margin-top: 1em;
    margin-bottom: 1em;
    }
    </style>
     
                <div class="row">
                <div class=" marginltp col-3"><h4>Agricultor: </h4> </div>
                <div class=" margintp col-6"> <input type="text" value="${elem.nombre}"></input></div>
                </div>

                <div class="row">
                <div class=" marginltp col-3"><h4>Variedad: </h4> </div>
                <div class=" margintp col-6"> <input type="text" value="${elem.variedad}"></input></div>
                </div>

                <div class="row">
                <div class=" marginltp col-3"><h4>Fecha: </h4> </div>
                <div class=" margintp col-6"> <input type="text" value="${elem.fecha}"></input></div>
                </div>
                
                <div class="row">
                <div class=" marginltp col-3"><h4>Peso: </h4> </div>
                <div class=" margintp col-6"> <input type="text" id="pesoIn" value="${elem.peso}"></input></div>
                </div>

                <div class="row">
                <div class=" marginltp col-3"><h4>Azucar: </h4> </div>
                <div class=" margintp col-6"> <input type="text" id="pesoIn" value="${elem.azucar}"></input></div>
                </div>
                
                <div class="row">
                <div class=" marginltp col-3"></div>
                <div class=" marginltp col-4"><button class="close btn btn-success" data-dismiss="modal" aria-label="Cerrar" onclick="ModificarElemento(${index})">
									Modificar Entrada
                                </button></div>
                <div class=" marginltp col-4"></div>
                </div>`
}
     
function ModificarElemento(index){

    var peso= document.getElementById("pesoIn").value;
    console.log(peso);
    console.log("antes del cambio");
    console.log(datosEntrada[index].peso);
    datosEntrada[index].peso = peso;

    abrir();




}


function AñadirEntrada(){

    console.log("funcion NUEVA entrada");

    
 
     let modalAlmacen = document.getElementById("añadirEntrada");
      var agr="";
      var variedad = "";
      var fecha = "";
      var peso = "";
      var azucar = "";
      var escTotal = "";
      var escPe = "";
      var escFC = "";
      var esciN = "";
      var  OBSERVACIONES = "";
 
     modalAlmacen.innerHTML =
 
         `
 
     
     <style>
     .marginltp{
     margin-left: 1em;
     margin-top: 1em;
     margin-bottom: 1em;
     }
     .margintp{
     
     margin-top: 1em;
     margin-bottom: 1em;
     }
     </style>
      
                 <div class="row">
                 <div class=" marginltp col-3"><h4>Agricultor: </h4> </div>
                 <div class=" margintp col-6"> <input type="text" id="agr" value="${agr}"></input></div>
                 </div>
 
                 <div class="row">
                 <div class=" marginltp col-3"><h4>Variedad: </h4> </div>
                 <div class=" margintp col-6"> <input type="text" id="variedad"value="${variedad}"></input></div>
                 </div>
 
                 <div class="row">
                 <div class=" marginltp col-3"><h4>Fecha: </h4> </div>
                 <div class=" margintp col-6"> <input type="text" id="fecha" value="${fecha}"></input></div>
                 </div>
                 
                 <div class="row">
                 <div class=" marginltp col-3"><h4>Peso: </h4> </div>
                 <div class=" margintp col-6"> <input type="text" id="peso" value="${peso}"></input></div>
                 </div>
 
                 <div class="row">
                 <div class=" marginltp col-3"><h4>Azucar: </h4> </div>
                 <div class=" margintp col-6"> <input type="text" id="azucar" value="${azucar}"></input></div>
                 </div>

                 <div class="row">
                 <div class=" marginltp col-3"><h4>Escandallo Total: </h4> </div>
                 <div class=" margintp col-6"> <input type="number" id="escTotal" value="${escTotal}"></input></div>
                 </div>

                 <div class="row">
                 <div class=" marginltp col-3"><h4>PEDRISCO/ROZADURA: </h4> </div>
                 <div class=" margintp col-6"> <input type="number" id="escPe" value="${escPe}"></input></div>
                 </div>

                 <div class="row">
                 <div class=" marginltp col-3"><h4>FUERADECALIBRE: </h4> </div>
                 <div class=" margintp col-6"> <input type="number" id="escFC" value="${escFC}"></input></div>
                 </div>

                 <div class="row">
                 <div class=" marginltp col-3"><h4>INVALIDA: </h4> </div>
                 <div class=" margintp col-6"> <input type="number" id="esciN" value="${esciN}"></input></div>
                 </div>
                 <div class="row">
                 <div class=" marginltp col-6"><h4>OBSERVACIONES: </h4> </div>
                 <div class=" margintp col-6"> <textarea type="text" id="OBSERVACIONES" value="${OBSERVACIONES}"></textarea></div>
                 </div>
                 
                 <div class="row">
                 <div class=" marginltp col-3"></div>
                 <div class=" marginltp col-4"><button class="close btn btn-success" data-dismiss="modal" aria-label="Cerrar" onclick="aEntrada()">
                                     Añadir Entrada
                                 </button></div>
                 <div class=" marginltp col-4"></div>
                 </div>`
}

function aEntrada(){
    console.log("aEntrada()");

      var agr=document.getElementById("agr").value;
      var variedad =document.getElementById("variedad").value;
      var fecha = document.getElementById("fecha").value;
      var peso = document.getElementById("peso").value;
      var azucar = document.getElementById("azucar").value;
      var escTotal = document.getElementById("escTotal").value;
      var escPe = document.getElementById("escPe").value;
      var escFC = document.getElementById("escFC").value;
      var esciN = document.getElementById("esciN").value;
      var  OBSERVACIONES = document.getElementById("OBSERVACIONES").value;

      var agricult = {
        nombre: agr,
        variedad: variedad,
        fecha : fecha,
        peso: parseInt(peso),
        escandallo : {
            total: parseInt(escTotal),
            PEDRISCOROZADURA: parseInt(escPe),
            FUERADECALIBRE : parseInt(escFC),
            INVALIDA: parseInt(esciN) },
       azucar: azucar,
       Observaciones: OBSERVACIONES
   }

   console.log("IMPRIMO EL OBJETO");
   console.log(agricult);
   datosEntrada.push(agricult);
   abrir();

}

function UserError(){

    let divAlmacen = document.getElementById('contenedorPrincipal');

    divAlmacen.innerHTML = `
    
    <div class="alert alert-info mt-5" id="alerta">
					Lorem ipsum dolor sit amet.
					<button type="button" class="close" data-dismiss="alert" aria-label="Cerrar">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
    
    `
}