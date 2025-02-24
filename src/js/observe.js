(() => {
  const sections = document.querySelectorAll('section');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('id');
        const header = document.getElementById('header');
        const links = header.querySelectorAll('.nav-link');
        const link = header.querySelector(`[href="#${target}"]`);
        links?.forEach(link => link.classList.remove('active'));
        link?.classList.add('active');
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, options);

  sections?.forEach(section => observer.observe(section));
})();
