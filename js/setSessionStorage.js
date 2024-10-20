"use strict";

// Función para guardar datos en sessionStorage
function setSessionStorage(name, value) {
    sessionStorage.setItem(name, encodeURIComponent(value || ""));
    console.log(`sessionStorage: ${name}=${encodeURIComponent(value || "")}`);
}

