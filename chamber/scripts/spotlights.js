async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        const eligible = data.members.filter(m => m.membership === 'Gold' || m.membership === 'Silver');
        const shuffled = eligible.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0,3);

        const container = document.querySelector('#spotlights');
        container.innerHTML = selected.map(member => `
            <div class="spotlight-card>
                <img src="${member.logo}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>${member.membership} Member</strong></p>
            </div>`
        ).join('');
    } catch (error) {
        console.error('Spotlight fetch failed:', error);
    }
}

loadSpotlights();
