"use strict" ;
// setIndexedDB.js
function setIndexedDB(nombre, valor) {
    initializeIndexedDB().then((db) => {
        const transaction = db.transaction(["miAlmacen"], "readwrite"); // Inicia una transacción en "miAlmacen" con permisos de escritura.
        const store = transaction.objectStore("miAlmacen"); // Obtiene el objeto almacén.
        store.put({ nombre, valor }); // Guarda el valor bajo la clave "nombre".
    }).catch(error => console.error("Error al guardar en IndexedDB:", error)); // Manejo de errores.
}

