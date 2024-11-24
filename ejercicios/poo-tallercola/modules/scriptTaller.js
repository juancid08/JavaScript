"use strict";

import { Cola } from '../classes/Cola.js';
import { generarCocheAleatorio } from './aleatorio.js';

const AFORO_TALLER = 10; // Límite de coches en la cola

// Crear la cola de coches
const colaTaller = new Cola();

// Función para gestionar la llegada de coches
export function gestionarLlegada() {
  const mensaje = document.getElementById('mensaje');
  
  // Comprobar si la cola tiene espacio (menos de 10 coches)
  if (colaTaller.tamano() >= AFORO_TALLER) {
    mensaje.textContent = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
    mensaje.className = 'mensaje-advertencia';
  } else {
    // Generar un coche aleatorio (incluyendo tipo y emoji)
    const coche = generarCocheAleatorio();
    const cocheInfo = `${coche.tipo} ${coche.emoji}`;
    
    // Encolar el coche
    colaTaller.encolar(cocheInfo);
    mensaje.textContent = `Coches en espera:\n${colaTaller.devolver().join('\n')}`;
    mensaje.className = 'mensaje-exito';
  }
}

// Función para gestionar la atención de coches
export function gestionarAtencion() {
  const mensaje = document.getElementById('mensaje');
  
  // Si no hay coches en espera
  if (colaTaller.vacio()) {
    mensaje.textContent = "NO HAY MÁS COCHES QUE REPARAR";
    mensaje.className = 'mensaje-error';
  } else {
    // Atender el primer coche en la cola (FIFO)
    const cocheAtendido = colaTaller.desencolar();
    
    // Mensaje con los coches restantes
    const cochesRestantes = colaTaller.vacio() ? "" : `Coches restantes:\n${colaTaller.devolver().join('\n')}`;
    mensaje.textContent = `Coche atendido:\n${cocheAtendido}\n${cochesRestantes}`;
    mensaje.className = 'mensaje-informativo';
  }
}
