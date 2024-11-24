"use strict";

import { generarPrendaAleatoria } from './aleatorio.js';

// Función para gestionar el añadir prenda a la pila
export function gestionarIntroducir(pila) {
  const mensaje = document.getElementById('mensaje');
  const prenda = generarPrendaAleatoria();
  
  // Comprobamos si la pila tiene 10 prendas, si es así mostramos el mensaje de advertencia
  if (pila.tamano() >= 10) {
    mensaje.textContent = "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
    mensaje.className = 'mensaje-advertencia';
  } else {
    pila.apilar(prenda);
    mensaje.textContent = `Prendas para lavar:\n${pila.devolver().join('\n')}`; 
    mensaje.className = 'mensaje-exito';
  }
}

// Función para gestionar el retiro de prendas de la pila
export function gestionarSacar(pila) {
  const mensaje = document.getElementById('mensaje');
  
  if (pila.vacio()) {
    // Si la pila está vacía mostramos el mensaje correspondiente
    mensaje.textContent = "NO HAY MÁS ROPA QUE LAVAR";
    mensaje.className = 'mensaje-error';
  } else {
    // Si no está vacía, sacamos la prenda
    const prenda = pila.desapilar();

    // Generamos mensajes condicionales
    const ropaRestante = pila.vacio() ? "" : `Ropa restante:\n${pila.devolver().join('\n')}`; // Solo mostramos si hay ropa restante
    const siguientePrenda = pila.vacio() ? "" : `LA SIGUIENTE PRENDA A LAVAR ES:\n${pila.devolver()[pila.tamano() - 1]}`;
    
    // Creamos un mensaje dinámico, evitando líneas vacías si no hay ropa restante
    mensaje.textContent = `Has lavado:\n${prenda}\n${ropaRestante}\n${siguientePrenda}`.trim();
    mensaje.className = 'mensaje-informativo';
  }
}
