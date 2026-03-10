document.addEventListener('DOMContentLoaded', () => {

// --- DATA ---
const HERO_DATA = {
  overline: 'Desenvolvimento Web Profissional',
  headline: 'Transforme seu negócio local em uma <span class="text-accent">potência digital.</span>',
  subheadline: 'Sites rápidos, modernos e que funcionam. Do domínio ao deploy, cuido de tudo para você focar no seu negócio.',
  whatsapp: '5571991437966',
  stats: [
    { number: '3+', label: 'anos de experiência' },
    { number: '100%', label: 'Foco no cliente' }
  ]
};

const ABOUT_DATA = {
  overline: 'Quem sou eu',
  title: 'Dev com visão de negócio',
  paragraphs: [
    'Sou <strong>Davi Moura</strong>, desenvolvedor web com experiência em empresas de tecnologia, saúde e agronegócio. Combino habilidades técnicas com entendimento de processos de negócio para construir soluções que realmente geram resultado.',
    'Meu foco é entregar <strong>sites que funcionam</strong> — rápidos, seguros e com design que transmite profissionalismo para o seu cliente.'
  ],
  skills: [
    { title: 'HTML5 & CSS3', desc: 'Semântica e responsividade', icon: 'code' },
    { title: 'JavaScript/ES6+', desc: 'Lógica robusta', icon: 'monitor' },
    { title: 'Performance', desc: 'SEO e Web Vitals', icon: 'zap' },
    { title: 'Deploy', desc: 'Hospedagem e SSL', icon: 'globe' }
  ]
};

const SERVICES_DATA = [
  {
    id: 'website',
    title: 'Site Personalizado',
    description: 'Desenvolvimento sob medida para o seu negócio. Design exclusivo, rápido e focado em conversão.',
    icon: 'code',
    features: ['Design exclusivo e moderno', 'Pensado para seu negócio', '100% responsivo', 'SEO otimizado'],
    isFeatured: true
  },
  {
    id: 'hosting',
    title: 'Domínio & Hospedagem',
    description: 'Registro de domínio e hospedagem profissional com SSL e e-mail corporativo.',
    icon: 'globe',
    price: 'R$ 49',
    features: ['SSL gratuito', 'E-mail profissional', 'Suporte WhatsApp', 'Backup diário']
  }
];

const PORTFOLIO_DATA = [
  {
    id: 'catchorder',
    title: 'CatchOrder',
    description: 'Sistema de gestão inteligente para restaurantes. Digitalize seu fluxo de pedidos da mesa direto para a cozinha.',
    url: 'https://lab.alphaedtech.org.br/server09/pages/sellingPage.html',
    image: './img/catchorder.png',
    tags: ['E-commerce', 'Gestão', 'UX/UI']
  },
  {
    id: 'flexbox-layout',
    title: 'Layout Responsivo Premium',
    description: 'Landing page focada em conversão utilizando técnicas avançadas de Flexbox e Grid.',
    url: './projects/project2/index.html',
    image: './img/thumb-proj2.png',
    tags: ['CSS3', 'Flexbox', 'Design']
  },
  {
    id: 'dynamic-dom',
    title: 'Interface Dinâmica JS',
    description: 'Aplicação com manipulação intensiva de DOM e fluxos lógicos em JavaScript puro.',
    url: './projects/project3/index.html',
    image: './img/thumb-proj3.png',
    tags: ['JavaScript', 'DOM', 'SPA']
  }
];

const NAV_LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contact', isCta: true }
];

// --- ICONS ---
const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5c0 1.66 4.03 3 9 3s9-1.34 9-3M3 5v7c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12v7c0 1.66 4.03 3 9 3s9-1.34 9-3v-7"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
};

// --- RENDERERS ---
const renderNav = () => `
  <header class="site-header" id="site-header">
    <nav class="main-nav">
      <a href="#hero" class="nav-logo">
        <span class="logo-bracket">&lt;</span>DM<span class="logo-bracket">/&gt;</span>
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      <ul class="nav-links" id="nav-links">
        ${NAV_LINKS.map(link => `
          <li><a href="${link.href}" class="nav-link ${link.isCta ? 'nav-link--cta' : ''}">${link.label}</a></li>
        `).join('')}
      </ul>
    </nav>
  </header>
`;

const renderHero = () => `
  <section class="hero-section" id="hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="container">
      <div class="hero-content">
        <p class="hero-overline reveal">${HERO_DATA.overline}</p>
        <h1 class="hero-headline reveal">${HERO_DATA.headline}</h1>
        <p class="hero-subheadline reveal">${HERO_DATA.subheadline}</p>
        <div class="hero-actions reveal">
          <a href="https://wa.me/${HERO_DATA.whatsapp}" class="btn btn-primary btn--glow" target="_blank">
            Falar no WhatsApp
            ${ICONS.arrowRight}
          </a>
          <a href="#services" class="btn btn-secondary">Ver serviços</a>
        </div>
      </div>
    </div>
  </section>
`;

