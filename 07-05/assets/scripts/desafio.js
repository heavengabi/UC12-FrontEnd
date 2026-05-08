const btnAdd = document.getElementById("btn-add");
const div = document.querySelector("div");
let numero = 0;

btnAdd.addEventListener("click", () => {
  const elemento = document.createElement("p");
  elemento.addEventListener("click", () => {
    elemento.remove();
  });
  elemento.textContent = "Oii";
  elemento.classList.add("cor");
  div.appendChild(elemento);

  numero++;
  elemento.textContent = numero;
});
