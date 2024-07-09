// init Isotope
var $grid = $('.food-items').isotope({
  // options
});
// filter items on button click
$('.food-menu ul').on('click', 'li', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$('.food-menu ul li').click(function () {
  $('.food-menu ul li').removeClass('filter-active');
  $(this).addClass('filter-active');
});


// swiper===============

var swiper = new Swiper(".mySwiper", {
  "loop": true,
  "speed": 600,
  pagination: {
    el: ".swiper-pagination",
    "type": "bullets",
    "clickable": true,

  },
  "slidesPerView": "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,

  },
});


// testimonials swiper


var swiper = new Swiper(".mySwiper2", {
  "loop": true,
  "speed": 600,
  pagination: {
    el: ".swiper-pagination",
    "type": "bullets",
    "clickable": true,

  },
  "slidesPerView": "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,

  },
  "breakpoints": {
    "320": {
      "slidesPerView": 1,
      "spaceBetween": 40
    },
    "1200": {
      "slidesPerView": 3,
      "spaceBetween": 20
    }
  }
});

//  glightboxx====== gallery

const glightbox = GLightbox({
  selector: '.glightbox'
});



/**
* Scroll top button
*/
let scrollTop = document.querySelector('.scroll-to-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);


// preloader  


const preloader = document.querySelector('#loader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}




// active links

let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  })
}
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);







// change color on scroll navbar

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) { // Adjust the scroll value to your preference
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


// animation


function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);

