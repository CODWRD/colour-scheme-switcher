'use strict';

document.querySelector('.colour-ash').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(74, 71, 71)';
});

document.querySelector('.colour-green').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(0,128,0)';
});

document.querySelector('.colour-red').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(255,0,0)';
});

document.querySelector('.colour-puple').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(128, 0, 128)';
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
