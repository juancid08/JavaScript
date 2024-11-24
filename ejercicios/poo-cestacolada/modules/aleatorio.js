"use strict"; 

const PRENDAS = ['CAMISA 👔', 'PANTALÓN 👖', 'CAMISETA 👕', 'CALZONCILLO 🩲', 'CALCETINES 🧦', 'CHAQUETA 🧥', 'BUFANDA 🧣', 'SUDADERA 🧥', 'CHALECO 🦺', 'ABRIGO 🧥']; 
// Define un arreglo constante de prendas de ropas

export function generarPrendaAleatoria() { 
  // Función que genera una prenda aleatoria de la lista de prendas.
  const indice = Math.floor(Math.random() * PRENDAS.length); 
  // Genera un índice aleatorio entre 0 y el largo del arreglo de prendas.

  return PRENDAS[indice]; 
  // Devuelve la prenda en la posición aleatoria generada.
}
