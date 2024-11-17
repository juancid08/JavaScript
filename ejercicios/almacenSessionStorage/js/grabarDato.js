'use strict';

function grabarDato(nombre, apellido, valor) {
    console.log("Grabando dato...");

    // Recuperamos el array de datos del sessionStorage (si no existe, inicializamos un array vacío)
    let datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")) || [];

    // Comprobamos si el dato ya existe (usando solo el nombre como referencia)
    let existe = false;
    for (let i = 0; i < datosAcceso.length; i++) {
        if (datosAcceso[i].nombre === nombre) {
            // Si existe, actualizamos el apellido y valor
            datosAcceso[i].apellido = apellido;
            datosAcceso[i].valor = valor;
            existe = true;
            break;
        }
    }

    // Si el dato no existía, lo añadimos
    if (!existe) {
        datosAcceso.push({ nombre, apellido, valor });
    }

    // Guardamos los datos actualizados de nuevo en sessionStorage
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso));

    // Llamamos a la función para mostrar los datos actualizados
    mostrarDatos();
}
