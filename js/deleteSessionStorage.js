"use strict";

// Función para eliminar datos de sessionStorage
function deleteSessionStorage(name) {
    sessionStorage.removeItem(name);
    console.log(`sessionStorage: Eliminada la clave ${name}`);
}

// Función para cerrar sesión
function endSession() {
    deleteSessionStorage("loggedIn");
    deleteSessionStorage("username");
}
