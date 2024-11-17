'use strict';

function grabarDato(name, value) {
    console.log("Grabando dato...");
    
    // Recuperamos el array de datos del localStorage
    let datosAcceso = JSON.parse(localStorage.getItem("localAcceso")) || [];

    // Comprobamos si el dato ya existe
    let existe = false;
    for (let i = 0; i < datosAcceso.length; i++) {
        if (datosAcceso[i].nombre === name) {
            datosAcceso[i].valor = value; // Si existe, actualizamos el valor
            existe = true;
            break;
        }
    }

    // Si el dato no existía, lo añadimos
    if (!existe) {
        datosAcceso.push({ nombre: name, valor: value });
    }

    // Guardamos los datos actualizados de nuevo en el localStorage
    localStorage.setItem("localAcceso", JSON.stringify(datosAcceso));

    mostrarDatos(); // Mostrar los datos actualizados
}
