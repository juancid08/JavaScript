"use strict";

// Función que establece una cookie con nombre, valor y tiempo de expiración
function setCookie(name, value, minutes) {
        // Calcula la fecha de expiración de la cookie
    const date = new Date();
    if (minutes) {
        date.setTime(date.getTime() + (minutes * 60 * 1000)); // Convierte minutos a milisegundos
    }
    const expires = minutes ? `; expires=${date.toUTCString()}` : "";
    document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/; SameSite=Strict;`;
}