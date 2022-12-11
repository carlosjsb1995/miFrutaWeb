
/*var Tratamientos = [];

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
}*/

var Tratamientos;

function cargarTratamientos( tratamientosPHP){


    Tratamientos = tratamientosPHP;

    let divAlmacen = document.getElementById('contenedorPrincipal');
    var dival =`
    <style>
	.marginz{
		
		margin-bottom: 10px;
	}
</style>
    <div class ="row marginz">
        <div class="col-6"> <button class="btn btn-primary " data-toggle="modal" data-target="#añadirTratamiento-modal" style="background: red;" onclick="AñadirTratamientos()"> Añadir Nuevo Tratamiento</button>
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
tratamientosPHP.forEach(element => {


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
                                                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#editarTratamientoModal" onclick="prueba(${i})"><svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                    </svg></button>
                                                                    <button type="button" class="btn btn-danger"><svg width="1.2em" height="1.5em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                                                    </svg></button>
                                                                    </div>

                                                                    
                                                                </div>     
                                                    </div>
                                                    <div id="collapse${i}" class="collapse" arial-labelledby="heading${i}" data-parent="#accordion">
                                                        <div class="row card-body">
                                                            <div class="col">
                                                                <p><strong>COMENTARIO:</strong> ${element.comentario}</p>
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

function prueba(index){

    console.log("entro en la mierda esta");

    var divEAñadir= document.getElementById("EditarTratmiento");

    console.log("entro en la mierda esta");

    var elemt = Tratamientos[index];
    console.log("pruebo con el index");
    console.log(elemt);

    divEAñadir.innerHTML =  `

    <style>
					.caja {
						border: 3px solid #EC4811;
						display: inline-block;
						margin: 20px;
						
						
					}

                    .margenes{
                        margin: 20px;
                    }
                    .margenesElementos{
                        margin: 5px;
                    }
			</style>
    
    
    <div class="caja">    
        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Agricultor: </label>
            </div>
            <div class="col-9 align-self-center">
                <input type="text" id="agrEdit" name="agrEdit" class="margenesElementos" size="35" value="${elemt.agricultor}">
            </div>
        </div>

        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Localización: </label>
            </div>
            <div class="col-9 align-self-center">
                <input type="text" id="locEdit" name="locEdit" class="margenesElementos" size="35" value="${elemt.localizacion}">
            </div>
        </div>

        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Fecha: </label>
            </div>
            <div class="col-9 align-self-center">
                <input type="text" id="fchEdit" name="fchEdit" class="margenesElementos" size="35" value="${elemt.fecha}">
            </div>
        </div>

        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Tipo: </label>
            </div>
            <div class="col-9 align-self-center">
                <input type="text" id="tipEdit" name="tipEdit" class="margenesElementos" size="35" value="${elemt.tipo}">
            </div>
        </div>

        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Compuesto: </label>
            </div>
            <div class="col-9 align-self-center">
                <input type="text" id="copEdit" name="copEdit" class="margenesElementos" size="35" value="${elemt.compuesto}">
            </div>
        </div>

        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Realizado: </label>
            </div>
            <div class="col-9 align-self-center">
                <input type="text" id="reaEdit" name="reaEdit" class="margenesElementos" size="35" value="${elemt.estado}">
            </div>
        </div>

        <div class="row">
            <div class="col-3 align-self-center">
                <label class="margenesElementos">Comentarios: </label>
            </div>
            <div class="col-9 align-self-center">
                <textarea id="comEdit" name="comEdit" class="margenesElementos" rows="5" cols="38">"${elemt.comentario}"</textarea>
            </div>
        </div>

        

                    
    
    </div>
    
    <button class="btn btn-success margenes" data-dismiss="modal" aria-label="Cerrar" onclick="ModificarT(${index})">
			Modificar Tratamiento
    </button>
    
                `

}



     
function AñadirT(){

    var agri= document.getElementById("agri").value;
    var localz= document.getElementById("localz").value;
    var fech= document.getElementById("fech").value;
    var tipo= document.getElementById("tipo").value;
    var comp= document.getElementById("comp").value;
    var estado= document.getElementById("estado").value;
    var comentario= document.getElementById("comentario").value;
   
    var tratam = {
        agricultor: agri,
        localizacion: localz,
        fecha : fech,
        tipo: tipo,
       compuesto: comp,
       estado: estado,
       COMENTARIO: comentario
    }
    
    Tratamientos.push(tratam);
    
    abrirTratamientos();

}

function ModificarT(index){
    var fech= document.getElementById("copEdit").value;
    console.log(fech);
    console.log("antes del cambio");
    console.log(Tratamientos[index].compuesto); 
    Tratamientos[index].compuesto = fech;
    console.log("despues del cambio");
    console.log(Tratamientos[index].compuesto); 

    //aqui volveriamos a cargar la guncion cargar tratamientos*
    $.post('editarTratamiento.php',
    {accion:'editarTratamiento',com:Tratamientos[index].compuesto},
    function (datos,estado){

        alert("Informacion:"+datos+"\nEstado:"+estado);
    });

    cargarTratamientos(Tratamientos);
}

/*function EditarTratamientos(index){

    var divEAñadir= document.getElementById("EditarTratmiento");

    console.log("entro en la mierda esta");

    var elemt = Tratamientos[index];

    divEAñadir.innerHTML =  `

    
    
    <input type="button" value="">
    <label >Usuario</label>
            <input type="text" class="form-control" name="usuario" placeholder="Escribe tu usuario">
               
               
                <div class=" margintp col-12"> <input type="text" id="agri" value="${elemt.agricultor}"></input></div>
                
                <div class=" marginltp col-3"></div>
                <div class=" marginltp col-4"><button class="close btn btn-success" data-dismiss="modal" aria-label="Cerrar" onclick="ModificarT(${index})">
									Modificar Tratamiento
                                </button></div>
                <div class=" marginltp col-4"></div>
                `

}

function AñadirTratamientos(){

    var divAñadir= document.getElementById("ModalAñadirTratamiento");

    var agri="";
    var localz="";
    var fech="";
    var tipo="";
    var comp="";
    var estado="SI";
    var comentario="";

    divAñadir.innerHTML =  `

    
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
                <div class=" margintp col-8"> <input type="text" id="agri" value="${agri}"></input></div>
                </div>

                <div class="row">
                <div class=" marginltp col-3"><h4>Localizacion: </h4> </div>
                <div class=" margintp col-8"> <input type="text" id="localz" value="${localz}"></input></div>
                </div>

                <div class="row">
                <div class=" marginltp col-3"><h4>Fecha: </h4> </div>
                <div class=" margintp col-8"> <input type="text" id="fech" value="${fech}"></input></div>
                </div>
                
                <div class="row">
                <div class=" marginltp col-3"><h4>Tipo: </h4> </div>
                <div class=" margintp col-8"> <input type="text" id="tipo" value="${tipo}"></input></div>
                </div>

                <div class="row">
                <div class=" marginltp col-3"><h4>Compuesto: </h4> </div>
                <div class=" margintp col-8"> <input type="text" id="comp" value="${comp}"></input></div>
                </div>
                <div class="row">
                <div class=" marginltp col-3"><h4>Estado: </h4> </div>
                <div class=" margintp col-8"> <input type="text" id="estado" value="${estado}"></input></div>
                </div>
                <div class="row">
                <div class=" marginltp col-3"><h4>Comentario </h4> </div>
                <div class=" margintp col-8"> <textarea type="text" id="comentario" value="${comentario}"></textarea></div>
                </div>
                
                <div class="row">
                <div class=" marginltp col-3"></div>
                <div class=" marginltp col-4"><button class="close btn btn-success" data-dismiss="modal" aria-label="Cerrar" onclick="AñadirT()">
									Añadir Tratamiento
                                </button></div>
                <div class=" marginltp col-4"></div>
                </div>`

    
    
}*/