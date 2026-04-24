const img1 = document.querySelector(".img1")
const img2 = document.querySelector('.img2')
const img3= document.querySelector('.img3')
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')


/*btn1.addEventListener('click', ()=>
{ 
    // condição do if pra imagem com display none que faz ela sumir
    if(img1.style.display === "none")
    {
        img1.style.display = "block"
        btn1.textContent = "Esconder"        
    }
    else
    {
        img1.style.display = "none"
        btn1.textContent = "Mostrar"
    }
})
*/

//misericordia
btn1.addEventListener("click", ()=>
{
    img1.classList.toggle('ativar')

    if(btn1.textContent === "Esconder")
    {
        btn1.textContent = "Mostrar"
    }else{
        btn1.textContent= "Esconder"
    }
})

btn2.addEventListener("click", ()=>
{
    img2.classList.toggle('ativar')

    if(btn2.textContent === "Esconder")
    {
        btn2.textContent = "Mostrar"
    }else{
        btn2.textContent= "Esconder"
    }
})
btn3.addEventListener("click", ()=>
{
    img3.classList.toggle('ativar')

    if(btn3.textContent === "Esconder")
    {
        btn3.textContent = "Mostrar"
    }else{
        btn3.textContent= "Esconder"
    }
})



