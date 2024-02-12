'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnShowModal = document.querySelectorAll('.show-modal');

let showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

let closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', showModal);
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}
