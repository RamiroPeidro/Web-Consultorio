

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

