// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

document.addEventListener("DOMContentLoaded", function() {
    const timestamp = document.getElementById("formTimestamp");
    timestamp.value = new Date().toISOString();
});

// Modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Form
Const
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const orgTitleInput = document.getElementById("org-title");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const businessNameInput = document.getElementById("business-name");
const membershipSelect = document.getElementById("membership");
const date = document.getElementById("formTimestamp");

const firstName = firstNameInput.value;
const lastName = lastNameInput.value;
const orgTitle = orgTitleInput.value;
const email = emailInput.value;
const phone = phoneInput.value;
const businessName = businessNameInput.value;
const membership = membershipSelect.value;

console.log(firstName, lastName, orgTitle, email, phone, businessName, membership);

console.log(timestamp);

