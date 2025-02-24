(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('mobile-menu');

    if (window.innerWidth < 1280) {
      toggleMenu();
    }
    function toggleMenu() {
      window.addEventListener('click', e => {
        if (
          e.target.closest('#btn-close') ||
          !e.target.closest('.menu-mobile')
        ) {
          menu.classList.contains('is-open') ? closeMenu() : '';
        }
        if (e.target.closest('#burger-btn')) {
          openMenu();
        }
      });
    }

    function openMenu() {
      menu?.classList.add('is-open');
      document.body.classList.add('hidden');
    }
    function closeMenu() {
      menu?.classList.remove('is-open');
      document.body.classList.remove('hidden');
    }
  });
})();
