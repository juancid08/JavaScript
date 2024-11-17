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
            // Guardar en IndexedDB
            setIndexedDB("loggedIn", "true");
            setIndexedDB("username", usernameInput); // Guardar el nombre del usuario

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

    // Verificar el estado de inicio de sesión al cargar main.html
    const path = window.location.pathname;
    if (path.includes("main.html")) {
        // Verificamos si el usuario está logueado
        getIndexedDB("loggedIn").then((loggedInStatus) => {
            if (loggedInStatus && loggedInStatus.valor === "true") {
                // Si está logueado, mostramos el saludo
                getIndexedDB("username").then((user) => {
                    if (user) {
                        const greetingMessageDiv = document.getElementById("greetingMessage");
                        const message = `¡Bienvenido, ${user.valor}!`;
                        greetingMessageDiv.textContent = message;

                        // Mostrar el saludo
                        greetingMessageDiv.classList.add("show"); // Añadir la clase para mostrar el saludo
                        greetingMessageDiv.style.display = "block"; // Mostrar el div

                        // Ocultar el saludo después de 5 segundos
                        setTimeout(function() {
                            greetingMessageDiv.classList.remove("show"); // Quitar la clase para ocultar
                            // Ocultar el div después de la transición
                            setTimeout(() => {
                                greetingMessageDiv.style.display = "none"; // Ocultar completamente
                            }, 500); 
                        }, 5000);

                        // Limpiar la base de datos para que no se vuelva a mostrar el saludo en recargas
                        deleteFromIndexedDB("username");
                    }
                }).catch((error) => {
                    console.error("Error al obtener el usuario:", error);
                });
            } else {
                window.location.href = "index.html"; 
            }
        }).catch((error) => {
            console.error("Error al verificar el estado de inicio de sesión:", error);
            window.location.href = "index.html"; 
        });
    }

    // Manejar el cierre de sesión
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.onclick = function() {
            deleteFromIndexedDB("loggedIn");
            deleteFromIndexedDB("username");
            window.location.href = redirectToLogin();
        };
    }
    
    function redirectToLogin() {
        const path = window.location.pathname;

        if (path.includes("/ejercicios/minicalculadora/index.html") ||
            path.includes("/ejercicios/conversorbases/index.html") ||
            path.includes("/ejercicios/modificartexto/index.html") ||
            path.includes("/ejercicios/modificartexto-api/index.html") ||
            path.includes("/ejercicios/array/index.html") ||
            path.includes("/ejercicios/almacenCookies/index.html") ||
            path.includes("/ejercicios/almacenIndexedDB/index.html") ||
            path.includes("/ejercicios/almacenLocalStorage/index.html") ||
            path.includes("/ejercicios/almacenSessionStorage/index.html")) {
            return "../../index.html"; 
        } else if (path.includes("/main.html")) {
            return "index.html"; 
        } else {
            return "index.html"; 
        }
    }
});
