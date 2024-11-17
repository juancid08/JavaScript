'use strict'; 

function mostrarDatos() {
    console.log("Mostrando datos..."); // Imprime un mensaje en la consola.

    const cuerpo = document.getElementById("cuerpo"); // Obtiene el elemento con el ID 'cuerpo', donde se mostrará la tabla de datos.
    cuerpo.innerHTML = ""; // Limpiamos el contenido de la tabla antes de mostrar los nuevos datos.

    const solicitudDB = indexedDB.open(nombreBD, versionBD); // Abre la base de datos IndexedDB.

    // Maneja el error si hay un problema al abrir la base de datos.
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`); // Muestra un error en la consola.
    };

    // Cuando la base de datos se abre correctamente
    solicitudDB.onsuccess = function (event) {
        const bd = event.target.result; // Obtiene la base de datos.
        const canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD); // Crea una transacción en modo solo lectura para acceder al 'object store'.
        
        // Obtiene todos los registros de la base de datos.
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result; // Los registros se almacenan en la variable 'registros'.
            console.log(registros); // Muestra los registros en la consola.

            // Itera sobre cada registro y crea una fila en la tabla.
            for (let registro of registros) {
                let linea = document.createElement("tr"), // Crea una nueva fila de tabla.
                    campoNombre = document.createElement("td"), // Crea una celda para el nombre.
                    campoRaza = document.createElement("td"), // Crea una celda para la raza.
                    campoImagen = document.createElement("td"), // Crea una celda para la imagen.
                    campoBorrar = document.createElement("td"), // Crea una celda para el botón de borrar.
                    campoActualizar = document.createElement("td"), // Crea una celda para el botón de actualizar.
                    botonBorrar = document.createElement("button"), // Crea un botón para borrar.
                    botonActualizar = document.createElement("button"); // Crea un botón para actualizar.

                // Asigna los valores del registro a las celdas.
                campoNombre.innerHTML = registro.nombre;
                campoRaza.innerHTML = registro.raza;
                campoImagen.innerHTML = `<img src="${registro.imagen}" alt="Imagen" width="50">`; // Muestra la imagen.

                // Configura el botón de borrar.
                botonBorrar.textContent = "Borrar"; // Texto del botón.
                botonBorrar.className = "borrar"; // Asigna una clase CSS para estilos.
                botonBorrar.addEventListener('click', function () {
                    borrarDato(registro.id); // Llama a la función borrarDato con el ID del registro.
                });

                campoBorrar.appendChild(botonBorrar); // Añade el botón a la celda.

                // Configura el botón de actualizar.
                botonActualizar.textContent = "Actualizar"; // Texto del botón.
                botonActualizar.className = "actualizar"; // Asigna una clase CSS para estilos.
                botonActualizar.addEventListener('click', function () {
                    // Llena los campos de entrada con los datos del registro para actualizarlo.
                    document.getElementById("nombre").value = registro.nombre;
                    document.getElementById("raza").value = registro.raza;
                    document.getElementById("imagen").value = registro.imagen;

                    // Borra el dato antes de actualizarlo.
                    borrarDato(registro.id);
                });

                campoActualizar.appendChild(botonActualizar); // Añade el botón a la celda.

                // Añade las celdas a la fila.
                linea.appendChild(campoNombre);
                linea.appendChild(campoRaza);
                linea.appendChild(campoImagen);
                linea.appendChild(campoBorrar);
                linea.appendChild(campoActualizar);

                // Añade la fila al cuerpo de la tabla.
                cuerpo.appendChild(linea);
            }
        };
    };
}
