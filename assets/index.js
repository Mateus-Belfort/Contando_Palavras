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


function resetar() {
  window.location.reload();
}


function copiar() {
  let btn = document.querySelector('#tooltip-copy');
  btn.addEventListener('click', function (e) {
    let textArea = document.querySelector('#textArea');
    textArea.select();
    document.execCommand('copy');
    alert("Texto Copiado com sucesso!")
  });
}



function imprimir() {
  //pega o Html da DIV
  var divElements = document.getElementById('textArea').innerHTML;
  var contadas = document.getElementById('result').innerHTML;
  if (divElements !== "") {
    //pega o HTML de toda tag Body
    var oldPage = document.body.innerHTML;

    //Alterna o body 
    document.body.innerHTML =
      "<html><head><title></title></head><body>" +
      divElements + "\n" + contadas + "</body>";

    //Imprime o body atual
    window.print();

    //Retorna o conteudo original da página. 
    document.body.innerHTML = oldPage;
  } else {
    alert("Registre algumas palavras para impressão!")
  }

}










