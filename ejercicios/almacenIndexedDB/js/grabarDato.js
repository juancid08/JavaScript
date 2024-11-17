'use strict'; 

function grabarDato(nombre, raza, imagen) {
    console.log("Grabando datos...");

    // Abre o crea la base de datos de IndexedDB
    const solicitudDB = indexedDB.open(nombreBD, versionBD);

    return new Promise((resolve, reject) => {
        // Maneja errores al abrir la base de datos
        solicitudDB.onerror = function (event) {
            console.error(`IndexedDB error: ${event.target.errorCode}`);
            reject("Error al abrir la base de datos");
        };

        // Ejecuta esta función cuando se abre la base de datos con éxito
        solicitudDB.onsuccess = function (event) {
            const bd = event.target.result; // Obtiene la base de datos
            const transaction = bd.transaction(tablaBD, "readwrite"); // Crea una transacción en modo "lectura y escritura"
            const canalBD = transaction.objectStore(tablaBD); // Obtiene la referencia al "object store"

            // Usa un índice para comprobar si el nombre ya existe en la base de datos
            const indice = canalBD.index("nombre");
            const solicitud = indice.get(nombre);

            solicitud.onsuccess = function () {
                const registroExistente = solicitud.result;

                if (registroExistente) {
                    // Si el personaje ya existe, actualiza los datos
                    registroExistente.raza = raza;
                    registroExistente.imagen = imagen;
                    canalBD.put(registroExistente); // Guarda los datos actualizados
                } else {
                    // Si el personaje no existe, lo agrega como un nuevo registro
                    canalBD.put({ nombre, raza, imagen }); // Guarda el nuevo registro
                }
            };

            // Maneja errores al comprobar si el personaje existe
            solicitud.onerror = function () {
                console.error("Error al comprobar si el personaje existe");
                reject("Error al comprobar si el personaje existe");
            };

            // Se ejecuta cuando la transacción se completa con éxito
            transaction.oncomplete = function () {
                resolve(); // Resuelve la promesa indicando que se ha completado
            };

            // Maneja errores durante la transacción
            transaction.onerror = function (event) {
                console.error("Error al agregar o actualizar el dato:", event.target.error);
                reject("Error al agregar o actualizar el dato");
            };
        };
    });
}
