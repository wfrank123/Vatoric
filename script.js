// Small interactive behaviors: nav toggle, smooth scroll, project modal, contact form handler, theme toggle.
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-nav');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on small screens
        navList.classList.remove('show');
        navToggle?.setAttribute('aria-expanded','false');
      }
    });
  });

  // Project modal behavior
  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalLinks = document.getElementById('modal-links');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(card) {
    const title = card.dataset.title || 'Project';
    const image = card.dataset.image || '';
    const description = card.dataset.description || '';
    let links = [];
    try{ links = JSON.parse(card.dataset.links || '[]'); }catch(e){ links = []; }

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    modalLinks.innerHTML = '';
    links.forEach(l => {
      const a = document.createElement('a');
      a.href = l.url;
      a.textContent = l.label;
      a.target = '_blank';
      a.rel = 'noopener';
      modalLinks.appendChild(a);
    });

    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    // trap focus briefly
    closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(card);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  // Contact form submission: simple validation and mailto fallback.
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }
    // Create mailto fallback
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    // If you have a backend, replace this with a fetch() to your endpoint.
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  });

  // Theme toggle (light/dark). Very small: toggles a data attribute on <html>.
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('site-theme');
  if (stored) root.setAttribute('data-theme', stored);
  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
    localStorage.setItem('site-theme', next);
  });

  // Optional: respect OS preference if no stored theme
  if (!stored) {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) root.setAttribute('data-theme', 'light');
  }
});
