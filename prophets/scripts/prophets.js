const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
   // console.table(data.prophets); // temporary testing for data response
   displayProphets(data.prophets);
}

getProphetData(); // Call the function to fetch and display data

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elemets to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
     

        // Build the image portrait by setting all the relevant attributes
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Potrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        dob.textContent = `🎉 Date of birth: ${prophet.birthdate}`;
        pob.textContent = `🎈 Place of Birth: ${prophet.birthplace}`;

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(dob);
        card.appendChild(pob);

        // Add grid 
        cards.appendChild(card);

    });
};

