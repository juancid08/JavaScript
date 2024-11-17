'use strict';

if (window.sessionStorage) {
    const nombre = document.getElementById("nombre"); // para acceder al valor del input para el nombre
    const apellido = document.getElementById("apellido"); // para acceder al valor del input para el apellido
    const valor = document.getElementById("valor"); // para acceder al valor del input para la clave
    const grabar = document.getElementById("guardar"); // para comprobar cuando se ha pulsado el botón 'guardar'

    mostrarDatos(); // nada más cargar la página muestro el contenido de 'sessionStorage'
    
    grabar.addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
        // Llamamos a la función grabarDato pasándole el nombre, apellido y valor
        grabarDato(nombre.value, apellido.value, valor.value);
    });
} else {
    alert("El navegador no soporta sessionStorage");
}
