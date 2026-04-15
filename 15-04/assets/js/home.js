// pegar cada elemento que vamos usar
//como podemos identificar ester elementos?

// entre no documento HTML e pegue o elemento que tem o id "titulo"
const titulo = document.getElementById("titulo");
const botao = document.getElementById("btn");
const botao2 = document.getElementById("btn2");

//Adiciona um evento ao btn
//um evento ~e uma ação nossa
//addEventListener precisa de dois argumentos:
//o primeiro é a ação (o que dispara uma função)
//o segundo é qual função vai ser disparada
//mouseenter ativa a funcção quando poe o mouse por cima do botao
//mouseout ativa a função quando tira o mouse do botão.


function mensagem() 
{
  alert("OIEEEEEEEE");
}
botao2.addEventListener("click", mensagem);

function trocaMensagem() {
  titulo.textContent = "olaa";
}

botao2.addEventListener("click", trocaMensagem);

function trocarTexto() 
{
    titulo.textContent="ooooi"
}
botao.addEventListener('click', trocarTexto)
botao.addEventListener('mouseenter', trocaMensagem)