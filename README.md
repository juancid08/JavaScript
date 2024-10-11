
## Archivos Principales

### HTML

1. **index.html**: Página de inicio de sesión que permite al usuario ingresar su nombre de usuario y contraseña.
2. **main.html**: Página principal que muestra un mensaje de bienvenida al usuario después de iniciar sesión y puede acceder en el topnav a ejercicios.

### JavaScript

1. **checkCookies.js**: 
   - Verifica la existencia de la cookie de sesión (`username`).
   - Muestra un mensaje de bienvenida si el usuario ya ha iniciado sesión.
   - Redirige a la página de inicio de sesión si la cookie ha expirado o no existe.

2. **deleteCookies.js**: 
   - Elimina la cookie de sesión en diferentes rutas posibles para garantizar el cierre de sesión efectivo.

3. **getCookies.js**: 
   - Función para obtener el valor de una cookie dada su nombre.

4. **login.js**: 
   - Maneja la lógica de inicio de sesión.
   - Valida el nombre de usuario y la contraseña contra credenciales predefinidas.
   - Establece la cookie `username` al iniciar sesión y redirige a `main.html`.

5. **setCookies.js**: 
   - Función para establecer cookies con un tiempo de expiración específico.

### CSS

- Los estilos para las páginas de inicio de sesión, calculadora y conversor de bases están implementados en sus respectivos archivos CSS.
- Los estilos son responsivos y adaptan el diseño a diferentes tamaños de pantalla.

## Funcionamiento

- Al cargar `index.html`, el usuario puede ingresar su nombre de usuario y contraseña.
- Si las credenciales son correctas, se establece una cookie `username` que expira en 2 minutos.
- Al acceder a `main.html`, se muestra un mensaje de bienvenida y se verifica la cookie cada vez que se carga la página.
- Si la cookie expira, el usuario es redirigido a la página de inicio de sesión.

## Tecnologías Usadas

- HTML
- CSS
- JavaScript (ES6)


