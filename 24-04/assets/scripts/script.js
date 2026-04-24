const titulo = document.querySelector('h3')
const btn = document.querySelector('button')

btn.addEventListener('click', ()=>
{
    //quando clicar a funcao vai adicionar uma classe ao titulo
    titulo.classList.toggle('red')
})

//tres imagens iguais
//embaixo de cada elas um botao