// const page = document.getElementById("red");

// button.addEventListener("click", colors);
// button.removeEventListener("click", colors);

//script

const boton = document.querySelector("button");
const lista = document.querySelector("select");

boton.addEventListener("click", function () {
  var selected = lista.options[lista.selectedIndex].text;

  var eliminado = document.getElementById(selected);
  var throwawayNode = lista.removeChild(eliminado);
});
