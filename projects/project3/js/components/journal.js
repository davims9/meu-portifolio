import { JournalCard } from './journalcard.js';

const newsArticles = [
    {
       date: "MAY 30, 2017",
       title: "An Unforgettable",
       description: "If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
       image: "img/yosemite.png" 
    },
    {
       date: "MAY 30, 2017",
       title: "Symphonies in Steel",
       description: "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.",
       image: "img/golden-gate.png" 
    },  
];

export const Journal = () => {
    const section = document.createElement('section');
    section.className = 'journal-section';
    section.id = 'journal';

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = 'The Journal';

    const description = document.createElement('p');
    description.className = 'section-description';
    description.textContent = 'Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.';

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'journal-cards-container';
   
    newsArticles.forEach(article => {
        const card = JournalCard(article.date, article.title, article.description, article.image);
        cardsContainer.appendChild(card);
    });

    const allPostsLink = document.createElement('a');
    allPostsLink.href = '#';
    allPostsLink.className = 'all-posts-link';
    allPostsLink.textContent = 'ALL POSTS';

    section.appendChild(title);
    section.appendChild(description);
    section.appendChild(cardsContainer);
    section.appendChild(allPostsLink);

    return section;
};