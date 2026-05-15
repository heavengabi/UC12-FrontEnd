const menu = document.querySelector(".menu-mobile")
const menuDrop = document.querySelector("nav")

menu.addEventListener("click", () => 
{
    menuDrop.classList.toggle("visible")
}
)