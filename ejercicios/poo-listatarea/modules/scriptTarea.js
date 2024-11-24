"use strict";

const MAX_TAREAS = 10;           // Máximo de tareas sin prioridad
const MAX_TAREAS_PRIORIDAD = 10; // Máximo de tareas con prioridad
let toDo = [];
let toDoO = [];

// Mostrar mensaje en el DOM
function mostrarMensaje(mensaje) {
  const mensajeElement = document.getElementById("mensaje");
  mensajeElement.textContent = mensaje;
}

// Mostrar un mensaje en lugar de la lista
function mostrarEnLista(mensaje, ulId) {
  const ulElement = document.getElementById(ulId);
  ulElement.innerHTML = ""; // Limpia la lista
  const li = document.createElement("li");
  li.textContent = mensaje;
  li.style.fontWeight = "bold";
  ulElement.appendChild(li);
}

// Renderizar listas en el DOM
function renderizarLista(lista, ulId) {
  const ulElement = document.getElementById(ulId);
  ulElement.innerHTML = ""; // Limpia la lista existente
  lista.forEach((item) => {
    const li = document.createElement("li");
    if (typeof item === "object") {
      li.textContent = `${item.tarea} (prioridad: ${item.prioridad})`;
    } else {
      li.textContent = item;
    }
    ulElement.appendChild(li);
  });
}

// Añadir tareas a una posición aleatoria (sin prioridad)
export function anado(tarea) {
  if (toDo.length >= MAX_TAREAS) {
    mostrarEnLista("DEBERÍAS EMPEZAR A HACER LAS TAREAS", "lista-tareas");
    return;
  }
  const posicion = Math.floor(Math.random() * (toDo.length + 1));
  toDo.splice(posicion, 0, tarea);
  mostrarMensaje(`Añadida tarea "${tarea}" .`);
  renderizarLista(toDo, "lista-tareas");
}

// Eliminar tareas de una posición aleatoria (sin prioridad)
export function elimino() {
  if (toDo.length === 0) {
    mostrarEnLista("NO HAY MÁS TAREAS QUE HACER", "lista-tareas");
    return;
  }
  const posicion = Math.floor(Math.random() * toDo.length);
  const tareaEliminada = toDo.splice(posicion, 1);
  mostrarMensaje(`Eliminada tarea "${tareaEliminada}" `);
  renderizarLista(toDo, "lista-tareas");
}

// Añadir tareas con prioridad aleatoria (entre 0 y 9)
export function anadoPrior(tarea) {
  if (toDoO.length >= MAX_TAREAS_PRIORIDAD) {
    mostrarEnLista("DEBERÍAS A EMPEZAR A HACER LAS TAREAS", "lista-prioridad");
    return;
  }

  const prioridad = Math.floor(Math.random() * 10);  // Genera una prioridad aleatoria entre 0 y 9
  toDoO.push({ tarea, prioridad });
  toDoO.sort((a, b) => b.prioridad - a.prioridad); // Ordenar por prioridad (de mayor a menor)
  mostrarMensaje(`Añadida tarea "${tarea}" con prioridad ${prioridad}.`);
  renderizarLista(toDoO, "lista-prioridad");
}

// Eliminar la tarea con la prioridad más alta
export function eliminoPrior() {
  if (toDoO.length === 0) {
    mostrarEnLista("NO HAY MÁS TAREAS QUE HACER", "lista-prioridad");
    return;
  }
  const tareaEliminada = toDoO.shift(); // La tarea con más prioridad está al inicio
  mostrarMensaje(`Eliminada tarea "${tareaEliminada.tarea}" con prioridad ${tareaEliminada.prioridad}.`);
  renderizarLista(toDoO, "lista-prioridad");
}
