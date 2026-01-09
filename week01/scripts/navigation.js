// navigation.js

function setupMenuToggle(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        nav.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupMenuToggle("menu-toggle", "main-nav");
});
