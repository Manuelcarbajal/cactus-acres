document.getElementById("btn_menu").addEventListener("click",monstrar_menu);

document.getElementById("cerrar").addEventListener("click",ocultar_menu)

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");


function monstrar_menu(){
    nav.style.right = "0px"
    background_menu.style.display = "block"
}


function ocultar_menu(){
    nav.style.right = "-250px"
    background_menu.style.display = "none"
}


document.getElementById("content-slide").addEventListener("click",stop)


detener =document.getElementById("slide")

function stop(){
    detener.style.animation = "none";
}