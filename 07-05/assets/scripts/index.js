const div = document.querySelector("div");
const btn = document.querySelector("button");
const btnRemo = document.getElementById("remove")

btn.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("container");
  div.appendChild(box)
});

btnRemo.addEventListener("click", ()=>{
    div.children[0].remove()
})