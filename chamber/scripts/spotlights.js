async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        // Normalize membership check
        const eligible = data.members.filter(m => 
            m.membership === 'gold' || m.membership.toLowerCase() === 'silver'
        );

        // Shuffle and select 3
        const shuffled = eligible.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);


        // Target the gid container
        const container = document.querySelector('.spotlight-grid');
        container.innerHTML = selected.map(member => `
            <div class="spotlight">
                <img src="images/${member.image}" alt="${member.name} logo" class="spotlight-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank" class="spotlight-link">Visit Website</a>
                <p><strong>${member.membership} Member</strong></p>
            </div>`
        ).join('');
    } catch (error) {
        console.error('Spotlight fetch failed:', error);
    }
}

loadSpotlights();
