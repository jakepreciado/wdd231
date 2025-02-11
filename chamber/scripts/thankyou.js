document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);

    // Map form values to display elements
    const formValues = {

        "first-name": "firstNameDisplay",
        "last-name": "lastNameDisplay",
        "org-title": "orgTitleDisplay",
        "email": "emailDisplay",
        "phone": "phoneDisplay",
        "business-name": "businessNameDisplay",
        "membership": "membershipDisplay",
        "business-desc": "businessDescDisplay",
        "formTimestamp": "formTimestampDisplay"
    };

    // Loop through and update each display element
    for (let formValue in formValues) {
        let element = document.getElementById(formValues[formValue]);
        if (element && params.has(formValue)) {
            let value = params.get(formValue);

            // Capitalize membership level
            if (formValue === "membership") {
                value = value.replace(/\b\w/g, (char) => char.toUpperCase());
            }

            element.textContent = value;
        }
    }
});
