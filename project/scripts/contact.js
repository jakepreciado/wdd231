// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;


// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('submissionModal');
    const submissionContainer = document.getElementById('submissionList');

    let lastSubmission = JSON.parse(localStorage.getItem('lastSubmission')) || null;

    updateModal();

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        lastSubmission = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            businessName: document.getElementById("business-name").value || 'N/A',
            message: document.getElementById("business-desc").value
        };

        localStorage.setItem('lastSubmission', JSON.stringify(lastSubmission));

        updateModal();
        showModal();

        form.reset();
    });

    function updateModal() {
        submissionContainer.innerHTML = '';

        if (!lastSubmission) {
            submissionContainer.innerHTML = '<p>No submission yet.</p>';
            return;
        }

        submissionContainer.innerHTML = `
            <h2>Thank you for reaching out! Ill get back to you as soon as I can.</h2>
            <p>Name: ${lastSubmission.firstName} ${lastSubmission.lastName}</p>
            <p>Email: ${lastSubmission.email}</p>
            <p>Phone: ${lastSubmission.phone}</p>
            <p>Business: ${lastSubmission.businessName}</p>
            <p>Message: ${lastSubmission.message}</p>
        `;
    }

    function showModal() {
        modal.style.display = 'block';
    }

    window.closeModal = function() {
        modal.style.display = 'none';
    };

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
