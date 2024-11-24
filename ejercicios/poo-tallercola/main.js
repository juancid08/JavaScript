"use strict";

// Importar funciones
import { gestionarLlegada, gestionarAtencion } from './modules/scriptTaller.js';

// Elementos del DOM
const btnLlegada = document.getElementById('introducir-coche');
const btnAtencion = document.getElementById('sacar-coche');

// Eventos
btnLlegada.addEventListener('click', gestionarLlegada);
btnAtencion.addEventListener('click', gestionarAtencion);
