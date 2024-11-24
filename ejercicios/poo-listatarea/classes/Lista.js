"use strict";

export class Lista {
  constructor() {
    this.lista = [];  // Inicializa el arreglo vacío
  }

  enlistar(elemento) {
    this.lista.push(elemento);  // Añade un elemento al final de la lista
  }

  desenlistar() {
    return this.lista.pop();  // Elimina y devuelve el último elemento de la lista
  }

  vacio() {
    return this.lista.length === 0;  // Devuelve true si la lista está vacía
  }

  tamano() {
    return this.lista.length;  // Devuelve el número de elementos en la lista
  }

  devolver() {
    return this.lista;  // Devuelve el arreglo completo de la lista
  }
}
