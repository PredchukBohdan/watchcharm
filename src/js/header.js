(() => {
  window.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const scroll = window.scrollY;

    if (scroll > 100) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header?.classList.add('sticky');
      } else {
        header?.classList.remove('sticky');
      }
    });
  });
})();
