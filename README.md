# Descripción de Archivos

## index.html

 Contiene los elementos estructurales del documento HTML, que se organizan en varias secciones clave:

- **Cabecera (`<head>`)**:
  - **Metaetiquetas**: Configuran el conjunto de caracteres, la compatibilidad con navegadores y la vista responsive para dispositivos móviles.
  - **Título (`<title>`)**: Establece el título que se muestra en la pestaña del navegador.
  - **Favicon**: Un ícono que aparece en la pestaña del navegador, lo que mejora la identidad visual de la aplicación.
  - **Enlaces a CSS y JavaScript**: Incluye un archivo CSS para los estilos y un archivo JavaScript para la lógica, que se carga de forma diferida para mejorar la velocidad de carga.

- **Cuerpo (`<body>`)**:
  - **Cabecera (`.header`)**: Presenta el título del proyecto y un logotipo. Utiliza una estructura flex para alinear el texto y la imagen, asegurando que se vea bien en diferentes dispositivos.
  - **Menú de Navegación (`.topnav`)**: Incluye enlaces a recursos externos sobre JavaScript, como tutoriales y documentación. Están diseñados para ser fácilmente accesibles y se destacan visualmente con un efecto hover.
  - **Formulario de Inicio de Sesión (`.login-card`)**: 
    - **Etiquetas y campos de entrada**: Incluye etiquetas descriptivas para el nombre de usuario y la contraseña. Los campos utilizan patrones de validación (expresiones regulares) para garantizar que los usuarios ingresen datos válidos.
    - **Botones**: Dos botones, "Ingresar" y "Cancelar", permiten la interacción del usuario. El primero valida las credenciales, y el segundo restablece el formulario.
  - **Contenido Principal (`#mainContent`)**: Oculto inicialmente, se muestra después de un inicio de sesión exitoso. Incluye varias "tarjetas" que describen diferentes ejercicios de JavaScript.
  - **Pie de Página (`.footer`)**: Contiene la información del autor y se muestra en la parte inferior de la página.

## styles.css

Este archivo define los estilos visuales que mejoran la experiencia del usuario y la apariencia de la aplicación. Se utilizan varias técnicas modernas de CSS:

- **Importación de Fuentes**: Se importa una fuente de Google Fonts (`Roboto`) para lograr un diseño tipográfico atractivo y moderno.
  
- **Diseño Flexbox**: Este enfoque permite organizar los elementos de la cabecera, menú y tarjetas de contenido de manera fluida y adaptable. Esto asegura que los elementos se distribuyan de manera uniforme y se ajusten a diferentes tamaños de pantalla, creando una experiencia de usuario responsiva.

- **Estilos de Fondo y Color**: Se aplican diferentes colores de fondo y opacidades para las secciones, lo que crea un contraste visual y mejora la legibilidad del texto. Por ejemplo, la cabecera tiene un fondo azul con un nivel de opacidad para dar un efecto de profundidad.

- **Tarjetas de Contenido**: Cada tarjeta tiene un diseño que incluye bordes redondeados, sombras y un espaciado adecuado, lo que les otorga un aspecto moderno y atractivo. Los títulos y el cuerpo de las tarjetas están diseñados para ser claros y fáciles de leer.

- **Estilos de Botones**: Los botones tienen un diseño atractivo con colores de fondo específicos, bordes redondeados y un efecto de hover que cambia el color, lo que mejora la interactividad y hace que el usuario sepa que el botón es clickeable.

## login.js

El archivo JavaScript es fundamental para la funcionalidad de la aplicación y se encarga de manejar la lógica del inicio de sesión. A continuación se presentan sus características clave:

- **Carga Inicial (`window.onload`)**: Todo el código dentro de esta función se ejecuta una vez que la ventana ha terminado de cargarse, lo que asegura que todos los elementos del DOM estén disponibles para manipulación.

- **Selección de Elementos**: Utiliza `document.getElementById()` para obtener referencias a los elementos del formulario, el mensaje de inicio de sesión, y las tarjetas de contenido. Esto permite interactuar directamente con estos elementos en el DOM.

- **Credenciales Predefinidas**: Se definen un nombre de usuario y una contraseña válidos que el usuario debe ingresar para acceder al contenido principal. Esto simplifica la validación sin necesidad de un backend.

- **Validación de Entrada**:
  - **Eventos de Botón**: Se añaden escuchas de eventos a los botones "Ingresar" y "Cancelar". Al hacer clic en "Ingresar", se validan los datos ingresados:
    - **Patrón de Usuario**: Se verifica que el nombre de usuario tenga al menos 3 caracteres.
    - **Patrón de Contraseña**: Se asegura de que la contraseña no esté vacía.
  - Si la validación es exitosa y las credenciales son correctas, se muestra un mensaje de bienvenida y el contenido principal se despliega tras un breve retraso. De lo contrario, se muestra un mensaje de error y el formulario se restablece.

- **Manejo del Botón de Cancelar**: Al hacer clic en "Cancelar", el formulario se restablece y se borra cualquier mensaje de inicio de sesión, permitiendo al usuario comenzar de nuevo.
