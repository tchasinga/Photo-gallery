import elementObject from "./Tools/data.js";
const mainrooting = document.querySelectorAll('.mainroot');
// Displaying the elements on the screen
mainrooting.innerHTML += elementObject.map((element) => {
const card = `
<div class="card">
    <div class="card-image">
        <img src="${element.image}" alt="image">
    </div>
    <div class="card-content">
        <h2>${element.name}</h2>
        <p>${element.country}</p>
        <button>${element.more}</button>
    </div>
`
return card;
}).join('');