"use strict";

let resultadoOriginal = null; // Variable para almacenar el resultado original

// Función para obtener los valores ingresados en el formulario
function obtenerOperandos() {
    const op1 = parseFloat(document.getElementById("op1").value);
    const op2 = parseFloat(document.getElementById("op2").value);
    return { op1, op2 };
}

// Función para mostrar el resultado
function mostrarResultado(valor) {
    document.getElementById("resultadoCalculadora").textContent = `Resultado: ${valor}`;
}

// Función para almacenar el resultado original
function guardarResultadoOriginal(valor) {
    resultadoOriginal = valor; 
    mostrarResultado(valor);   
}

// Función para sumar
function sumar() {
    const { op1, op2 } = obtenerOperandos();
    const resultado = op1 + op2;
    guardarResultadoOriginal(resultado); 
}

// Función para restar
function restar() {
    const { op1, op2 } = obtenerOperandos();
    const resultado = op1 - op2;
    guardarResultadoOriginal(resultado); 
}

// Función para multiplicar
function multiplicar() {
    const { op1, op2 } = obtenerOperandos();
    const resultado = op1 * op2;
    guardarResultadoOriginal(resultado); 
}

// Función para dividir
function dividir() {
    const { op1, op2 } = obtenerOperandos();
    if (op2 === 0) {
        mostrarResultado("Error: División por 0");
    } else {
        const resultado = op1 / op2;
        guardarResultadoOriginal(resultado); 
    }
}

// Función para mostrar el valor entero redondeado
function convertirEntero() {
    if (resultadoOriginal !== null) {
        const entero = Math.round(resultadoOriginal); // Redondea el valor original
        mostrarResultado(entero);
    }
}

// Función para mostrar la parte decimal del resultado
function extraerParteDecimal() {
    if (resultadoOriginal !== null) {
        mostrarResultado(resultadoOriginal); 
    }
}

// Función para calcular el factorial de op1
function calcularFactorial() {
    const { op1 } = obtenerOperandos();
    if (op1 < 0 || !Number.isInteger(op1)) {
        mostrarResultado("Error: Factorial solo para enteros positivos");
    } else {
        let factorial = 1;
        for (let i = 1; i <= op1; i++) {
            factorial *= i;
        }
        guardarResultadoOriginal(factorial); 
    }
}
