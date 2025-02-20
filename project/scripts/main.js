// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;


// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});


const gameCatalog = document.querySelector('#games');

async function getGameData() {
    const response = await fetch('data/games.json');
    const data = await response.json();
    console.table(data.games);
    fetchGames(data.games);
}

const fetchGames = (games) => {
    const shuffled = games.sort(() => 0.5 - Math.random());
    const sortedGames = shuffled.slice(0, 3);

    sortedGames.forEach((game) => {
        let card = document.createElement('section');
        let overlay = document.createElement('div');
        let title = document.createElement('h2');
        let image = document.createElement('img');

        image.setAttribute('src', `${game.image}`);
        image.setAttribute('alt', `Image of ${game.title}`);

        overlay.classList.add('overlay');
        title.textContent = `${game.title}`;
        overlay.appendChild(title);

        card.appendChild(image);
        card.appendChild(overlay);
        card.classList.add('card');
        card.classList.add('game-spotlight-card');


        card.addEventListener('click', () => {
            openModal(game.name, game.band, game.bio);
        });

        gameCatalog.appendChild(card);
    });
}

getGameData();
