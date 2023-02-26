const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    /*Si tenemos la clase en el nav menu visible ponerle el aria label cerrar menu, o de lo contrario lo abre*/ 
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menu");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menu");
    }
});

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Leer menos';
    }
    else{
        hideText_btn.innerHTML = 'Leer mas';
    }
}