'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModel = document.querySelectorAll('.show-modal');

const mostrar = function (event) {
  console.log(event.currentTarget);
};

btnsShowModel.forEach(btn => {
  btn.addEventListener('click', mostrar);
});
