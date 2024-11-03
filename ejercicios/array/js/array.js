let matrizA = [];
let matrizB = [];
let intervalo;
let velocidad = 1000; // Tiempo en milisegundos entre operaciones

// Velocidades configurables
const velocidadRapida = 200;  // Tiempo en milisegundos entre operaciones rápidas
const velocidadLenta = 2000;   // Tiempo en milisegundos entre operaciones lentas

// Genera una matriz aleatoria
function generarMatriz(n, min = 0, max = 10) {
    const matriz = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matriz.push(fila);
    }
    return matriz;
}

// Funciones para las operaciones de matrices
async function sumarMatrices(matriz1, matriz2) {
    const n = matriz1.length;
    const resultado = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(fila);
    }
    return resultado;
}

async function restarMatrices(matriz1, matriz2) {
    const n = matriz1.length;
    const resultado = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(matriz1[i][j] - matriz2[i][j]);
        }
        resultado.push(fila);
    }
    return resultado;
}

async function multiplicarMatrices(matriz1, matriz2) {
    const n = matriz1.length;
    const resultado = [];
    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            let suma = 0;
            for (let k = 0; k < n; k++) {
                suma += matriz1[i][k] * matriz2[k][j];
            }
            fila.push(suma);
        }
        resultado.push(fila);
    }
    return resultado;
}

// Muestra matrices en HTML en formato de tabla sin bordes visibles
function mostrarMatriz(matriz) {
    let html = "<table style='border-collapse: collapse;'>"; // Añade border-collapse para mejorar la apariencia sin bordes
    matriz.forEach(fila => {
        html += "<tr>";
        fila.forEach(elemento => {
            html += `<td style="padding: 5px; text-align: center;">${elemento}</td>`;
        });
        html += "</tr>";
    });
    html += "</table>";
    return html;
}


// Muestra los resultados de las matrices generadas
function mostrarMatrices() {
    const contenedorMatrices = document.getElementById("matricesGeneradas");
    contenedorMatrices.innerHTML = ` 
        <div class="matriz"><strong>Matriz A:</strong><br>${mostrarMatriz(matrizA)}</div>
        <div class="matriz"><strong>Matriz B:</strong><br>${mostrarMatriz(matrizB)}</div>
    `;
}

// Espera una cantidad de tiempo determinada
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Iniciar o detener las pruebas
function iniciarPruebas() {
    intervalo = setInterval(ejecutarPruebas, velocidad);
}

function detenerPruebas() {
    clearInterval(intervalo);
}

// Función para manejar eventos
document.getElementById("botonValoresAleatorios").addEventListener("click", () => {
    const dimension = Math.floor(Math.random() * 10) + 1; // Dimensión entre 1 y 10
    const rangoMin = Math.floor(Math.random() * 10); // Rango mínimo entre 0 y 9
    const rangoMax = rangoMin + Math.floor(Math.random() * 10) + 1; // Rango superior

    // Asignar los valores aleatorios a los campos de formulario
    document.getElementById("dimension").value = dimension;
    document.getElementById("rangoMin").value = rangoMin;
    document.getElementById("rangoMax").value = rangoMax;
});

// Botón para generar las matrices
document.getElementById("botonGenerarMatrices").addEventListener("click", () => {
    const dimension = parseInt(document.getElementById("dimension").value);
    const rangoMin = parseInt(document.getElementById("rangoMin").value);
    const rangoMax = parseInt(document.getElementById("rangoMax").value);

    // Generar las matrices usando los valores ingresados
    matrizA = generarMatriz(dimension, rangoMin, rangoMax);
    matrizB = generarMatriz(dimension, rangoMin, rangoMax);
    mostrarMatrices();
    document.getElementById("resultadoOperacion").innerHTML = ""; // Limpiar resultado
});

// Nueva lógica para el botón "Aleatorio"
document.getElementById("botonAleatorio").addEventListener("click", iniciarPruebas);

document.getElementById("botonParar").addEventListener("click", detenerPruebas);

document.getElementById("botonRapido").addEventListener("click", () => {
    velocidad = velocidadRapida; // Acelera las operaciones
    if (intervalo) {
        detenerPruebas();
        iniciarPruebas();
    }
});

document.getElementById("botonLento").addEventListener("click", () => {
    velocidad = velocidadLenta; // Lenta las operaciones
    if (intervalo) {
        detenerPruebas();
        iniciarPruebas();
    }
});

// Operaciones manuales
document.getElementById("botonSumar").addEventListener("click", async () => {
    if (matrizA.length === 0 || matrizB.length === 0) {
        alert("Por favor, genere ambas matrices primero.");
        return;
    }
    const resultado = await sumarMatrices(matrizA, matrizB);
    document.getElementById("resultadoOperacion").innerHTML = mostrarMatriz(resultado);
});

document.getElementById("botonRestar").addEventListener("click", async () => {
    if (matrizA.length === 0 || matrizB.length === 0) {
        alert("Por favor, genere ambas matrices primero.");
        return;
    }
    const resultado = await restarMatrices(matrizA, matrizB);
    document.getElementById("resultadoOperacion").innerHTML = mostrarMatriz(resultado);
});

document.getElementById("botonMultiplicar").addEventListener("click", async () => {
    if (matrizA.length === 0 || matrizB.length === 0) {
        alert("Por favor, genere ambas matrices primero.");
        return;
    }
    const resultado = await multiplicarMatrices(matrizA, matrizB);
    document.getElementById("resultadoOperacion").innerHTML = mostrarMatriz(resultado);
});

// Ejecutar pruebas automáticamente
async function ejecutarPruebas() {
    if (matrizA.length === 0 || matrizB.length === 0) {
        alert("Por favor, genere ambas matrices primero.");
        return;
    }
    const operacion = Math.floor(Math.random() * 3); // 0: sumar, 1: restar, 2: multiplicar
    let resultado;
    switch (operacion) {
        case 0:
            resultado = await sumarMatrices(matrizA, matrizB);
            break;
        case 1:
            resultado = await restarMatrices(matrizA, matrizB);
            break;
        case 2:
            resultado = await multiplicarMatrices(matrizA, matrizB);
            break;
    }
    document.getElementById("resultadoOperacion").innerHTML = mostrarMatriz(resultado);
    await esperar(velocidad);
}