const renderAbout = () => `
  <section class="about-section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-content">
          <header class="about-header">
            <p class="section-overline reveal">${ABOUT_DATA.overline}</p>
            <h2 class="section-title reveal">${ABOUT_DATA.title}</h2>
          </header>
          ${ABOUT_DATA.paragraphs.map(p => `<p class="about-text reveal">${p}</p>`).join('')}
          <div class="skill-grid">
            ${ABOUT_DATA.skills.map(skill => `
              <div class="skill-item reveal">
                <div class="skill-icon">${ICONS[skill.icon] || ''}</div>
                <h3 class="skill-name">${skill.title}</h3>
                <p class="skill-desc">${skill.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="about-visual reveal">
          <div class="profile-frame">
            <img src="./img/minha-foto.png" alt="Davi Moura" class="profile-photo">
            <div class="profile-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderServices = () => `
  <section class="services-section" id="services">
    <div class="container">
      <header class="section-header">
        <p class="section-overline reveal">O que eu ofereço</p>
        <h2 class="section-title reveal">Soluções Completas</h2>
      </header>
      <div class="services-grid">
        ${SERVICES_DATA.map(service => `
          <div class="service-card reveal ${service.isFeatured ? 'service-card--featured' : ''}">
            <div class="service-icon-wrap">${ICONS[service.id === 'website' ? 'website' : 'database']}</div>
            ${service.isFeatured ? '<div class="service-badge">Mais popular</div>' : ''}
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
            ${service.price ? `
              <div class="service-price">
                <span class="price-from">A partir de</span>
                <span class="price-value">${service.price}<span class="price-period">/mês</span></span>
              </div>
            ` : ''}
            <ul class="service-features">
              ${service.features.map(f => `<li class="service-feature-item">${f}</li>`).join('')}
            </ul>
            <a href="https://wa.me/${HERO_DATA.whatsapp}" class="service-cta" target="_blank">
              Solicitar orçamento
              ${ICONS.arrowRight}
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderPortfolio = () => `
  <section class="portfolio-section" id="portfolio">
    <div class="container">
      <header class="section-header">
        <p class="section-overline reveal">Trabalhos recentes</p>
        <h2 class="section-title reveal">Projetos em destaque</h2>
      </header>
      <div class="portfolio-grid">
        ${PORTFOLIO_DATA.map(project => `
          <div class="portfolio-card reveal">
            <div class="portfolio-img-wrap">
              ${project.image 
                ? '<img src="' + project.image + '" alt="' + project.title + '" class="portfolio-img">'
                : '<div class="portfolio-placeholder"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="8" width="40" height="32" rx="3"/><path d="M4 16h40M14 8v8M34 8v8"/><circle cx="24" cy="28" r="6"/><path d="M20 28l2 2 6-4"/></svg></div>'
              }
               <div class="portfolio-overlay">
                  <a href="${project.url}" class="portfolio-link" target="_blank">
                    Ver projeto
                    ${ICONS.external}
                  </a>
               </div>
            </div>
            <div class="portfolio-info">
              <h3 class="portfolio-title">${project.title}</h3>
              <p class="portfolio-desc">${project.description}</p>
              <div class="portfolio-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const renderContact = () => `
  <section class="contact-section" id="contact">
    <div class="container">
      <header class="section-header">
        <p class="section-overline reveal">Vamos conversar</p>
        <h2 class="section-title reveal">Pronto para começar?</h2>
      </header>
      <div class="contact-grid">
        <a href="https://wa.me/${HERO_DATA.whatsapp}" class="contact-card reveal" target="_blank">
           <div class="contact-icon">${ICONS.whatsapp}</div>
           <div class="contact-info">
              <h3 class="contact-platform">WhatsApp</h3>
              <p class="contact-value">(71) 99143-7966</p>
              <span class="contact-action">Enviar mensagem</span>
           </div>
        </a>
        <a href="mailto:davimourasouza@gmail.com" class="contact-card reveal" target="_blank">
           <div class="contact-icon contact-icon--email">${ICONS.email}</div>
           <div class="contact-info">
              <h3 class="contact-platform">E-mail</h3>
              <p class="contact-value">davimourasouza@gmail.com</p>
              <span class="contact-action">Enviar e-mail</span>
           </div>
        </a>
      </div>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <a href="#hero" class="footer-logo">
          <span class="logo-bracket">&lt;</span>DM<span class="logo-bracket">/&gt;</span>
        </a>
        <p class="footer-copy">&copy; 2025 Davi Moura Souza.</p>
        <div class="footer-social">
           <a href="https://github.com/davims9" target="_blank">${ICONS.code}</a>
           <a href="https://linkedin.com/in/davi-moura/" target="_blank">${ICONS.linkedin}</a>
        </div>
      </div>
    </div>
  </footer>
`;

// --- ANIMATIONS ---
const revealElement = (el, delay = 0) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';

  if (el.animate) {
    return el.animate(
      [
        { opacity: 0, transform: 'translateY(30px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 800,
        delay: delay,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards'
      }
    );
  } else {
    // Fallback if WAAPI is not supported
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    el.style.transition = 'all 800ms cubic-bezier(0.22, 1, 0.36, 1)';
  }
};

const initIntersectionObserver = () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  return observer;
};

const pulseGlow = (el) => {
  if(el.animate) {
    el.animate(
      [
        { boxShadow: '0 0 0px rgba(100, 255, 218, 0)' },
        { boxShadow: '0 0 20px rgba(100, 255, 218, 0.4)' },
        { boxShadow: '0 0 0px rgba(100, 255, 218, 0)' }
      ],
      {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
      }
    );
  }
};

// --- ORCHESTRATION ---
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderServices()}
      ${renderPortfolio()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  // Initialize Logic
  const toggle = document.querySelector('#nav-toggle');
  const links = document.querySelector('#nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('nav-links--open', !isOpen);
    });
  }

  const header = document.querySelector('#site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('site-header--scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Initialize Animations
  if ('IntersectionObserver' in window) {
    const observer = initIntersectionObserver();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    // Fallback: reveal all immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  // Special Effects
  const primaryBtn = document.querySelector('.btn-primary');
  if (primaryBtn) pulseGlow(primaryBtn);

});
