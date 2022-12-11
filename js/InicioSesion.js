const conexion = require('../../conexionDB.js');


conexion.on('connect', function (err) {
    // If no error, then good to proceed.
    console.log("Conexion establecida con la DB-StoneFruitSL");
});  



$("#btnInicioSesion").on("click", function () {


   let user = document.getElementById('userIS');
    console.log("Estamos en inicio de sesion");

    console.log("voy para inicio");
    console.log(user.value);

    if(user.value === 'admin'){
        window.location.assign('admin.html');
    } else if(user.value ==='pedro.perez'){
        window.location.assign('Perito.html');
    }else if( user.value === 'carlos.sanchez'){
        window.location.assign('User.html');
    }

});

/*

document.getElemenById('id') - Acede a un elemento a traves de su id

document.querySelector('selectorCSS') - Accede al primer elemento que concida con el selector CSS

document.querySelectorAll('selectorCSS') - Accede a todos los elemento que concida con el selector CSS, devuelve un nodeList*/
