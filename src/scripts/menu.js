const menu = document.querySelector('.menu');
const nav = document.querySelector('#main-menu');

if (menu && nav) {
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('is-open');
  };

  menu.addEventListener('click', () => {
    const isOpen = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!isOpen));
    menu.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation menu' : 'Close navigation menu'
    );
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !nav.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menu.focus();
    }
  });
}