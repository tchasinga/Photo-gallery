import elementObject from './Tools/data.js';


// Auto changing title

let AlertShow = false;

setInterval(() => {
  document.title = AlertShow
    ? 'Photo Gallery'
    : 'Welcome to the Photo Gallery';

  AlertShow = !AlertShow;
}, 3000);

// Displaying the elements on the screen
const mainProjectsContainer = document.querySelector('.mainroot');
mainProjectsContainer.innerHTML += elementObject.map((element) => {
    return `
    <div class="card">
      <div class="card-container">
        <div class="card-image">
          <img src="${element.image}" alt="image" />
        </div>
        <div class="card-content">
          <div class="card-title">
          <h1>${element.name}</h1>
          <p>${element.country}</p>
        </div>
        <div class="card-action">
          <p class="btn">${element.more}</p>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="aqua" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"></path></svg>
          </div>
        </div>
      </div>
    </div>
    `;
}).join('');

// Initialising the modal and adding all needed animation

