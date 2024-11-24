"use strict";

// Lista de coches con sus respectivos emoticonos
const TIPOS_COCHES = [
  { tipo: 'AMBULANCIA 🚑', emoji: '🚑' },
  { tipo: 'Coche de FÓRMULA 1 🏎️', emoji: '🏎️' },
  { tipo: 'Coche de POLICÍA 🚓', emoji: '🚓' },
  { tipo: 'Coche de BOMBEROS 🚒', emoji: '🚒' },
  { tipo: 'Coche de TEMA 🚙', emoji: '🚙' },
  { tipo: 'COCHE DE LUJO 🚗', emoji: '🚗' },
  { tipo: 'MINI COOPER 🚘', emoji: '🚘' },
  { tipo: 'CAMIONETA 🚚', emoji: '🚚' },
  { tipo: 'Coche ELEVADO 🚙', emoji: '🚙' },
  { tipo: 'MOTO 🏍️', emoji: '🏍️' }
];

// Función para generar un coche aleatorio con su tipo y emoji
export function generarCocheAleatorio() {
  const indice = Math.floor(Math.random() * TIPOS_COCHES.length);
  return TIPOS_COCHES[indice];
}