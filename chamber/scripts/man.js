
// Set lst modified date 
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle menu
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector("nav ul").classListtoggle("show");
});