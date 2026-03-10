export const ExploreCard = (city, country, imageUrl) => {
    const article = document.createElement('article');
    article.className = 'explore-card';
    article.style.backgroundImage = `url('${imageUrl}')`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';

    const cityHeading = document.createElement('h3');
    cityHeading.className = 'card-city';
    cityHeading.textContent = city;

    const countryParagraph = document.createElement('p');
    countryParagraph.className = 'card-country';
    countryParagraph.textContent = country;

    contentDiv.appendChild(cityHeading);
    contentDiv.appendChild(countryParagraph);
    article.appendChild(contentDiv);
    
    return article;
};