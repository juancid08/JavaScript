'use strict'; 

function borrarDato(id) {
    console.log("Borrando datos...");

    // Abre o crea la base de datos de IndexedDB
    solicitudDB = indexedDB.open(nombreBD, versionBD);

    // Maneja errores al abrir la base de datos
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    // Se ejecuta cuando la base de datos se abre con éxito
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result; // Obtiene la base de datos
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD); // Crea una transacción en modo "lectura y escritura"
        
        // Elimina un registro de la base de datos por su `id`
        canalBD.delete(id);
    };

    // Llama a `mostrarDatos()` después de intentar borrar el dato (aunque no necesariamente espera a que se complete)
    mostrarDatos();
}
