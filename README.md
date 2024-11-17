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

- **js/array.js**: Este archivo contiene las funciones para el ejercicio de operaciones con matrices, permitiendo sumar, restar y multiplicar matrices.

- **js/almacenCookies.js**: Este archivo contiene las funciones necesarias para guardar, actualizar y borrar datos utilizando cookies en el navegador. Permite almacenar un nombre y un valor, mostrando los datos almacenados y permitiendo interactuar con ellos.

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

### 6. Almacenamiento con Cookies

**Archivo:** almacenCookies/index.html

Esta página permite guardar y gestionar datos utilizando cookies en el navegador. Los usuarios pueden almacenar un nombre y un valor, visualizar los datos almacenados, y actualizarlos o eliminarlos mediante botones interactivos.

**JavaScript:** almacenCookies/js/grabarDato.js, almacenCookies/js/mostrarDatos.js, almacenCookies/js/borrarDato.js, almacenCookies/js/script.js

- **grabarDato.js**: Este archivo contiene la lógica para guardar datos en cookies, incluyendo la creación de una fecha de expiración para cada cookie.
- **mostrarDatos.js**: Este script se encarga de mostrar los datos almacenados en las cookies y permitir la interacción para actualizarlos o borrarlos.
- **borrarDato.js**: Define las funciones para borrar datos de las cookies especificando el nombre de la cookie a eliminar.
- **script.js**: Este archivo maneja la interacción con los inputs y botones, asegurando que los datos se graben correctamente en las cookies.

---

### 7. Almacenamiento con IndexedDB

**Archivo:** almacenIndexedDB/index.html

Este ejercicio demuestra cómo usar IndexedDB para almacenar datos en el navegador. Permite a los usuarios guardar información de personajes de manera persistente, actualizarla y eliminarla según sea necesario. La base de datos almacena el nombre, la raza y la imagen de cada personaje. Los datos se almacenan de forma estructurada y se gestionan a través de transacciones de IndexedDB.

**JavaScript:** almacenIndexedDB/js/script.js, almacenIndexedDB/js/grabarDato.js, almacenIndexedDB/js/mostrarDatos.js, almacenIndexedDB/js/borrarDato.js, almacenIndexedDB/js/API.js

- **script.js**: Este archivo maneja la interacción con los inputs y botones, y realiza la conexión y operaciones de la base de datos IndexedDB.
- **grabarDato.js**: Contiene la lógica para guardar o actualizar personajes en la base de datos.
- **mostrarDatos.js**: Este archivo muestra los datos almacenados en la base de datos en una tabla interactiva.
- **borrarDato.js**: Define las funciones para borrar registros de la base de datos.
- **API.js**: Contiene funciones para obtener personajes aleatorios desde una API externa (como la API de Rick and Morty), y comprobar si un personaje ya está almacenado en la base de datos.

**Descripción del ejercicio:**

En este ejercicio, se utiliza **IndexedDB**, una base de datos basada en el navegador, para almacenar y gestionar datos de personajes. Los usuarios pueden:

- Introducir un **nombre**, **raza** e **imagen** de un personaje y guardarlos en la base de datos.
- Mostrar los registros almacenados en una tabla interactiva, con opciones para **actualizar** o **borrar** los personajes.
- Agregar **personajes aleatorios** obtenidos desde la API de Rick and Morty, con la opción de añadir uno o varios personajes sin duplicados.

**Estructura del archivo:**

- **index.html**: Página principal que contiene el formulario para ingresar y mostrar los datos de los personajes, así como los botones de acción.
- **script.js**: Controla las interacciones de los botones y gestiona las operaciones con la base de datos IndexedDB.
- **mostrarDatos.js**: Muestra los datos almacenados en la base de datos en una tabla HTML.
- **grabarDato.js**: Realiza la lógica para grabar o actualizar un personaje en la base de datos.
- **borrarDato.js**: Permite borrar un personaje de la base de datos.
- **API.js**: Proporciona funciones para obtener personajes aleatorios de una API externa y evitar duplicados al agregar personajes a la base de datos.

---

### 8. Almacenamiento con LocalStorage

**Archivo:** almacenLocalStorage/index.html

