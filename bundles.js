import elementObject from "./Tools/data.js";

// Auto changing title

let AlertShow = false;

setInterval(() => {
  document.title = AlertShow ? "Photo Gallery" : "Welcome to the Photo Gallery";

  AlertShow = !AlertShow;
}, 3000);

// Displaying the elements on the screen
const mainProjectsContainer = document.querySelector(".mainroot");
mainProjectsContainer.innerHTML += elementObject
  .map((element, index) => {
    return `
    <div class="card">
      <div class="card-container">
        <div class="cardimage">
          <img src="${element.image}" alt="image" />
        </div>
        <div class="card-content">
        <div class="modalPostion">
        <div class="cardtitle">
        <h1>${element.name}</h1>
        <p>${element.country}</p>
      </div>
      <div class="cardaction">
        <p class="btn">${element.more}</p>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="aqua" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"></path>
        </svg>
      </div>
        </div>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

// Initialising the modal and adding all needed animation

const cardImages = document.querySelectorAll(".cardimage");
const cardTitles = document.querySelectorAll(".cardtitle");
const cardActions = document.querySelectorAll(".cardaction");

cardActions.forEach((cardAction) => {
  cardAction.style.display = "none";
});

cardImages.forEach((cardImage, index) => {
  const cardTitle = cardTitles[index];
  const cardAction = cardActions[index];

  cardImage.addEventListener("mouseover", function () {
    this.style.filter = "blur(10px) saturate(0%)";
    this.style.zIndex = "-100";
    this.style.transition = "all 0.3s ease-in";
    cardTitle.style.marginTop = "-50px";
    cardTitle.style.transition = "all 0.5s ease-in";
    cardAction.style.display = "flex";
    cardAction.style.marginTop = "0px";
  });

  cardImage.addEventListener("mouseout", function () {
    this.style.filter = "none";
    cardTitle.style.marginTop = "0px";
    cardTitle.style.transition = "all 0.5s ease-in";
    cardAction.style.display = "none";
  });
});
