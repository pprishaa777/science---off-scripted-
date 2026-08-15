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

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  nav.innerHTML = SITE.nav.map(item => {
    const isActive = item.href === currentPage;
    return `<a href="${item.href}" class="${isActive ? 'active' : ''}">${item.label}</a>`;
  }).join('');

  const top = document.getElementById('community-top');

  if (top) {
    top.textContent = SITE.communityButton.label;
    top.href = SITE.communityButton.href;
  }
}
function renderDiscoveries() {

  const grid = document.getElementById('discoveries-grid');

  if (!grid || !PAGES || !PAGES.discoveries) return;

  const page = PAGES.discoveries;

  setText('discoveries-eyebrow', page.eyebrow);
  setText('discoveries-title', page.title);
  setText('discoveries-description', page.description);

  setText(
    'discoveries-section-eyebrow',
    page.sectionEyebrow
  );

  setText(
    'discoveries-section-title',
    page.sectionTitle
  );

  grid.innerHTML = page.stories.map(item => `

    <article class="story-card">

      <div class="story-image">
        <img
          src="${item.image}"
          alt="${item.imageAlt}"
        >
      </div>

      <div class="story-content">

        <p class="eyebrow">
          ${item.eyebrow}
        </p>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        <a href="${item.link}">
          ${item.linkLabel}
        </a>

      </div>

    </article>

  `).join('');

}
function renderHome() {

  // Homepage hero
  if (document.getElementById('hero-title')) {

    setText('hero-eyebrow', SITE.hero.eyebrow);
    setText('hero-title', SITE.hero.title);
    setText('hero-subtitle', SITE.hero.subtitle);
    setText('hero-description', SITE.hero.description);

    setLink('hero-primary', SITE.hero.primaryButton);
    setLink('hero-secondary', SITE.hero.secondaryButton);

    setImage(
      'hero-image',
      SITE.hero.image,
      SITE.hero.imageAlt
    );
  }


  // Latest conversations heading
  if (document.getElementById('latest-eyebrow')) {
    setText('latest-eyebrow', SITE.latest.eyebrow);
  }

  if (document.getElementById('latest-title')) {
    setText('latest-title', SITE.latest.title);
  }

  if (document.getElementById('latest-link')) {
    setLink('latest-link', SITE.latest.link);
  }


  // Conversation cards
  const grid = document.getElementById('conversation-grid');

  if (grid) {

    grid.innerHTML = SITE.conversations.map(item => `

      <article class="conversation-card">

        <a href="${item.link}" class="card-image">
          <img src="${item.image}" alt="${item.imageAlt}">
        </a>

        <div class="card-copy">

          <p class="eyebrow">${item.eyebrow}</p>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

          <p class="byline">
            <strong>${item.person}</strong>
            <span> · </span>
            <span>${item.role}</span>
          </p>

          <a class="text-link" href="${item.link}">
            ${item.linkLabel}
          </a>

        </div>

      </article>

    `).join('');

  }

// What's Happening in Science
const happeningGrid = document.getElementById('whats-happening-grid');

if (happeningGrid && SITE.whatsHappening) {

  setText(
    'whats-happening-eyebrow',
    SITE.whatsHappening.eyebrow
  );

  setText(
    'whats-happening-title',
    SITE.whatsHappening.title
  );

  setLink(
    'whats-happening-link',
    SITE.whatsHappening.link
  );

  happeningGrid.innerHTML = SITE.whatsHappening.stories.map(item => `

    <article class="home-discovery-card">

      <a href="${item.link}" class="card-image">
        <img src="${item.image}" alt="${item.imageAlt}">
      </a>

      <div class="card-copy">

        <p class="eyebrow">${item.eyebrow}</p>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

        <a class="text-link" href="${item.link}">
          ${item.linkLabel}
        </a>

      </div>

    </article>

  `).join('');

}
  // Featured section
  setText('featured-eyebrow', SITE.featured.eyebrow);
  setText('featured-title', SITE.featured.title);
  setLink('featured-all', SITE.featured.allLink);

  setText(
    'featured-article-eyebrow',
    SITE.featured.eyebrowArticle
  );

  setText(
    'featured-article-title',
    SITE.featured.articleTitle
  );

  setText(
    'featured-description',
    SITE.featured.description
  );

  setText(
    'featured-person',
    SITE.featured.person
  );

  setText(
    'featured-role',
    SITE.featured.role
  );

  setImage(
    'featured-image',
    SITE.featured.image,
    SITE.featured.imageAlt
  );

  setLink(
    'featured-link',
    {
      label: SITE.featured.linkLabel,
      href: SITE.featured.link
    }
  );


  // Footer
  setText(
    'footer-community-title',
    SITE.footer.communityTitle
  );

  setText(
    'footer-community-text',
    SITE.footer.communityText
  );

  setLink(
    'footer-button',
    SITE.footer.button
  );

  setText(
    'copyright',
    SITE.footer.copyright
  );

}
function renderExplained() {
  const grid = document.getElementById('explained-grid');

  if (!grid || !PAGES || !PAGES.explained) return;

  const page = PAGES.explained;

  setText('explained-eyebrow', page.eyebrow);
  setText('explained-title', page.title);
  setText('explained-description', page.description);

  setText(
    'explained-section-eyebrow',
    page.sectionEyebrow
  );

  setText(
    'explained-section-title',
    page.sectionTitle
  );

  grid.innerHTML = page.stories.map(item => `
    <article class="story-card">

      <div class="story-image">
        <img
          src="${item.image}"
          alt="${item.imageAlt}"
        >
      </div>

      <div class="story-content">

        <p class="eyebrow">
          ${item.eyebrow}
        </p>

        <h3>
          ${item.title}
        </h3>

        <p>
          ${item.description}
        </p>

        <a href="${item.link}">
          ${item.linkLabel}
        </a>

      </div>

    </article>
  `).join('');
}
function renderCommunity() {

  const title = document.getElementById('community-title');

  if (!title || !PAGES || !PAGES.community) return;

  const page = PAGES.community;

  setText('community-eyebrow', page.eyebrow);
  setText('community-title', page.title);
  setText('community-description', page.description);

  setText(
    'community-form-title',
    page.formTitle
  );

  setText(
    'community-form-text',
    page.formText
  );
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
renderDiscoveries();
renderExplained();
renderCommunity();
renderArticle();
renderWhatsHappening();
