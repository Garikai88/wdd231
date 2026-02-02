
// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("show");
});

// Modal logic 
document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal;
        const targetModal = document.getElementById(modalId)
        if (targetModal) targetModal.style.display = "block";
    });
});

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        closeBtn.closest(".modal").style.display = "none";
    });
});


window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

// Captire hidden timestamp on Join page
const timestampInput = document.getElementById("timestamp");
if (timestampInput) {
    timestampInput.value = new Date().toLocaleString();
}

// Function to extract and display the submitted GET data
function displayFormData() {
    // Window reference
    const urlParams = new URLSearchParams(window.location.search)

    // List of required IDs to find in the HTML and match with URL keys
    const fields = [
        "firstname",
        "lastname",
        "email",
        "phone",
        "organization",
        "timestamp"
    ];

    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element) {
            const value = urlParams.get(field);
            element.textContent = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : "Not Provided";
        }
    });
}

// FIXED: Added missing comma and closing qoutes for the event listener 
document.addEventListener("DOMContentLoaded", displayFormData);

 

