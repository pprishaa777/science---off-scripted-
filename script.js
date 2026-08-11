function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value || '';
}
function setLink(id, item) {
  const el = document.getElementById(id);
  if (!el || !item) return;
  el.textContent = item.label || '';
  el.href = item.href || '#';
}
function setImage(id, src, alt) {
  const el = document.getElementById(id);
  if (!el) return;
  el.src = src;
  el.alt = alt || '';
}

function renderHeader() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.innerHTML = SITE.nav.map(item => `<a href="${item.href}">${item.label}</a>`).join('');
  const top = document.getElementById('community-top');
  if (top) { top.textContent = SITE.communityButton.label; top.href = SITE.communityButton.href; }
}

function renderHome() {
  if (!document.getElementById('hero-title')) return;
  setText('hero-eyebrow', SITE.hero.eyebrow);
  setText('hero-title', SITE.hero.title);
  setText('hero-subtitle', SITE.hero.subtitle);
  setText('hero-description', SITE.hero.description);
  setLink('hero-primary', SITE.hero.primaryButton);
  setLink('hero-secondary', SITE.hero.secondaryButton);
  setImage('hero-image', SITE.hero.image, SITE.hero.imageAlt);
  setText('hero-badge', SITE.hero.badge);

  setText('latest-eyebrow', SITE.latest.eyebrow);
  setText('latest-title', SITE.latest.title);
  setLink('latest-link', SITE.latest.link);

  const grid = document.getElementById('conversation-grid');
  grid.innerHTML = SITE.conversations.map(item => `
    <article class="conversation-card">
      <a href="${item.link}" class="card-image"><img src="${item.image}" alt="${item.imageAlt}"></a>
      <div class="card-copy">
        <p class="eyebrow">${item.eyebrow}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p class="byline"><strong>${item.person}</strong><span> · </span><span>${item.role}</span></p>
        <a class="text-link" href="${item.link}">${item.linkLabel}</a>
      </div>
    </article>
  `).join('');

  setText('featured-eyebrow', SITE.featured.eyebrow);
  setText('featured-title', SITE.featured.title);
  setLink('featured-all', SITE.featured.allLink);
  setText('featured-article-eyebrow', SITE.featured.eyebrowArticle);
  setText('featured-article-title', SITE.featured.articleTitle);
  setText('featured-description', SITE.featured.description);
  setText('featured-person', SITE.featured.person);
  setText('featured-role', SITE.featured.role);
  setImage('featured-image', SITE.featured.image, SITE.featured.imageAlt);
  setLink('featured-link', {label: SITE.featured.linkLabel, href: SITE.featured.link});

  setText('footer-community-title', SITE.footer.communityTitle);
  setText('footer-community-text', SITE.footer.communityText);
  setLink('footer-button', SITE.footer.button);
  setText('copyright', SITE.footer.copyright);
}

function renderArticle() {
  const root = document.getElementById('article-root');
  if (!root) return;
  const id = new URLSearchParams(location.search).get('id') || 'conversation-001';
  const article = ARTICLES[id];
  if (!article) {
    root.innerHTML = `<section class="simple-section section-pad"><p class="eyebrow">NOT FOUND</p><h1>That story does not exist.</h1><a class="text-link" href="index.html">← Back home</a></section>`;
    return;
  }
  document.title = `${article.title} — Science Off-Script`;
  root.innerHTML = `
    <article class="article-page">
      <div class="article-intro section-pad">
        <p class="eyebrow">${article.eyebrow}</p>
        <h1>${article.title}</h1>
        <p class="article-intro-text">${article.intro}</p>
        <p class="byline"><strong>${article.person}</strong><span> · </span><span>${article.role}</span></p>
        <p class="article-date">${article.date}</p>
      </div>
      <div class="article-hero"><img src="${article.image}" alt=""></div>
      <div class="article-body">
        ${article.body.map(section => `<section><h2>${section.heading}</h2><p>${section.text}</p></section>`).join('')}
      </div>
    </article>`;
}

renderHeader();
renderHome();
renderArticle();
