"use strict"
window.onload = () => {
    const loginForm = document.getElementById("loginForm");
    const loginCard = document.getElementById("loginCard");
    const mainContent = document.getElementById("mainContent");
    const loginMessage = document.getElementById("loginMessage");
    const cancelButton = document.getElementById("cancelButton");
    const loginButton = document.getElementById("loginButton"); 

    // Credenciales predefinidas
    const validUsername = "Juan"; 
    const validPassword = "dejame";

    // Expresión regular para validar el nombre de usuario (mínimo 3 caracteres)
    const usernamePattern = /^.{3,}$/;
    // Expresión regular para validar que la contraseña no esté vacía
    const passwordPattern = /.+/; 

    // Manejo del evento de click del botón "Ingresar"
    loginButton.addEventListener("click", function () {
        // Obtener los valores ingresados
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        // Validación de los datos ingresados con expresión regular
        if (!usernamePattern.test(usernameInput)) {
            alert("El nombre de usuario debe tener al menos 3 caracteres.");
            return; 
        }

        // Validación de que la contraseña no esté vacía
        if (!passwordPattern.test(passwordInput)) {
            alert("La contraseña no puede estar vacía.");
            return; 
        }

        // Validación de las credenciales
        if (usernameInput === validUsername && passwordInput === validPassword) {
            loginMessage.innerText = "¡Bienvenido!";
            loginMessage.style.color = "green";
            setTimeout(function () {
                loginCard.style.display = "none"; 
                mainContent.style.display = "block"; 
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
