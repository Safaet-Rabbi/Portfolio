// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
    }
  });
});

// Sticky navbar
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// Remove toggle icon and navbar on page load
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
   });
   ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
   ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
   ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
   ScrollReveal().reveal('.home-contact p, .about-img', { origin: 'right' });

   const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    
   });
   document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // Duration of the animations in milliseconds
        once: false,     // Whether animation should happen only once
    });
});
