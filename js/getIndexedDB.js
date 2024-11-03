"use strict" ;
// getIndexedDB.js
function getIndexedDB(nombre) {
    return new Promise((resolve, reject) => {
        initializeIndexedDB().then((db) => {
            const transaction = db.transaction(["miAlmacen"], "readonly"); // Inicia una transacción de solo lectura.
            const store = transaction.objectStore("miAlmacen"); // Obtiene el objeto almacén.
            const request = store.get(nombre); // Solicita el valor asociado a la clave "nombre".

            request.onsuccess = function(event) {
                resolve(event.target.result); // Resuelve la promesa con el resultado de la consulta.
            };

            request.onerror = function() {
                reject("Error al obtener datos de IndexedDB"); // Rechaza la promesa en caso de error.
            };
        });
    });
}
