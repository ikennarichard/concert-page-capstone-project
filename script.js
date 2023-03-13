const featuredAritists = document.querySelector('.featured_artists > .container');
const dropDownBtn = document.querySelector('.more_button');
const dropDownIcon = document.querySelector('.dropdown');
const container = document.querySelector('.container')

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

function addFeaturedArtists() {
  for (let i=0; i < artists.length; i++) {
    featuredAritists.innerHTML+= `
    <article>
      <div class='image_container'>
        <img src=${artists[i].img} class='celebrity_image' alt='headshot of ${artists[i].name}' />
      </div>
      <div class='celebrity_details'>
      <h2 class='celebrity_name'> ${artists[i].name} </h2> 
      <p class='celebrity_title'>${artists[i].title}</p>
      <i class='black_line'></i>
      <p class='celebrity_info'>${artists[i].description}</p>
      </div>
    </article>
    `
      } 
}

dropDownBtn.addEventListener('click', () => {
  container.classList.toggle('slide_down');
  dropDownIcon.classList.toggle('rotate');
})

window.onload = addFeaturedArtists();