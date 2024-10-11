"use strict";

window.onload = () => {
    const loginForm = document.getElementById("loginForm");
    const loginCard = document.getElementById("loginCard");
    const loginMessage = document.getElementById("loginMessage");
    const cancelButton = document.getElementById("cancelButton");
    const loginButton = document.getElementById("loginButton"); 

    // Credenciales predefinidas
    const validUsername = "Juan"; 
    const validPassword = "dejame";

    // Expresión regular para validar el nombre de usuario (mínimo 3 caracteres)
    const usernamePattern = /^.{3,}$/;

    // Manejo del evento de click del botón "Ingresar"
    loginButton.addEventListener("click", function () {
        // Obtener los valores ingresados
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        // Validación de los datos ingresados
        if (!usernamePattern.test(usernameInput)) {
            alert("El nombre de usuario debe tener al menos 3 caracteres.");
            return; 
        }
        
        // Validación de las credenciales
        if (usernameInput === validUsername && passwordInput === validPassword) {
            loginMessage.innerText = `¡Bienvenido de nuevo, ${usernameInput}!`;

            // Establecer cookie para que expire en 2 minutos al iniciar sesión
            setCookie("username", usernameInput, 2); 

            setTimeout(() => {
                window.location.href = "main.html"; // Redirigir a main.html
            }, 2000);
        } else {
            alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
            loginForm.reset(); 
        }
    });

    // Manejo del botón de cancelar
    cancelButton.addEventListener("click", function () {
        loginForm.reset();
        loginMessage.innerText = '';
    });
};
