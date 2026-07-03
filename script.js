(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealables = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    revealables.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealables.forEach((item) => observer.observe(item));
  }

  const config = window.JESHEN_SITE_CONFIG || {};

  const setLink = (selector, href, label) => {
    const node = document.querySelector(selector);
    if (!node) return;

    if (!href || !label) {
      node.hidden = true;
      return;
    }

    node.hidden = false;
    node.href = href;

    const strong = node.querySelector('strong');
    if (strong) strong.textContent = label;
  };

  setLink('[data-contact="email"]', config.email ? `mailto:${config.email}` : '', config.email || '');
  setLink('[data-contact="phone"]', config.phoneHref || '', config.phoneDisplay || '');
  setLink('[data-contact="instagram"]', config.instagramUrl || '', config.instagramHandle || '');

  const formEmbedUrl = config.googleFormEmbedUrl || '';
  const publicFormUrl = config.googleFormPublicUrl || '';
  const formEmbedWrapper = document.getElementById('formEmbedWrapper');
  const formEmbed = document.getElementById('formEmbed');
  const formPlaceholder = document.getElementById('formPlaceholder');
  const publicFormLink = document.getElementById('publicFormLink');

  if (publicFormLink && publicFormUrl) {
    publicFormLink.hidden = false;
    publicFormLink.href = publicFormUrl;
  }

  if (formEmbedWrapper && formEmbed && formEmbedUrl) {
    formEmbed.src = formEmbedUrl;
    formEmbedWrapper.hidden = false;

    if (formPlaceholder) {
      formPlaceholder.hidden = true;
    }
  } else if (formPlaceholder) {
    formPlaceholder.hidden = false;
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryTriggers = document.querySelectorAll('.gallery-trigger');

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
  };

  if (lightbox && lightboxImage && lightboxCaption && galleryTriggers.length) {
    galleryTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const image = trigger.getAttribute('data-gallery-image');
        const alt = trigger.getAttribute('data-gallery-alt') || '';
        const caption = trigger.getAttribute('data-gallery-caption') || '';

        lightboxImage.src = image || '';
        lightboxImage.alt = alt;
        lightboxCaption.textContent = caption;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
  }
})();