const featuredAritists = document.querySelector('.featured_artists > .container');
const dropDownBtn = document.querySelector('.more_button');
const dropDownIcon = document.querySelector('.dropdown');
const container = document.querySelector('.container');
const menuIcon = document.querySelector('.menu_icon');
const menuItems = [...document.querySelectorAll('nav li a')];
const navBar = document.querySelector('.navbar');

const artists = [
  {
    name: 'Sia',
    img: './img/sia-image.jpg',
    title: 'Artist',
    description: 'Sia is a singer and Songwriter',

  },
  {
    name: 'Toons and I',
    img: './img/tones-and-i.webp',
    title: 'Artist',
    description: 'Tones and I is a singer, songwriter, and record producer',

  },
  {
    name: 'Okey Bakassi',
    img: './img/okey-bakassi-headshot.jpg',
    title: 'Comedian',
    description: 'Okey Bakassi is a stand-up comedian and actor',

  },
  {
    name: 'Kygo',
    img: './img/kygo-image.jpg',
    title: 'Artist',
    description: 'Kygo is a DJ and music producer',

  },
  {
    name: 'Santi',
    img: './img/Santi-Press-Photo-I-Square.jpeg',
    title: 'Artist',
    description: 'Santi is a alternative singer-songwriter and rapper',

  },
  {
    name: 'Tems',
    img: './img/tems-image.jpg',
    title: 'Artist',
    description: 'Tems is a singer and songwriter',

  },
]

function toggleMenuBtn() {
  if (menuIcon.src.includes('menu')) {
    menuIcon.src = 'icons/cancel-icon.svg';
  } else {
    menuIcon.src = 'icons/menu-icon.svg';
  }
}

function displayMenu() {
  if (window.innerWidth < 1000) {
    navBar.classList.toggle('show_menu');
  }
  menuIcon.classList.toggle('change_position');
  toggleMenuBtn();
}

function displayMenuItems() {
  navBar.classList.remove('show_menu');
  menuIcon.src = 'icons/menu-icon.svg';
}

menuIcon.addEventListener('click', displayMenu);
menuItems.forEach((item) => item.addEventListener('click', displayMenuItems));

function addFeaturedArtists() {
  for (let i=0; i < artists.length; i++) {
    featuredAritists.innerHTML+= `
    <div>
      <img src=${artists[i].img} class='celebrity_image' alt='headshot of ${artists[i].name}' />
      <div class='celebrity_details'>
      <h2 class='celebrity_name'> ${artists[i].name} </h2> 
      <p class='celebrity_title'>${artists[i].title}</p>
      <i class='black_line'></i>
      <p class='celebrity_info'>${artists[i].description}</p>
      </div>
    </div>
    `
      } 
}

dropDownBtn.addEventListener('click', () => {
  container.classList.toggle('slide_down');
  dropDownIcon.classList.toggle('rotate');
});

window.onload = addFeaturedArtists();