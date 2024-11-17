'use strict';

function borrarDato(name) {
    console.log("Borrando dato...");
    let newDatosAcceso = [];
    let cont = 0;

    // Verificar si existen datos en sessionStorage
    let datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")) || []; // Si no existen, inicializa un array vacío
    if (datosAcceso.length === 0) {
        console.log("No hay datos para borrar.");
        return; // Si no hay datos, sale de la función
    }

    // Filtrar el dato que queremos borrar
    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].nombre === name)) { // eliminar el dato que coincida con el nombre
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
    }

    datosAcceso = [...newDatosAcceso]; // copiar el array actualizado
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso)); // guardar el array actualizado en sessionStorage

    mostrarDatos(); // volver a mostrar los datos
}
