export const JournalCard = (date, title, description, imageUrl) => {
    const article = document.createElement('article');
    article.className = 'journal-card';
    
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'journal-image-wrapper';
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = title;
    imageWrapper.appendChild(image);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'journal-content';

    const dateParagraph = document.createElement('p');
    dateParagraph.className = 'journal-date';
    dateParagraph.textContent = date;

    const titleHeading = document.createElement('h3');
    titleHeading.className = 'journal-title';
    titleHeading.textContent = title;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.className = 'journal-description';
    descriptionParagraph.textContent = description;

    contentDiv.appendChild(dateParagraph);
    contentDiv.appendChild(titleHeading);
    contentDiv.appendChild(descriptionParagraph);
    
    article.appendChild(imageWrapper);
    article.appendChild(contentDiv);
    
    return article;
};