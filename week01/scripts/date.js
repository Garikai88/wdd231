// date.js

function updateFooterDates() {
    const yearSpan = document.getElementById("currentYear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContenet = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;

    }
}

document.addEventListener("DOMContenetLoaded", updateFooterDates)