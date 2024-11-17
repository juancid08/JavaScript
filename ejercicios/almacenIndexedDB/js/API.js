'use strict'; 


// Función para verificar si un personaje ya existe en la base de datos
function personajeExisteEnBD(nombre) {
    return new Promise((resolve) => {
        // Abre la base de datos IndexedDB
        const solicitudDB = indexedDB.open(nombreBD, versionBD);

        // Cuando la base de datos se abre correctamente
        solicitudDB.onsuccess = function (event) {
            const bd = event.target.result; // Referencia a la base de datos
            const transaction = bd.transaction(tablaBD, "readonly"); // Inicia una transacción de solo lectura
            const canalBD = transaction.objectStore(tablaBD); // Obtiene el "object store" de la base de datos
            const indice = canalBD.index("nombre"); // Accede al índice "nombre"

            // Realiza una consulta para buscar el personaje por nombre
            const consulta = indice.get(nombre);
            consulta.onsuccess = function () {
                resolve(!!consulta.result); // Devuelve true si el personaje existe, false si no
            };
        };
    });
}

// Función para obtener un personaje aleatorio de la API de Rick and Morty
async function obtenerPersonajeAleatorio() {
    try {
        // Define el número máximo de personajes que tiene la API (826 en este caso)
        const numeroMaxPersonajes = 826;
        const idAleatorio = Math.floor(Math.random() * numeroMaxPersonajes) + 1; // Genera un ID aleatorio

        // Llama a la API de Rick and Morty para obtener el personaje con ese ID
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`);
        if (!respuesta.ok) { // Verifica si la respuesta es válida
            throw new Error("Error al obtener el personaje de la API"); // Lanza un error si la respuesta no es correcta
        }
        const personaje = await respuesta.json(); // Convierte la respuesta en un objeto JSON

        // Devuelve un objeto con el nombre, raza y la imagen del personaje
        return {
            nombre: personaje.name,
            raza: personaje.species,
            imagen: personaje.image
        };
    } catch (error) {
        console.error("Error al obtener el personaje aleatorio:", error); // Muestra el error en la consola
        return null; // Retorna null si hay un error
    }
}

// Función para obtener un personaje aleatorio que no esté repetido en la base de datos
async function obtenerPersonajeAleatorioNoRepetido() {
    let personaje;
    let intentos = 0;
    const maxIntentos = 50; // Limita el número de intentos para evitar un bucle infinito

    // Intenta obtener un personaje hasta que se encuentre uno no repetido o se alcance el máximo de intentos
    do {
        personaje = await obtenerPersonajeAleatorio(); // Obtiene un personaje aleatorio
        intentos++;
    } while (await personajeExisteEnBD(personaje.nombre) && intentos < maxIntentos); // Verifica si el personaje ya existe

    // Si se alcanzan los intentos máximos, muestra un error
    if (intentos >= maxIntentos) {
        console.error("No se pudieron encontrar personajes únicos en un número razonable de intentos");
        return null;
    }

    return personaje; // Devuelve el personaje único
}

// Función para obtener cinco personajes aleatorios no repetidos
async function obtenerCincoPersonajesAleatorios() {
    const personajes = [];
    // Repite hasta que se hayan obtenido 5 personajes únicos
    while (personajes.length < 5) {
        const personaje = await obtenerPersonajeAleatorioNoRepetido(); // Obtiene un personaje único
        if (personaje) { // Si se obtuvo un personaje, lo agrega al array
            personajes.push(personaje);
        }
    }
    return personajes; // Devuelve el array con los cinco personajes
}
