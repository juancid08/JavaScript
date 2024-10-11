function convertirBinario() {
  const numDecimal = document.getElementById("numDecimal").value;
  if (numDecimal === '') {
      alert("Por favor, ingresa un número decimal.");
      return;
  }
  const binario = Number(numDecimal).toString(2);
  document.getElementById("resultadoBinario").innerText = `Binario: ${binario}`;
  document.getElementById("resultadoBinario").style.display = "block";
  limpiarResultados("resultadoOctal");
  limpiarResultados("resultadoHexadecimal");
}

function convertirOctal() {
  const numDecimal = document.getElementById("numDecimal").value;
  if (numDecimal === '') {
      alert("Por favor, ingresa un número decimal.");
      return;
  }
  const octal = Number(numDecimal).toString(8);
  document.getElementById("resultadoOctal").innerText = `Octal: ${octal}`;
  document.getElementById("resultadoOctal").style.display = "block";
  limpiarResultados("resultadoBinario");
  limpiarResultados("resultadoHexadecimal");
}

function convertirHexadecimal() {
  const numDecimal = document.getElementById("numDecimal").value;
  if (numDecimal === '') {
      alert("Por favor, ingresa un número decimal.");
      return;
  }
  const hexadecimal = Number(numDecimal).toString(16).toUpperCase();
  document.getElementById("resultadoHexadecimal").innerText = `Hexadecimal: ${hexadecimal}`;
  document.getElementById("resultadoHexadecimal").style.display = "block";
  limpiarResultados("resultadoBinario");
  limpiarResultados("resultadoOctal");
}

function limpiarResultados(id) {
  document.getElementById(id).style.display = "none"; // Ocultar resultados no relevantes
}
