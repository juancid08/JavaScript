'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html donde voy a mostrar los datos

    // Verificar si existen datos en sessionStorage
    let datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")) || []; // Si no existen, inicializa un array vacío

    if (datosAcceso.length > 0) { 
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"), // creo una fila
                campoNombre = document.createElement("td"), // creo una celda para el nombre
                campoApellido = document.createElement("td"), // creo una celda para el apellido
                campoValor = document.createElement("td"), // creo una celda para la clave
                campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                campoActualizar = document.createElement("td"), // creo una celda para el botón 'actualizar'
                botonBorrar = document.createElement("button"), // creo un botón para borrar
                imagenBorrar = document.createElement("img"), // imagen para el botón borrar
                botonActualizar = document.createElement("button"), // botón para actualizar
                imagenActualizar = document.createElement("img"); // imagen para el botón actualizar

            // Datos
            campoNombre.innerHTML = datoAcceso.nombre; // nombre
            campoApellido.innerHTML = datoAcceso.apellido; // apellido
            campoValor.innerHTML = datoAcceso.valor; // clave

            // Botón Borrar
            botonBorrar.textContent = "Borrar";
            botonBorrar.className = "borrar"; // clase para el botón
            botonBorrar.addEventListener('click', function () { // evento para borrar
                borrarDato(datoAcceso.nombre);
            });

            imagenBorrar.src = "./img/delete.svg"; 
            imagenBorrar.width = "22"; 
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";

            // Botón Actualizar
            botonActualizar.textContent = "Actualizar";
            botonActualizar.addEventListener('click', function () { // evento para actualizar
                // Cargar el dato en los campos de entrada
                document.getElementById("nombre").value = datoAcceso.nombre;
                document.getElementById("apellido").value = datoAcceso.apellido;
                document.getElementById("valor").value = datoAcceso.valor;
                borrarDato(datoAcceso.nombre); // Eliminar el dato actual antes de agregarlo actualizado
            });

            imagenActualizar.src = "./img/recover.svg"; 
            imagenActualizar.width = "22"; 
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle";

            // DOM
            botonBorrar.appendChild(imagenBorrar);
            campoBorrar.appendChild(botonBorrar);

            botonActualizar.appendChild(imagenActualizar);
            campoActualizar.appendChild(botonActualizar);

            linea.appendChild(campoNombre);
            linea.appendChild(campoApellido); // Añadimos el apellido
            linea.appendChild(campoValor);
            linea.appendChild(campoBorrar);
            linea.appendChild(campoActualizar);

            cuerpo.appendChild(linea); // añadir la fila al cuerpo de la tabla
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
