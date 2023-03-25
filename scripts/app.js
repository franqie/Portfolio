// Navigation Menu
const navMenu = document.querySelector('.navigation');
const navButton = document.querySelector('#navigation-button');
const themeButton = document.querySelector('#theme-button');
let isMenuActive = false;
let isThemeLight = false;

const navButtonLinks = document.querySelectorAll('.navigation li a');

navButtonLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log("it submits");
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
    navMenu.classList.remove('show');
    navMenu.classList.remove('animate__animated');
    navMenu.classList.remove('animate__bounceInLeft');
  });
});

navButton.addEventListener('click', () => {
  if (!isMenuActive) {
    const navIconClose = `<i class="bi bi-x-lg"></i>`;
    navButton.innerHTML = navIconClose;
    isMenuActive = true;
  } else {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
  }
  // Show and Hide Menu
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('animate__animated');
  navMenu.classList.toggle('animate__bounceInLeft');
});

// themeButton.addEventListener('click', () => {
//   if (!isThemeLight) {
//     const darkIcon = `<i class="bi bi-moon"></i>`;
//     themeButton.innerHTML = darkIcon;
//     isThemeLight = true;
//   } else {
//     const lightIcon = `<i class="bi bi-brightness-high"></i>`;
//     themeButton.innerHTML = lightIcon;
//     isThemeLight = false;
//   }
//   // Add and remove light class
  
//   // navMenu.classList.toggle('show');
//   // navMenu.classList.toggle('animate__animated');
//   // navMenu.classList.toggle('animate__bounceInLeft');
// });



// Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwL0y5p_3Js8L33kKx3H35T-VrTeNnMhBeGOwBF9GungvxcVmQDlzLzrhcXkin_hBmk6A/exec';
const form = document.forms['contact__us'];
const formMsg = document.getElementById('submitMsg');
const btnText = `Send Message <i class="bi bi-arrow-right"></i>`;
    
form.addEventListener('submit', e => {
  console.log("it submits");
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      formMsg.innerHTML = "Message Sent!";
      setTimeout(() => {
        formMsg.innerHTML = btnText;
      }, 3000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});



// Splidejs Slide
const splide = new Splide('.splide', {
  type: 'loop',
  direction: 'ltr',
  width: '72%',
  height: '40rem',
  autoplay: true,
  perPage: 1,
  breakpoints: {
    1100: {
      height: '42rem',
      width: '90%'
    },
    720: {
      height: '46rem',
      width: '100%'
    },
    400: {
      height: '50rem'
    }
  }
});

splide.mount();

// Scroll Reveal
ScrollReveal().reveal('.about', { delay: 300 });
ScrollReveal().reveal('.testimonials', { delay: 300 });
ScrollReveal().reveal('.contact', { delay: 300 });



