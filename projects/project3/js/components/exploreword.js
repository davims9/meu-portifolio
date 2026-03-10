import { ExploreCard } from './explorecard.js';

const touristSpots = [
    {
       city: "Nærøyfjorden",
       country: "NORWAY",
       image: "img/naeroyfjorden.png", 
    },
    {
       city: "Antelope Canyon",
       country: "UNITED STATES",
       image: "img/antelope-canyon.png", 
    },
    {
       city: "Grossglockner",
       country: "AUSTRIA",
       image: "img/grossglockner.png", 
    },
];

export const ExploreWorld = () => {
    const section = document.createElement('section');
    section.className = 'explore-section';
    section.id = 'explore';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'Explore the World';

    const description = document.createElement('p');
    description.className = 'section-description';
    description.textContent = 'We seek to provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness.';

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    
    touristSpots.forEach(spot => {
        const card = ExploreCard(spot.city, spot.country, spot.image);
        cardsContainer.appendChild(card);
    });
    
    const seeMoreLink = document.createElement('a');
    seeMoreLink.href = '#';
    seeMoreLink.className = 'see-more-link';
    seeMoreLink.textContent = 'SEE MORE';

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(cardsContainer);
    section.appendChild(seeMoreLink);

    return section;
};