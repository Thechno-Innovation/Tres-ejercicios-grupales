const button = document.querySelector("button");
button.onclick = function agregarFila() {
  document.getElementById("tabla").insertRow(-1).innerHTML =
    "<td>New cell1</td> <td>New cell2</td>";
};
