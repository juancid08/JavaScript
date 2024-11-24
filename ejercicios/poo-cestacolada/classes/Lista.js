"use strict"; 

export class Lista { 
  constructor() {
    this.lista = []; // Inicializa una lista vacía como propiedad de la clase.
  }

  enlistar(elemento) { 
    // Agrega un elemento al final de la lista.
    this.lista.push(elemento); 
  }

  desenlistar() { 
    // Retira y devuelve el último elemento de la lista (LIFO).
    return this.lista.pop();
  }

  vacio() { 
    // Verifica si la lista está vacía.
    return this.lista.length === 0; 
  }

  tamano() { 
    // Devuelve el número de elementos en la lista.
    return this.lista.length; 
  }

  devolver() { 
    // Devuelve la lista completa.
    return this.lista; 
  }
}
