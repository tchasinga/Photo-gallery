import elementObject from './Tools/data.js';

const mainProjectsContainer = document.querySelector('.mainroot');

// Displaying the elements on the screen
mainProjectsContainer.innerHTML += elementObject.map((element) => {
    return `
    <div class="card">
        <div class="card-image">
            <img src="${element.image}" alt="image">
        </div>
        <div class="card-content">
            <h2>${element.name}</h2>
            <p>${element.country}</p>
            <button>${element.more}</button>
        </div>
    </div>
    `;
}).join('');
