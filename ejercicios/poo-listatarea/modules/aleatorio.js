"use strict";

// Lista de coches con sus respectivos emoticonos
const TAREAS = [
  '🍽️ Lavar los platos',
  '🛏️ Hacer la cama',
  '📚 Estudiar JavaScript',
  '🏋️‍♂️ Ir al gimnasio',
  '🛒 Comprar víveres',
  '📖 Leer un libro',
  '🧹 Limpiar la casa',
  '🧺 Lavar la ropa',
  '🍳 Cocinar la cena',
  '🛍️ Hacer la compra'
];

// Función para generar una tarea aleatoria
export function generarTareaAleatoria() {
  const indice = Math.floor(Math.random() * TAREAS.length);
  return TAREAS[indice];
}