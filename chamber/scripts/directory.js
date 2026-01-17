const url = 'data/members.json';

// Fetch members using asyc/wait
async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);

    }
}
   
    
// Display members dynamically
function displayMembers(members) {
    const container = document.querySelector('#members-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

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

// Toggle between grid and list views
function setupToggle() {
    const container = document.getElementById('members-container');
    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');

    gridBtn.addEventListener('click', () => {
        container.classList.add('grid');
        container.classList.remove('list');
    });

    listBtn.addEventListener('click', () => {
        container.classList.add('list');
        container.classList.remove('grid');
    });
}

// Initialize
getMembers();
setupToggle();