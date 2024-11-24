"use strict"; 

import { Lista } from './Lista.js'; // Importa la clase  Lista .

export class Pila extends Lista { // Define la clase Pila que hereda de Lista.
  constructor() {
    super(); // Llama al constructor de la clase base Lista para inicializarla.
  }

  apilar(elemento) { 
    // Agrega un elemento al final de la pila (LIFO).
    this.enlistar(elemento); // Usa el método heredado enlistar para añadir el elemento.
  }

  desapilar() { 
    // Retira y devuelve el último elemento de la pila (LIFO).
    return this.desenlistar(); // Usa el método heredado desenlistar para quitar el elemento.
  }
}
