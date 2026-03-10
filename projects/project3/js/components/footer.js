export const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = 'main-footer';

    const wrapper = document.createElement('div');
    wrapper.className = 'footer-wrapper';

    const copyright = document.createElement('p');
    copyright.className = 'footer-copyright';
    copyright.textContent = '© 2017 THE GREAT OUTDOORS. All rights reserved.';

    const nav = document.createElement('nav');
    nav.className = 'footer-nav';

    const ul = document.createElement('ul');
    ul.className = 'footer-nav-list';
    
    const links = [
        { href: '#about', text: 'ABOUT' },
        { href: '#explore', text: 'EXPLORE' },
        { href: '#journal', text: 'JOURNAL' },
        { href: '#search', text: 'SEARCH' }
    ];

    links.forEach(linkData => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkData.href;
        a.textContent = linkData.text;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    wrapper.appendChild(copyright);
    wrapper.appendChild(nav);
    footer.appendChild(wrapper);

    return footer;
};