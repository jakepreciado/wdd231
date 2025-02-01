// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

const formSubmission = document.lastModified;
document.getElementById("timeStamp").textContent = `${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Form
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const orgTitleInput = document.getElementById("org-title");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const businessNameInput = document.getElementById("business-name");
const membershipSelect = document.getElementById("membership");

const firstName = firstNameInput.value;
const lastName = lastNameInput.value;
const orgTitle = orgTitleInput.value;
const email = emailInput.value;
const phone = phoneInput.value;
const businessName = businessNameInput.value;
const membership = membershipSelect.value;

console.log(firstName, lastName, orgTitle, email, phone, businessName, membership);


// const params = new URLSearchParams(window.location.search);
// console.log(params);

// // Set the content of the span elements to the form values
// document.getElementById('first-name').textContent = params.get('first-name');
// document.getElementById('last-name').textContent = params.get('last-name');
// document.getElementById('email').textContent = params.get('email');
// document.getElementById('mobile').textContent = params.get('mobile');
// document.getElementById('business-name').textContent = params.get('business-name');
