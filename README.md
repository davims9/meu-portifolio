# Davi Moura Dev — Landing Page Premium

## Visão Geral
Esta é uma Landing Page de alta conversão desenvolvida para serviços de desenvolvimento web. O projeto utiliza **Vite**, **TypeScript (Strict)** e **CSS Moderno (Modular)** para garantir performance extrema e uma experiência de usuário (UI/UX) de alto nível.

**Como executar:**
```bash
npm install
npm run dev
```

---

## Explicação Técnica Detalhada

### 1. Arquitetura Data-Driven (TypeScript)
**Snippet:**
```typescript
app.innerHTML = `
  ${renderNav()}
  <main>
    ${renderHero()}
    ${renderAbout()}
  </main>
`;
```
**Explicação:**
- Linha 1: O ponto de entrada da aplicação limpa o HTML estático e injeta templates funcionais.
- Linhas 3-6: Chamadas de funções que mapeiam dados (`src/data.ts`) para strings de HTML, permitindo alteração rápida de conteúdo sem mexer na estrutura.

**Natives:**
- `innerHTML`: Usado no root (`#app`) para montagem inicial rápida do DOM em Vanilla.
- `Array.map().join('')`: Padrao funcional nativo para iterar sobre listas de dados e gerar templates.

**Design:**
- **Manutenibilidade**: Mudanças de texto ou novas seções são feitas no arquivo de dados.
- **Escalabilidade**: Estrutura pronta para evoluir para um sistema de templates mais complexo ou integração com APIs.

---

### 2. Animações Programáticas (WAAPI)
**Snippet:**
```typescript
export const revealElement = (el: HTMLElement, delay = 0) => {
  return el.animate([
    { opacity: 0, transform: 'translateY(30px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], {
    duration: 800,
    delay: delay,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    fill: 'forwards'
  });
};
```
**Explicação:**
- Utiliza a **Web Animations API** para gerenciar o ciclo de vida da animação diretamente no TypeScript.
- Define estados de `opacity` e `transform` programaticamente.

**Natives:**
- `animate()`: API nativa de alto desempenho que roda na thread de composição do browser.
- `IntersectionObserver`: Dispara as animações TS apenas quando necessário.

**Design:**
- **Controle Total**: Diferente do CSS fixo, o TS permite calcular delays dinâmicos (stagger) baseados na posição do array de dados.
- **Performance**: WAAPI é tão eficiente quanto CSS Transitions, mas acessível ao código.


---

### 2. Design System & Tokens (CSS)
**Snippet:**
```css
:root {
  --color-bg: #0a192f;
  --color-accent: #64ffda;
  --transition-spring: 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
**Explicação:**
- Define variáveis (tokens) globais para manter a consistência visual.
- A cor de fundo segue o padrão 'Premium Tech' (Dark Navy).
- O sotaque em verde água (`#64ffda`) cria alto contraste para CTAs.

**Natives:**
- `CSS Custom Properties` (`--var`): Permite reutilização e facilita futuras manutenções ou criação de temas.
- `cubic-bezier`: Usado para criar uma transição com efeito "elástico" (spring), mais natural que o linear.

**Design:**
- **Acessibilidade**: Contraste rigoroso entre texto e fundo.
- **Consistência**: Centralizar cores em tokens impede o surgimento de variações ad-hoc.

---

### 3. Navegação SPA & Smooth Scroll
**Snippet:**
```typescript
function initSmoothScroll(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href')!);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
```
**Explicação:**
- Seleciona apenas links internos (que começam com `#`).
- Previne o comportamento padrão de "pulo" do browser.
- Utiliza a API nativa de scroll para rolar suavemente até a `section` alvo.

**Natives:**
- `scrollIntoView`: Método nativo moderno que dispensa bibliotecas externas como jQuery.
- `preventDefault`: Essencial para interceptar a navegação padrão da URL.

**Design:**
- **Simplicidade**: Solução previsível e leve sem dependências de terceiros.
- **SPA Feel**: Mantém o usuário na mesma página, reforçando a fluidez da aplicação.

---

## Definição de Concluído (Done)
- [x] Código testado (Vite Dev Server)
- [x] TypeScript estrito (Zero 'any')
- [x] Documentação técnica detalhada
- [x] Build limpo e otimizado
- [x] Responsividade Mobile-First confirmada
