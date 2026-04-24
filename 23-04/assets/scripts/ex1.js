const input = document.querySelector("input");
const texto = document.getElementById("nome");
const link = document.getElementById("link");

input.addEventListener("input", (event) => {
  //textConten taltera apenas o texto
  //texto.textContent =  `Nome: ${event.target.value}`;
  //innerHTML altera texto e permite usar tags, estilos,etc
 texto.innerHTML = `Nome: <span style = 'color:red;'>${event.target.value}</span>`;
});


/*pra pegar o atributo
console.log(link.getAttribute("href"));

pra mudar o atributo

link.setAttribute("href", "https://github.com/heavengabi");

 botao.addEventListener('click', ()=>{
    imagem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4StNQgzgYb9ObigMp5RluOVKZDmhbuRlbQ&s')
     imagem.setAttribute('alt', 'Cachorro')
 })
*/

// isso aqui é pra mudar a imagem toda vez que ficar clicando no botao, usando operador ternario(if/else)
const botao = document.getElementById("botao");
const imagem = document.getElementById("imagem");
const img1_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIdFmfhu0ao9lJ4oHVL96Wz2xu71rB92BFA&s";
const img2_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4StNQgzgYb9ObigMp5RluOVKZDmhbuRlbQ&s";

  botao.addEventListener('click', ()=>(
    imagem.src = imagem.alt === "gato" ? img2_URL : img1_URL,
    imagem.alt = imagem.alt === "gato" ? "cachorro" : "gato"
  ))