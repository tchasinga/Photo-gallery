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
          <h2>${element.name}</h2>
          <p>${element.country}</p>
        </div>
          <button class="btn">${element.more}</button>
        </div>
      </div>
    </div>
    `;
}).join('');
