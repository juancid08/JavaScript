
"use strict";

window.onload = () => {
    const greetingMessage = document.getElementById("greetingMessage");
    const username = getCookie("username"); // Obtengo el nombre de usuario de la cookie

    // Comprobar si estás en main.html
    if (window.location.pathname.includes("main.html")) {
        // Comprueba si el mensaje ya se ha mostrado
        const messageShown = localStorage.getItem("greetingMessageShown");

        // Si no se ha mostrado el mensaje y hay un usuario
        if (!messageShown && username) {
            greetingMessage.innerText = `¡Bienvenido de nuevo, ${username}!`;
            greetingMessage.classList.add("show");
            setTimeout(() => {
                greetingMessage.classList.remove("show");
                greetingMessage.classList.add("hide");
            }, 3000);
            // Marcar como mostrado
            localStorage.setItem("greetingMessageShown", "true");
        }

        // Si hay usuario, establece un temporizador para redirigir si la sesión expira
        if (username) {
            setTimeout(() => {
                // Redirigir a la página de login si la cookie expira
                eraseCookie("username"); // Eliminar cookie
                alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
                redirectToLogin(); // Redirigir al login
            }, 120000); 
        } else {
            // Redirigir a la página de login si no hay cookie
            redirectToLogin();
        }
    } else {
        // En cualquier otro HTML, redirigir si no hay usuario
        if (!username) {
            redirectToLogin();
        } else {
            
            setTimeout(() => {
                // Redirigir a la página de login si la cookie expira
                eraseCookie("username"); // Eliminar cookie
                alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
                redirectToLogin(); // Redirigir al login
            }, 120000); 
        }
    }

    // Configuración del botón de cerrar sesión
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            eraseCookie("username"); // Eliminar cookie
            setTimeout(() => {
                redirectToLogin(); // Redirigir al login
            }, 500); 
        });
    }
};

// Función que redirige al login dependiendo de la ruta actual
function redirectToLogin() {
    const path = window.location.pathname; 

    // Comprobar si estás en una de las subcarpetas de ejercicios
    if (path.includes("/ejercicios/minicalculadora/index.html") || path.includes("/ejercicios/conversorbases/index.html")) {
        console.log("Redirigiendo a la raíz...");
        window.location.href = "../../index.html"; 
    } else if (path.includes("/main.html")) {
        window.location.href = "index.html"; 
    } else {
        console.log("No se necesita redirección.");
    }
}
