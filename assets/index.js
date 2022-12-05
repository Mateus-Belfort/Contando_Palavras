let contagem = 0;



element = document.getElementById('register');
element.addEventListener("click", registrar);

document.addEventListener('keypress', function (e) {
  if (e.which == 13) {
    registrar();
  }
}, false);

function updateDisplay(contagem) {
  document.getElementById("score").innerHTML = contagem;
}

function registrar() {
  if (document.getElementById('word').value !== "") {
    document.getElementById('textArea').innerHTML += document.getElementById('word').value + '   ';
    document.getElementById('word').value = '';
  } else {
    alert('Por favor, digite algo para iniciar a contagem!')
  }
  updateDisplay(++contagem);
}











