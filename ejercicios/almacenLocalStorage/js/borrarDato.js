'use strict';

function borrarDato(name) {
    console.log("Borrando dato...");
    let newDatosAcceso = [];
    let cont = 0;

    datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); // obtener los datos del LocalStorage
    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].nombre == name)) { // eliminar el dato que coincida con el nombre
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
    }
    datosAcceso = [...newDatosAcceso]; // copiar el array actualizado
    localStorage.setItem("localAcceso", JSON.stringify(datosAcceso)); // guardar el array actualizado

    mostrarDatos(); // volver a mostrar los datos
}
