export const Header = () => {
    const header = document.createElement('header');
    header.className = 'main-header';

    const nav = document.createElement('nav');
    nav.className = 'main-nav';

    const ul = document.createElement('ul');
    ul.className = 'nav-list';
    
    const links = [
        { href: '#about', text: 'ABOUT' },
        { href: '#explore', text: 'EXPLORE' },
        { href: '#map', icon: true },
        { href: '#journal', text: 'JOURNAL' },
        { href: '#search', text: 'SEARCH' }
    ];

    links.forEach(linkData => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (linkData.icon) {
            a.className = 'nav-icon';
            a.innerHTML = '<span class="location-pin">📍</span>'; 
        } else {
            a.href = linkData.href;
            a.textContent = linkData.text;
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    return header;
};