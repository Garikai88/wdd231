
// Set lst modified date 
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle menu
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("show");
});

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;