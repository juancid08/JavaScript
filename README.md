# Proyecto: Ejercicios de JavaScript

Este proyecto contiene una serie de ejercicios diseñados para practicar y demostrar habilidades en JavaScript, HTML y CSS. Cada ejercicio aborda un aspecto diferente del desarrollo web en el entorno cliente.

## Descripción de Archivos

- **index.html**: Este archivo contiene el formulario de inicio de sesión que permite a los usuarios ingresar su nombre de usuario y contraseña. Incluye un botón para enviar las credenciales y una opción para cancelar.
  
- **main.html**: Este archivo es la página principal que se muestra después de que el usuario ha iniciado sesión. Presenta un mensaje de saludo y enlaces a diferentes ejercicios de JavaScript.

- **css/styles.css**: Este archivo contiene todos los estilos CSS utilizados para dar formato a los elementos de la aplicación, asegurando que se vea atractiva y sea fácil de usar.

- **js/setIndexedDB.js**: Este archivo define funciones que permiten guardar datos en IndexedDB, que se utiliza para mantener la información del usuario a lo largo de la sesión.

- **js/getIndexedDB.js**: Contiene funciones para recuperar datos de IndexedDB, facilitando la recuperación del nombre de usuario almacenado.

- **js/deleteIndexedDB.js**: Proporciona funciones para eliminar datos específicos de IndexedDB, además de gestionar el cierre de sesión del usuario.

- **js/login.js**: Este archivo contiene la lógica principal del proceso de inicio de sesión. Se encarga de validar las credenciales del usuario y gestionar la redirección a main.html en caso de éxito.

- **js/dropBtn.js**: Este archivo (si se incluye en el proyecto) manejaría la lógica para la funcionalidad del menú desplegable, permitiendo a los usuarios interactuar con opciones adicionales.


## Ejercicios

### 1. Mini Calculadora

**Archivo:** mini-calculadora/mini-calculadora.html

Esta página permite realizar las siguientes operaciones:

- Sumar
- Restar
- Multiplicar
- Dividir
- Obtener el valor entero redondeado
- Extraer la parte decimal
- Calcular el factorial de un número

**JavaScript:** mini-calculadora/js/calculadora.js

Las funciones de la calculadora manejan la lógica de las operaciones matemáticas.

---

### 2. Conversor de Bases

**Archivo:** conversor-bases/conversor-bases.html

Esta página permite convertir un número decimal en:

- Binario
- Octal
- Hexadecimal

**JavaScript:** conversor-bases/js/conversor.js

El script implementa las funciones de conversión entre diferentes bases.

---

### 3. Transformador de Texto

**Archivo:** transformador-texto/transformaciontexto.html

Esta página permite transformar un texto de diferentes maneras, tales como:

- Convertir a mayúsculas
- Convertir a minúsculas
- Modificar la primera o última letra a mayúscula o minúscula
- Cambiar las vocales o consonantes a mayúsculas o minúsculas

**JavaScript:** transformador-texto/js/transformaciones.js

Las funciones de este script permiten manipular el texto según la opción seleccionada.

---

### 4. Transformador de Texto-API

**Archivo:** transformaciontexto-api/transformaciontexto-api.html

Esta página proporciona una interfaz para transformar texto e interactuar con la API de *Rick and Morty*. Las funcionalidades incluyen:

- Transformaciones de texto como:
  - Convertir a mayúsculas
  - Convertir a minúsculas
  - Modificar la primera o última letra a mayúscula o minúscula
  - Cambiar vocales o consonantes a mayúsculas o minúsculas
- Generar un personaje aleatorio de la serie *Rick and Morty* y mostrar su imagen y datos.

**JavaScript:** transformaciontexto-api/js/transformaciontexto-api.js

Este script gestiona las transformaciones de texto y la obtención de datos de la API.

---

### 5. Operaciones con Matrices

**Archivo:** array/index.html

Esta página permite realizar operaciones con matrices, incluyendo:

- Sumar matrices
- Restar matrices
- Multiplicar matrices

**JavaScript:** array/js/array.js

Las funciones en este archivo permiten manejar las operaciones matemáticas con matrices y visualizar los resultados.

---
