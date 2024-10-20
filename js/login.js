"use strict";

document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar el inicio de sesión
    function handleLogin() {
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        const storedUsername = "Juan"; 
        const storedPassword = "dejame"; 

        // Validar credenciales
        if (usernameInput === storedUsername && passwordInput === storedPassword) {
            // Guardar en sessionStorage
            setSessionStorage("loggedIn", "true");
            setSessionStorage("username", usernameInput); // Guardar el nombre del usuario

            // Redirigir a la página principal
            window.location.href = "./main.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    }

    // Agregar evento al botón de inicio de sesión
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.onclick = handleLogin;
    }

    // Función para redirigir al login
    function redirectToLogin() {
        const path = window.location.pathname;

        if (path.includes("/ejercicios/minicalculadora/index.html") ||
            path.includes("/ejercicios/conversorbases/index.html") ||
            path.includes("/ejercicios/modificartexto/index.html") ||
            path.includes("/ejercicios/modificartexto-api/index.html")) {
            return "../../index.html"; 
        } else if (path.includes("/main.html")) {
            return "index.html"; 
        } else {
            return "index.html"; 
        }
    }

    // Manejar el cierre de sesión
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.onclick = function() {
            endSession();
            window.location.href = redirectToLogin();
        };
    }

    // Verificar sesión al cargar el main.html
    const username = getSessionStorage("username");
    const greetingMessageDiv = document.getElementById("greetingMessage");

    // Verificar si estamos en main.html y si hay un usuario en sesión
    const path = window.location.pathname;
    if (path.includes("main.html") && username) {
        // Mostrar el saludo
        const message = `¡Bienvenido, ${username}!`;
        greetingMessageDiv.textContent = message;
        greetingMessageDiv.classList.add("show"); // Añadir la clase para mostrar el saludo
        greetingMessageDiv.style.display = "block"; 

        // Ocultar el mensaje después de 5 segundos
        setTimeout(function() {
            greetingMessageDiv.classList.remove("show"); 
            // Ocultar el div después de la transición
            setTimeout(() => {
                greetingMessageDiv.style.display = "none"; // Ocultar completamente
            }, 500); 
        }, 5000);

        // Limpiar la sesión para que no se vuelva a mostrar el saludo en recargas
        sessionStorage.removeItem("username");
    }
});
