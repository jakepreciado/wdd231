// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});


// Spotlight
const spotlightSection = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMemberData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.members);
    fetchSpotlights(data.members);
}

const clearSpotLight = () => {
    spotlightSection.innerHTML = "";
};


const fetchSpotlights = (members) => {
    clearSpotLight();
    const eligibleMembers = members.filter(
        (member) =>
            member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());
    const spotlights = shuffled.slice(0, 3);

    spotlights.forEach((spotlight) => {
        let card = document.createElement('section');
        let spotLightMember = document.createElement('h2');
        let cardHeader = document.createElement('div');
        let cardContent = document.createElement('div');
        let logo = document.createElement('img');
        let memberInfo = document.createElement('div');
        let membershipName = document.createElement('h5');
        let membershipLvl = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        spotLightMember.textContent = `${spotlight.name}`;
        address.textContent = `${spotlight.address}`;
        phone.textContent = `${spotlight.phone}`;
        website.textContent = `Visit Website`;
        website.setAttribute('href', `${spotlight.website}`);
        website.setAttribute('target', '_blank');
        membershipName.textContent = `${spotlight.membershipLevel}`;
        logo.setAttribute('src', `${spotlight.image}`);
        logo.setAttribute('alt', `${spotlight.name}'s image/logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        membershipLvl.setAttribute('src', `${spotlight.membershipImg}`);
        membershipLvl.setAttribute('alt', `${spotlight.name}'s membership lvl`);
        membershipLvl.setAttribute('loading', 'lazy');
        membershipLvl.setAttribute('width', '50');
        membershipLvl.setAttribute('height', '50');

        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        cardContent.appendChild(logo);
        cardContent.appendChild(memberInfo);
        cardHeader.appendChild(spotLightMember);
        cardHeader.appendChild(membershipName);
        cardHeader.appendChild(membershipLvl);
        memberInfo.appendChild(address);
        memberInfo.appendChild(phone);
        memberInfo.appendChild(website);

        card.classList.add('card');
        logo.classList.add('membership-icon');
        cardHeader.classList.add('business-card-header');
        cardContent.classList.add('business-card-content');
        membershipLvl.classList.add('membership-icon');
        memberInfo.classList.add('member-information');

        spotlightSection.appendChild(card);
    });
}

getMemberData();




