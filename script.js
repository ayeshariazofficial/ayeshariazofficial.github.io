const DATA = window.PORTFOLIO;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const header = $('.site-header');
const menuToggle = $('.menu-toggle');
const navPanel = $('.nav-panel');
const modal = $('#project-modal');
const toast = $('#toast');
let activeProject = null;
let activeMediaIndex = 0;

function setProfileContent() {
  $('#availability').textContent = DATA.profile.availability;
  $('#role-line').textContent = DATA.profile.roleLine;
  $('#hero-text').textContent = DATA.profile.heroText;
  $('#about-copy').innerHTML = DATA.profile.about.map((paragraph, index) =>
    `<p class="${index === 0 ? 'lead' : ''}">${paragraph}</p>`
  ).join('') + '<a class="text-link" href="#work">See selected work <span>→</span></a>';
  $('#contact-note').textContent = DATA.profile.contactNote;
  $('#email-link').href = `mailto:${DATA.profile.email}`;
  $('#email-text').href = `mailto:${DATA.profile.email}`;
  $('#email-text').textContent = DATA.profile.email;
  $('#project-count').textContent = DATA.projects.length;
  const location = $('#location-text');
  if (location) location.textContent = DATA.profile.location;
}


function renderSocialLinks() {
  const socials = DATA.profile.socials || [];
  const target = $('#social-links');
  if (!target) return;
  target.innerHTML = socials.map(item => {
    if (item.url) {
      return `<a class="social-link" href="${item.url}" target="_blank" rel="noreferrer"><span>${item.short}</span><div><strong>${item.name}</strong><small>Open profile ↗</small></div></a>`;
    }
    return `<div class="social-link is-disabled" aria-disabled="true"><span>${item.short}</span><div><strong>${item.name}</strong><small>${item.note || 'Add later'}</small></div></div>`;
  }).join('');
}

function initialiseImageFallbacks() {
  const fallback = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#efe1dc"/><text x="450" y="286" text-anchor="middle" font-family="Georgia,serif" font-size="42" fill="#7a1f3d">Ayesha Portfolio</text><text x="450" y="335" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#7f6a70">Image file needs to be added</text></svg>`)}`;
  document.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    image.src = fallback;
  }, true);
}

function renderMarquee() {
  const text = DATA.marqueeItems.map(item => `${item} ✦`).join(' ');
  $('#marquee').innerHTML = `<span>${text}</span><span>${text}</span>`;
}

function renderTools() {
  $('#skill-grid').innerHTML = DATA.tools.map((tool, index) => `
    <article class="skill-card reveal" style="--delay:${index * 65}ms">
      <div class="skill-symbol">${tool.symbol}</div>
      <div class="skill-top"><h3>${tool.name}</h3><span>${tool.level}</span></div>
      <p>${tool.description}</p>
    </article>
  `).join('');
}

function renderEducation() {
  const target = $('#education-list');
  if (!target) return;
  target.innerHTML = (DATA.profile.education || []).map(item => `
    <article class="education-item">
      <span>${item.years}</span>
      <h3>${item.qualification}</h3>
      <p>${item.institute}</p>
      <small>${item.detail}</small>
    </article>
  `).join('');
}

