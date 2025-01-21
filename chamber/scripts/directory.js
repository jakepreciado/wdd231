// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
});



const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#businesses");

const businesses = document.querySelector('#businesses');

async function getMemberData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.members);
    displayMembersGrid(data.members);
    toggleDisplay(data.members);
}

const clearBusinesses = () => {
    businesses.innerHTML = "";
};


const displayMembersGrid = (members) => {
    clearBusinesses();
    members.forEach((member) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let cardContent = document.createElement('div')
        let logo = document.createElement('img');
        let memberInfo = document.createElement('div')
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a')

        businessName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        website.setAttribute('href', `${member.website}`);
        logo.setAttribute('src', `${member.image}`);
        logo.setAttribute('alt', `${member.name}'s image/logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', 'auto');


        card.appendChild(businessName);
        card.appendChild(cardContent);
        cardContent.appendChild(logo);
        cardContent.appendChild(memberInfo);
        memberInfo.appendChild(address);
        memberInfo.appendChild(phone);
        memberInfo.appendChild(website);

        card.classList.add('card');
        cardContent.classList.add('business-card-content');
        memberInfo.classList.add('member-information');

        businesses.classList.remove('business-list');
        businesses.classList.add('business-grid');
        businesses.appendChild(card);
    });
}


const displayMembersList = (members) => {
    clearBusinesses();
    members.forEach((member) => {
        let business = document.createElement('section');
        let line = document.createElement('div');
        let businessName = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        businessName.textContent = `${member.name}`;
        address.textContent = `- ${member.address}`;
        phone.textContent = `- ${member.phone}`;
        website.textContent = `- ${member.website}`;
        website.setAttribute('href', `${member.website}`);


        business.appendChild(line);
        line.appendChild(businessName);
        line.appendChild(address);
        line.appendChild(phone);
        line.appendChild(website);

        line.classList.add('member-line');

        businesses.classList.remove('business-grid');
        businesses.classList.add('business-list');
        businesses.appendChild(business);
    });
}

const toggleDisplay = (data) => {
    gridButton.addEventListener("click", () => displayMembersGrid(data));
    listButton.addEventListener("click", () => displayMembersList(data));
}



getMemberData();