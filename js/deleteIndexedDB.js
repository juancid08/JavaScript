"use strict" ;
function deleteFromIndexedDB(nombre) {
    initializeIndexedDB().then((db) => {
        const transaction = db.transaction(["miAlmacen"], "readwrite"); // Inicia una transacción en "miAlmacen" con permisos de escritura.
        const store = transaction.objectStore("miAlmacen"); // Obtiene el objeto almacén.
        store.delete(nombre); // Elimina el registro asociado a la clave "nombre".
    }).catch(error => console.error("Error al eliminar de IndexedDB:", error)); // Manejo de errores.
}