function renderDigitalHighlights() {
  const target = $('#highlight-grid');
  if (!target) return;
  target.innerHTML = (DATA.digitalHighlights || []).map((item, index) => `
    <article class="highlight-card reveal" style="--delay:${index * 70}ms">
      <div class="highlight-icon">${item.icon}</div>
      <strong>${item.stat}</strong>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderWhyChooseMe() {
  const target = $('#why-grid');
  if (!target) return;
  target.innerHTML = (DATA.whyChooseMe || []).map((item, index) => `
    <article class="why-card reveal" style="--delay:${index * 75}ms">
      <span>${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderProcess() {
  $('#process-grid').innerHTML = DATA.process.map((step, index) => `
    <article class="process-card reveal" style="--delay:${index * 70}ms">
      <span>${step.number}</span><h3>${step.title}</h3><p>${step.text}</p>
    </article>
  `).join('');
}

function projectCard(project, index) {
  const mediaCount = project.media?.length || 1;
  const hasVideo = project.media?.some(item => item.type === 'video');
  return `
    <article class="project-card reveal" data-category="${project.category}" data-project="${project.id}" tabindex="0" role="button" aria-label="Open ${project.title} project" style="--delay:${(index % 3) * 70}ms">
      <div class="project-visual">
        <img src="${project.cover}" alt="${project.alt}" loading="lazy">
        <span class="project-label">${project.label}</span>
        <span class="project-count-badge">${hasVideo ? '▶ ' : ''}${mediaCount} ${mediaCount === 1 ? 'piece' : 'pieces'}</span>
        <span class="project-open">Explore project ↗</span>
      </div>
      <div class="project-meta">
        <div><span>${project.category}</span><h3>${project.title}</h3></div>
        <button type="button" tabindex="-1" aria-hidden="true">↗</button>
      </div>
    </article>
  `;
}

function renderProjects() {
  const categories = ['All', ...new Set(DATA.projects.map(project => project.category))];
  $('#filter-bar').innerHTML = categories.map((category, index) => `
    <button class="filter-btn ${index === 0 ? 'active' : ''}" type="button" data-filter="${category}">${category}</button>
  `).join('');
  $('#project-grid').innerHTML = DATA.projects.map(projectCard).join('');

  $$('.filter-btn').forEach(button => button.addEventListener('click', () => {
    $$('.filter-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    $$('.project-card').forEach(card => {
      const show = filter === 'All' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  }));

  $$('.project-card').forEach(card => {
    const open = () => openProject(card.dataset.project);
    card.addEventListener('click', open);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function stopActiveVideo() {
  const video = $('#modal-stage video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

function mediaMarkup(item) {
  if (item.type === 'video') {
    return `<video src="${item.src}" poster="${item.poster || ''}" controls playsinline preload="metadata" aria-label="${item.alt}"></video>`;
  }
  return `<img src="${item.src}" alt="${item.alt}">`;
}

function showMedia(index) {
  if (!activeProject) return;
  const items = activeProject.media || [];
  activeMediaIndex = Math.max(0, Math.min(index, items.length - 1));
  const item = items[activeMediaIndex];
  stopActiveVideo();
  $('#modal-stage').innerHTML = mediaMarkup(item);
  $$('.modal-thumb').forEach((button, i) => button.classList.toggle('active', i === activeMediaIndex));
  const newVideo = $('#modal-stage video');
  if (newVideo && matchMedia('(pointer:fine)').matches) {
    newVideo.addEventListener('loadeddata', () => newVideo.focus({ preventScroll: true }), { once: true });
  }
}

function renderMediaGallery(project) {
  const items = project.media || [];
  $('#modal-thumbs').innerHTML = items.map((item, index) => {
    const thumb = item.type === 'video' ? item.poster : item.src;
    return `
      <button class="modal-thumb ${index === 0 ? 'active' : ''}" type="button" data-index="${index}" aria-label="Show ${item.caption || `media ${index + 1}`}">
        <img src="${thumb}" alt="">
        ${item.type === 'video' ? '<span class="thumb-play">▶</span>' : ''}
        <small>${item.caption || `Piece ${index + 1}`}</small>
      </button>`;
  }).join('');
  $('#modal-thumbs').classList.toggle('single', items.length <= 1);
  $$('.modal-thumb').forEach(button => button.addEventListener('click', () => showMedia(Number(button.dataset.index))));
  showMedia(0);
}

function openProject(id) {
  const project = DATA.projects.find(item => item.id === id);
  if (!project) return;
  activeProject = project;
  $('#modal-category').textContent = `${project.category} · ${project.label}`;
  $('#modal-title').textContent = project.title;
  $('#modal-description').textContent = project.description;
  $('#modal-role').textContent = project.role;
  $('#modal-tools').textContent = project.tools;
  $('#modal-type').textContent = project.type;
  $('#modal-learning').textContent = project.learning;
  $('#modal-palette').innerHTML = project.palette.map(colour => `<i style="background:${colour}" title="${colour}"></i>`).join('');
  renderMediaGallery(project);
  modal.showModal();
  document.body.classList.add('modal-open');
}

function closeProject() {
  stopActiveVideo();
  if (modal.open) modal.close();
  document.body.classList.remove('modal-open');
  activeProject = null;
}

function initialiseReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(item => observer.observe(item));
}

function initialiseNavigation() {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    $('#scroll-progress').style.transform = `scaleX(${scrollable > 0 ? window.scrollY / scrollable : 0})`;
  }, { passive: true });

  menuToggle.addEventListener('click', () => {
    const open = navPanel.classList.toggle('open');
    menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  $$('.nav-panel a').forEach(link => link.addEventListener('click', () => {
    navPanel.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

function initialiseTheme() {
  try {
    const saved = localStorage.getItem('ayesha-theme');
    if (saved === 'midnight') document.body.classList.add('midnight');
  } catch (_) {
    // Some privacy modes block local storage; the theme toggle still works for the current visit.
  }
  $('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('midnight');
    try {
      localStorage.setItem('ayesha-theme', document.body.classList.contains('midnight') ? 'midnight' : 'rose');
    } catch (_) {}
  });
}

function initialiseRotatingWords() {
  const target = $('#rotating-word');
  let index = 0;
  setInterval(() => {
    target.classList.add('word-out');
    setTimeout(() => {
      index = (index + 1) % DATA.rotatingWords.length;
      target.textContent = DATA.rotatingWords[index];
      target.classList.remove('word-out');
    }, 260);
  }, 2200);
}

function initialiseTilt() {
  if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const scene = $('#hero-art');
  const layers = $$('.tilt-layer', scene);
  scene.addEventListener('mousemove', event => {
    const box = scene.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    layers.forEach(layer => {
      const depth = Number(layer.dataset.depth || 12);
      layer.style.setProperty('--mx', `${x * depth * 0.58}px`);
      layer.style.setProperty('--my', `${y * depth * 0.58}px`);
    });
  });
  scene.addEventListener('mouseleave', () => layers.forEach(layer => {
    layer.style.setProperty('--mx', '0px');
    layer.style.setProperty('--my', '0px');
  }));
}

function initialiseCursor() {
  if (!matchMedia('(pointer:fine)').matches) return;
  const dot = $('.cursor-dot');
  const ring = $('.cursor-ring');
  window.addEventListener('mousemove', event => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 180, fill: 'forwards' });
  });
  $$('a,button,.project-card').forEach(item => {
    item.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    item.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

function initialiseMagneticButtons() {
  if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  $$('.magnetic').forEach(button => {
    button.addEventListener('mousemove', event => {
      const box = button.getBoundingClientRect();
      const x = event.clientX - box.left - box.width / 2;
      const y = event.clientY - box.top - box.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
    });
    button.addEventListener('mouseleave', () => button.style.transform = 'translate(0,0)');
  });
}

function initialiseContact() {
  $('#copy-email').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(DATA.profile.email);
      toast.textContent = 'Email copied ✓';
    } catch {
      toast.textContent = DATA.profile.email;
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1900);
  });
}

function initialiseModal() {
  $('.modal-close').addEventListener('click', closeProject);
  modal.addEventListener('click', event => {
    const box = modal.getBoundingClientRect();
    const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
    if (outside) closeProject();
  });
  modal.addEventListener('cancel', event => {
    event.preventDefault();
    closeProject();
  });
  modal.addEventListener('close', () => {
    stopActiveVideo();
    document.body.classList.remove('modal-open');
  });
}

function hideLoader() {
  window.addEventListener('load', () => setTimeout(() => $('#page-loader').classList.add('hidden'), 450));
  setTimeout(() => $('#page-loader').classList.add('hidden'), 2200);
}

function start() {
  setProfileContent();
  renderMarquee();
  renderTools();
  renderEducation();
  renderDigitalHighlights();
  renderWhyChooseMe();
  renderProcess();
  renderProjects();
  renderSocialLinks();
  initialiseNavigation();
  initialiseTheme();
  initialiseRotatingWords();
  initialiseTilt();
  initialiseMagneticButtons();
  initialiseContact();
  initialiseModal();
  initialiseReveal();
  initialiseImageFallbacks();
  hideLoader();
  $('#year').textContent = new Date().getFullYear();
}

start();
