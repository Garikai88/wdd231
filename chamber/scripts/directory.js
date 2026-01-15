const url = 'data/members.json';

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    const container = document.querySelector('#member-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('section');
        card.cardList.add('card');

        card.innerHTML = `
        <img src= "images/${member.image}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.tagline}</p>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Membership: ${member.membership}</p>
        `;

        container.appendChild(card);
    });
}

getMembers();

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("main-nav").classList.toggle("hidden");
});