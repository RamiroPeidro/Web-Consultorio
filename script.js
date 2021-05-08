

const ham = document.querySelector('.ham');
const links = document.querySelector('.links');
const barras = document.querySelectorAll('.ham span')
const hero = document.querySelector('.heroText');
const body = document.querySelector('.body');

ham.addEventListener('click', () =>{
    links.classList.toggle('activado');
    hero.classList.toggle('oculto');
    body.classList.toggle('fixed');
});

/*
let ham = document.querySelector('.ham');
let enlaces = document.querySelector('.links');
let hero = document.querySelector('.heroText');
let nav = document.querySelector('.navegacion');
let body = document.querySelector('body');

ham.addEventListener('click', function() {
    enlaces.classList.toggle('activado');
    body.classList.toggle('fixed');
    hero.classList.toggle('oculto');
});

ham.addEventListener("click", () => {
    enlaces.classList.toggle('activado');
    body.classList.toggle('fixed');
    hero.classList.toggle('oculto');
})
*/