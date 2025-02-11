import { places } from "../data/places.mjs";

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
  document.getElementById('navbar').classList.toggle('show');
});

// Place Card
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("places-grid");

  places.slice(0, 8).forEach(place => {
    const card = document.createElement("div");
    card.classList.add("place-card");

    const title = document.createElement("h2");
    title.textContent = place.name;

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = place.photo_url;
    image.alt = place.name;
    image.setAttribute("load", "lazy");
    figure.appendChild(image);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("button");
    button.textContent = "Learn More";
    button.addEventListener("click", () => {
      alert(`More info about ${place.name}`);
    });

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    container.appendChild(card);
  });
});

// localStorage Messages
const lastVisit = localStorage.getItem("lastVisit");
const currentDate = new Date();
const visitMessageElement = document.getElementById("visit-message");

if (lastVisit) {
  const lastVisitDate = new Date(lastVisit);
  const timeDifference = currentDate - lastVisitDate; 
  
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  let message;
  if (daysDifference < 1) {
    message = "Back so soon! Awesome!";
  } else {
    message = `You last visited ${daysDifference} days ago.`;
  }

  visitMessageElement.textContent = message;
} else {
  visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisit", currentDate.toISOString());
