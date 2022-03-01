import AOS from 'aos';

AOS.init();

window.addEventListener( 'scroll', (ev) => {
  if(window.pageYOffset > 35) {
    document.querySelector('#header')
    .classList.remove('initial');

    document.querySelector('.hero')
    .classList.remove('initial');
  } else {
    document.querySelector('#header')
    .classList.add('initial');

    document.querySelector('.hero')
    .classList.add('initial');
  }
} );

let navButton = document.getElementById('nav-button');

if(navButton != undefined) {
  navButton.addEventListener('click', (ev) => {
    navButton.classList.toggle('open');
    document.querySelector('nav.nav').classList.toggle('open-menu');
  });
}