import { Header } from './header.js';
import { Outdoor } from './outdoor.js';
import { ExploreWorld } from './exploreword.js';
import { Journal } from './journal.js';
import { Footer } from './footer.js';

console.log("Page component loaded");
export const Page = () => {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'page-container';

    mainContainer.appendChild(Header());

    mainContainer.appendChild(Outdoor());
    
    mainContainer.appendChild(ExploreWorld());

    mainContainer.appendChild(Journal());

    const bottomBanner = document.createElement('section');
    bottomBanner.className = 'bottom-banner';
    mainContainer.appendChild(bottomBanner);
    
    mainContainer.appendChild(Footer());

    return mainContainer;
};