// date.js

function updateFooterDates() {
    const yearSpan = document.getElementById("year");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;

    }
}

document.addEventListener("DOMContentLoaded", updateFooterDates)