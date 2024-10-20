// Obtener elementos del DOM
const inputTexto = document.getElementById("inputTexto");

// Asignamos los botones a variables usando sus IDs
const btnMayusculas = document.getElementById("btnMayusculas");
const btnMinusculas = document.getElementById("btnMinusculas");
const btnPrimeraLetraMayus = document.getElementById("btnPrimeraLetraMayus");
const btnUltimaLetraMayus = document.getElementById("btnUltimaLetraMayus");
const btnPrimeraLetraMinus = document.getElementById("btnPrimeraLetraMinus");
const btnUltimaLetraMinus = document.getElementById("btnUltimaLetraMinus");
const btnVocalesMayus = document.getElementById("btnVocalesMayus");
const btnVocalesMinus = document.getElementById("btnVocalesMinus");
const btnConsonantesMayus = document.getElementById("btnConsonantesMayus");
const btnConsonantesMinus = document.getElementById("btnConsonantesMinus");
const btnAleatorio = document.getElementById("btnAleatorio");
const btnRapido = document.getElementById("btnRapido");
const btnLento = document.getElementById("btnLento");
const btnParar = document.getElementById("btnParar"); 

// Funciones de transformación
function convertirMayusculas() {
  const texto = inputTexto.value;
  inputTexto.value = texto.toUpperCase();
}

function convertirMinusculas() {
  const texto = inputTexto.value;
  inputTexto.value = texto.toLowerCase();
}

function primeraLetraMayus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/\b\w/g, c => c.toUpperCase());
}

function ultimaLetraMayus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/\w\b/g, c => c.toUpperCase());
}

function primeraLetraMinus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/\b\w/g, c => c.toLowerCase());
}

function ultimaLetraMinus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/\w\b/g, c => c.toLowerCase());
}

function vocalesMayus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/[aeiou]/g, c => c.toUpperCase());
}

function vocalesMinus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/[AEIOU]/g, c => c.toLowerCase());
}

function consonantesMayus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/[^aeiouAEIOU\s]/g, c => c.toUpperCase());
}

function consonantesMinus() {
  const texto = inputTexto.value;
  inputTexto.value = texto.replace(/[^aeiouAEIOU\s]/g, c => c.toLowerCase());
}

// Lista de funciones para la transformación aleatoria
const transformaciones = [
  convertirMayusculas,
  convertirMinusculas,
  primeraLetraMayus,
  ultimaLetraMayus,
  primeraLetraMinus,
  ultimaLetraMinus,
  vocalesMayus,
  vocalesMinus,
  consonantesMayus,
  consonantesMinus
];

// Velocidad inicial para el generador aleatorio
let intervalo = 1000; // 1 segundo
let intervaloID = null; // ID del intervalo

// Función para ejecutar una transformación aleatoria
function aplicarTransformacionAleatoria() {
  const index = Math.floor(Math.random() * transformaciones.length);
  transformaciones[index]();
  console.log("Transformación aleatoria aplicada.");
}

// Función para iniciar el generador aleatorio usando setInterval
function iniciarGeneradorAleatorio() {
  if (!intervaloID) {
    intervaloID = setInterval(aplicarTransformacionAleatoria, intervalo);
    console.log("Generador iniciado con intervalo de " + intervalo + " ms.");
  }
}

// Función para detener el generador aleatorio
function detenerGeneradorAleatorio() {
  if (intervaloID !== null) {
    clearInterval(intervaloID);
    intervaloID = null; 
    console.log("Generador detenido.");
  } else {
    console.log("Generador ya está detenido.");
  }
}

// Funciones para ajustar la velocidad
function aumentarVelocidad() {
  if (intervalo > 200) { // Velocidad mínima
    intervalo -= 200;
    console.log("Velocidad aumentada, nuevo intervalo: " + intervalo + " ms.");
    if (intervaloID) {
      detenerGeneradorAleatorio();
      iniciarGeneradorAleatorio(); // Reiniciar con la nueva velocidad
    }
  }
}

function disminuirVelocidad() {
  intervalo += 200;
  console.log("Velocidad disminuida, nuevo intervalo: " + intervalo + " ms.");
  if (intervaloID) {
    detenerGeneradorAleatorio();
    iniciarGeneradorAleatorio(); // Reiniciar con la nueva velocidad
  }
}

// Añadir los event listeners a cada botón
btnMayusculas.addEventListener('click', convertirMayusculas);
btnMinusculas.addEventListener('click', convertirMinusculas);
btnPrimeraLetraMayus.addEventListener('click', primeraLetraMayus);
btnUltimaLetraMayus.addEventListener('click', ultimaLetraMayus);
btnPrimeraLetraMinus.addEventListener('click', primeraLetraMinus);
btnUltimaLetraMinus.addEventListener('click', ultimaLetraMinus);
btnVocalesMayus.addEventListener('click', vocalesMayus);
btnVocalesMinus.addEventListener('click', vocalesMinus);
btnConsonantesMayus.addEventListener('click', consonantesMayus);
btnConsonantesMinus.addEventListener('click', consonantesMinus);
btnAleatorio.addEventListener('click', iniciarGeneradorAleatorio);
btnRapido.addEventListener('click', aumentarVelocidad);
btnLento.addEventListener('click', disminuirVelocidad);
btnParar.addEventListener('click', detenerGeneradorAleatorio);
