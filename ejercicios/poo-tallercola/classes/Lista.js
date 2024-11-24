"use strict";

export class Lista {
  constructor() {
    this.lista = [];
  }

  enlistar(elemento) {
    this.lista.push(elemento);
  }

  desenlistar() {
    return this.lista.pop();
  }

  vacio() {
    return this.lista.length === 0;
  }

  tamano() {
    return this.lista.length;
  }

  devolver() {
    return this.lista;
  }
}