Este ejercicio utiliza **localStorage** para guardar y gestionar datos en el navegador de manera persistente. Los usuarios pueden almacenar pares de **nombre y valor**, visualizarlos, actualizarlos o eliminarlos. Los datos se mantienen almacenados incluso cuando la página se recarga o el navegador se cierra, hasta que se eliminen explícitamente.

**JavaScript:** almacenLocalStorage/js/script.js, almacenLocalStorage/js/grabarDato.js, almacenLocalStorage/js/mostrarDatos.js, almacenLocalStorage/js/borrarDato.js

- **script.js**: Este archivo maneja las interacciones con los formularios y los botones, así como la inicialización de la lógica para mostrar y almacenar los datos en **localStorage**.
- **grabarDato.js**: Contiene la lógica para guardar o actualizar los datos en **localStorage**.
- **mostrarDatos.js**: Muestra los datos almacenados en **localStorage** en una tabla interactiva.
- **borrarDato.js**: Define las funciones para eliminar los registros del **localStorage**.

**Descripción del ejercicio:**

Este ejercicio permite a los usuarios gestionar un **CRUD** (Crear, Leer, Actualizar, Eliminar) utilizando **localStorage**:

- **Guardar** un par de **nombre y valor**.
- **Mostrar** los datos almacenados en una tabla.
- **Actualizar** un valor existente.
- **Borrar** datos almacenados de **localStorage**.

**Estructura del archivo:**

- **index.html**: Página principal que contiene el formulario para ingresar un nombre y un valor, así como los botones para guardar, actualizar y borrar.
- **script.js**: Controla las interacciones de los botones y maneja la lógica de almacenamiento en **localStorage**.
- **mostrarDatos.js**: Muestra los datos almacenados en **localStorage** de forma interactiva en una tabla HTML.
- **grabarDato.js**: Realiza la lógica para grabar o actualizar un par de datos en **localStorage**.
- **borrarDato.js**: Permite eliminar un par de datos de **localStorage**.

---

### 9. Almacenamiento con SessionStorage

**Archivo:** almacenSessionStorage/index.html

Este ejercicio muestra cómo almacenar y gestionar datos en el navegador utilizando `sessionStorage`. En este caso, los usuarios pueden guardar un **nombre**, **apellido** y **clave** en la sesión, y visualizar los datos almacenados en una tabla interactiva. También tienen la opción de **actualizar** o **eliminar** los registros guardados.

**JavaScript:** almacenSessionStorage/js/grabarDato.js, almacenSessionStorage/js/mostrarDatos.js, almacenSessionStorage/js/borrarDato.js, almacenSessionStorage/js/script.js

- **grabarDato.js**: Este archivo contiene la lógica para guardar y actualizar los datos en `sessionStorage`.
- **mostrarDatos.js**: Muestra los datos almacenados en `sessionStorage` y permite la interacción para actualizarlos o eliminarlos.
- **borrarDato.js**: Define las funciones para borrar los registros de `sessionStorage` especificando el nombre de la persona.
- **script.js**: Gestiona la interacción con los inputs y botones para almacenar los datos en `sessionStorage`.

**Descripción del ejercicio:**

En este ejercicio, se utiliza **sessionStorage** para almacenar información temporalmente en el navegador. Los usuarios pueden:

- Introducir un **nombre**, **apellido** y **clave** y guardarlos en `sessionStorage`.
- Ver los datos almacenados en una tabla interactiva.
- Eliminar o actualizar los registros almacenados.
  
El almacenamiento se mantiene solo durante la sesión activa, lo que significa que los datos se pierden al cerrar el navegador o la pestaña.

**Estructura del archivo:**

- **index.html**: Página principal con el formulario para ingresar y mostrar los datos almacenados.
- **script.js**: Maneja las interacciones del formulario y la actualización de `sessionStorage`.
- **mostrarDatos.js**: Muestra los registros guardados en `sessionStorage` en una tabla HTML.
- **grabarDato.js**: Realiza la lógica para almacenar o actualizar datos en `sessionStorage`.
- **borrarDato.js**: Permite borrar un registro de `sessionStorage` según el nombre.

---