const ham = document.querySelector('.ham');
const links = document.querySelector('.links');
const body = document.querySelector('.body');

ham.addEventListener('click', () =>{
    links.classList.toggle('activado');
    body.classList.toggle('fixed');
});


let menuOpen = false;

ham.addEventListener('click', () =>{
    if(!menuOpen){
        ham.classList.add('open');
        menuOpen = true;
    } else {
        ham.classList.remove('open');
        menuOpen = false;
    }
});


