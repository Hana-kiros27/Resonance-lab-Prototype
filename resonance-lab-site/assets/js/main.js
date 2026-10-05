/**
* Trimmed from the Shuffle template (BootstrapMade.com, https://bootstrapmade.com/license/).
* Kept: header scroll state, mobile nav, scroll-to-top. Removed: preloader, AOS, Swiper, Isotope, GLightbox, PureCounter, carousel, FAQ.
*/
(function () {
  "use strict";
  const body = document.body;
  const toggle = document.querySelector('.mobile-nav-toggle');

  function setNav(open) {
    body.classList.toggle('mobile-nav-active', open);
    toggle.classList.toggle('bi-list', !open);
    toggle.classList.toggle('bi-x', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', () => setNav(!body.classList.contains('mobile-nav-active')));
  document.querySelectorAll('#navmenu a').forEach(a => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setNav(false); toggle.focus(); } });

  const scrollTop = document.querySelector('.scroll-top');
  function onScroll() {
    body.classList.toggle('scrolled', window.scrollY > 100);
    scrollTop.classList.toggle('active', window.scrollY > 100);
  }
  scrollTop.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0 }); });
  document.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);
})();
