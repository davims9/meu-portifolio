export const Outdoor = () => {
    const section = document.createElement('section');
    section.className = 'outdoor-banner'; 
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'outdoor-content';

    const title = document.createElement('h1');
    title.className = 'outdoor-title';
    title.textContent = 'The Great Outdoors';

    const subtitle = document.createElement('p');
    subtitle.className = 'outdoor-subtitle';
    subtitle.textContent = 'Wander often. Wonder always.';

    const playButton = document.createElement('div');
    playButton.className = 'play-button';

    contentDiv.appendChild(title);
    contentDiv.appendChild(subtitle);
    contentDiv.appendChild(playButton);
    section.appendChild(contentDiv);
    
    return section;
};