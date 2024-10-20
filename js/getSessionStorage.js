"use strict";

// Función para obtener datos de sessionStorage
function getSessionStorage(name) {
    const value = sessionStorage.getItem(name);
    console.log(`sessionStorage: Recuperado ${name}=${value}`);
    return value ? decodeURIComponent(value) : null;
}

