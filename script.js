const textoArea = document.getElementById("texto");
const contador = document.getElementById("contador");

textoArea.addEventListener("input", () => {
  const caracteres = textoArea.value.length;
  contador.textContent = `Caracteres: ${caracteres}`;
});
