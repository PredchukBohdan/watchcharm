(() => {
  const sections = document.querySelectorAll('section');
  const sectionsAndShow = document.querySelectorAll('.observe');
  const parallax = document.querySelector('.parallax');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };
  const optionsAndShow = {
    root: null,
    threshold: 0,
  };

  function handleIntersect(entries) {
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
  const observerAndShow = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, optionsAndShow);
  const observerParallax = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  sections?.forEach(section => {
    observer.observe(section);
  });
  sectionsAndShow?.forEach(section => {
    observerAndShow.observe(section);
  });
  observerParallax.observe(parallax);
})();
