import { anado, elimino, anadoPrior, eliminoPrior } from './modules/scriptTarea.js';
import { generarTareaAleatoria } from './modules/aleatorio.js';

// Vinculamos los botones del DOM
const btnAñadir = document.getElementById('introducir-tarea');
const btnEliminar = document.getElementById('sacar-tarea');
const btnAñadirPrioridad = document.getElementById('introducir-prioridad');
const btnEliminarPrioridad = document.getElementById('sacar-prioridad');

// Listeners para las tareas normales
btnAñadir.addEventListener('click', () => {
  const tarea = generarTareaAleatoria();
  anado(tarea);
});

btnEliminar.addEventListener('click', elimino);

// Listeners para las tareas prioritarias
btnAñadirPrioridad.addEventListener('click', () => {
  const tarea = generarTareaAleatoria();
  anadoPrior(tarea);  // Llama ahora a anadoPrior que asigna prioridad aleatoria
});

btnEliminarPrioridad.addEventListener('click', eliminoPrior);
