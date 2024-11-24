"use strict";

import { Pila } from './classes/Pila.js';
import { Lista } from './classes/Lista.js';
import { gestionarIntroducir, gestionarSacar } from './modules/scriptColada.js';

// Crear instancia de Pila
export const pilaColada = new Pila();

// Elementos del DOM
const btnIntroducir = document.getElementById('introducir-prenda');
const btnSacar = document.getElementById('sacar-prenda');

// Eventos
btnIntroducir.addEventListener('click', () => gestionarIntroducir(pilaColada));
btnSacar.addEventListener('click', () => gestionarSacar(pilaColada));
