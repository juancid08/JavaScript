"use strict";

// Eliminar cookie en todas las rutas posibles
function eraseCookie(name) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Strict;`;
    document.cookie = `${name}=; Max-Age=0; path=/ejercicios; SameSite=Strict;`;
    document.cookie = `${name}=; Max-Age=0; path=/ejercicios/ejer01; SameSite=Strict;`;
    document.cookie = `${name}=; Max-Age=0; path=/ejercicios/ejer02; SameSite=Strict;`;
}
