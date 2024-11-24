"use strict";  
import { Lista } from './Lista.js';  // Importa la clase `Lista` desde el archivo `Lista.js`.

export class Cola extends Lista {  
  constructor() {  
    super();  // Llama al constructor de la clase `Lista` para inicializar la lista.
  }

  encolar(elemento) {  
    this.enlistar(elemento);  // Usa el método `enlistar` de la clase base `Lista` para agregar un elemento al final de la cola.
  }

  desencolar() {  
    return this.lista.shift();  // Elimina y devuelve el primer elemento de la lista (FIFO: First In, First Out).
  }
}
