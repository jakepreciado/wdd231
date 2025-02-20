// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;


// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});


const gameCatalog = document.querySelector('#games-grid');
const gridButton = document.querySelector('#grid-view');
const listButton = document.querySelector('#list-view');

async function getDevData() {
    try {
        const response = await fetch('data/dev.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        fetchGames(data.development);
    } catch (error) {
        console.error('Error fetching game data:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Oops! Something went wrong while loading the games.';
        document.body.appendChild(errorMessage);
    }
}

const fetchGames = (devNotes) => {

    const shuffled = devNotes.sort(() => 0.5 - Math.random());
    const sortedDevNotes = shuffled.slice(0, 9);

    sortedDevNotes.forEach((dev) => {
        let card = document.createElement('section');
        let gameData = document.createElement('div');
        let year = document.createElement('p');
        let title = document.createElement('h2');
        let devNotes = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', `${dev.image}`);
        image.setAttribute('alt', `Image of ${dev.title}`);
        image.setAttribute('width', '300px');
        image.setAttribute('height', '200px');
        image.setAttribute('load', 'lazy');

        year.textContent = `${dev.year}`;
        title.textContent = `${dev.title}`;
        devNotes.textContent = `${dev.development}`;
        gameData.append(title);
        gameData.appendChild(year);
        gameData.appendChild(devNotes);
        card.appendChild(gameData);
        card.appendChild(image);

        gameData.classList.add('game-card-data');
        card.classList.add('card');
        card.classList.add('game-grid-card');

        gameCatalog.appendChild(card);
    });
}

const displayGrid = () => {
    gameCatalog.classList.remove('list-view');
    gameCatalog.classList.add('grid-view');
};

const displayList = () => {
    gameCatalog.classList.remove('grid-view');
    gameCatalog.classList.add('list-view');
};

const toggleDisplay = () => {
    gridButton.addEventListener("click", displayGrid);
    listButton.addEventListener("click", displayList);
};

getDevData();
toggleDisplay();
