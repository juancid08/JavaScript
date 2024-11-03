"use strict" ;
// indexedDB.js
function initializeIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("MiBaseDeDatos", 2); // Abre o crea una base de datos con nombre "MiBaseDeDatos" y versión 2.

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            // Crea el almacén "miAlmacen" si no existe, con "nombre" como clave principal.
            if (!db.objectStoreNames.contains("miAlmacen")) {
                db.createObjectStore("miAlmacen", { keyPath: "nombre" });
            }
            // Crea el almacén "usuarios" si no existe, con "username" como clave principal.
            if (!db.objectStoreNames.contains("usuarios")) {
                db.createObjectStore("usuarios", { keyPath: "username" });
            }
        };

        request.onsuccess = function(event) {
            resolve(event.target.result); // Resuelve la promesa con la instancia de la base de datos.
        };

        request.onerror = function(event) {
            reject("Error al abrir IndexedDB: " + event.target.errorCode); // Rechaza la promesa en caso de error.
        };
    });
}
