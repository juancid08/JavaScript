'use strict';

let solicitudDB, bd, canalBD;
const nombreBD = "DATOS";
const versionBD = 1;
const tablaBD = "datos";

// Abrir la conexión a IndexedDB
solicitudDB = indexedDB.open(nombreBD, versionBD);

solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`);
};

solicitudDB.onsuccess = function (event) {
    console.info('Conexión satisfactoria');
    bd = event.target.result;
};

solicitudDB.onupgradeneeded = function (event) {
    console.info('Base de datos creada');
    bd = event.target.result;
    const registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true });
    registros.createIndex("nombre", "nombre", { unique: false });
    registros.createIndex("raza", "raza", { unique: false });
    registros.createIndex("imagen", "imagen", { unique: false });
};

// Event listener para guardar datos
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", async function () {
    const nombre = document.getElementById("nombre").value;
    const raza = document.getElementById("raza").value;
    const imagen = document.getElementById("imagen").value;
    
    // Esperamos que los datos se guarden antes de proceder
    await grabarDato(nombre, raza, imagen);

    // Después de guardar, mostramos los datos actualizados
    mostrarDatos();
});

// Función para agregar un personaje a la base de datos
async function agregarPersonaje() {
    const personaje = await obtenerPersonajeAleatorio();
    if (personaje) {
        await grabarDato(personaje.nombre, personaje.raza, personaje.imagen);
        mostrarDatos(); // Mostrar después de agregar
    }
}

// Función para agregar exactamente 5 personajes a la base de datos sin eliminar los anteriores
async function agregarCincoPersonajes() {
    masCinco.disabled = true; // Deshabilitar el botón mientras se ejecuta

    let personajesAgregados = 0;  // Contamos cuántos personajes hemos agregado
    const personajes = new Set(); // Usamos un Set para evitar duplicados

    // Mientras no hayamos agregado exactamente 5 personajes, repetimos el proceso
    while (personajesAgregados < 5) {
        const personaje = await obtenerPersonajeAleatorio();
        if (personaje) {
            const personajeString = JSON.stringify(personaje);
            // Aseguramos que no sea un duplicado antes de agregar
            if (!personajes.has(personajeString)) {
                personajes.add(personajeString);
                await grabarDato(personaje.nombre, personaje.raza, personaje.imagen);
                personajesAgregados++; // Aumentamos el contador de personajes agregados
            }
        }
    }

    // Mostrar los datos después de agregar los 5 personajes
    mostrarDatos();

    masCinco.disabled = false; // Volver a habilitar el botón
}

// Llamada a las funciones de los botones
const masUno = document.getElementById('masUno');
const masCinco = document.getElementById('masCinco');

masUno.addEventListener('click', async function () {
    await agregarPersonaje();
});

masCinco.addEventListener('click', async function () {
    await agregarCincoPersonajes();
});

// Mostrar los datos
mostrarDatos();
