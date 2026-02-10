
// Function to handle the visitor message
const visitorMsg = document.querySelector('#visitor-msg');
const lastVisit = localStorage.getItem('lastVisitDate');
const now = Date.now();

if (!lastVisit) {
    visitorMsg.textContent = "Welcome! Let us know if yo have any questions.";
} else {
    const daysSince =Math.floor((now - lastVisit) / (1000 * 60 *60 * 24));

    if (daysSince < 1) {
        visitorMsg.textContent = "Back so soon! Awesome!";

    } else {
        visitorMsg.textContent = `You last visited ${daysSince} ${daysSince === 1 ? 'day' : 'days'} ago.`;
    }
}

// Store current visit time
localStorage.setItem("lastVisitDate", now);


// Importing members and building grid cards
import { members } from '../data/members.mjs';

const grid = document.querySelector('#discover-grid');

members.forEach((member, index) => {
    const card = document.createElement('section');
    card.className = 'discover-card';

    card.style.gridArea = `item${index +1 }`;

    card.innerHTML = `
        <h2>${member.name}</h2>
        <figure>
            <img src="${member.image}" alt="${member.name}" loading="lazy" width="300" height="200">
        </figure>
        <p>${member.description}</p>
        <address>${member.address}</address>
        <button>learn more</button>
        `;
        grid.appendChild(card);
});