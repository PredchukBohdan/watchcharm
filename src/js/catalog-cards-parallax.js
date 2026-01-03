(() => {
  if (!customElements.get('parallax-cards')) {
    class parallaxCards extends HTMLElement {
      constructor() {
        super();
        this.startParallax = this.startParallax.bind(this);
        this.stopParallax = this.stopParallax.bind(this);
      }
      connectedCallback() {
        this.bindEvents();
      }
      bindEvents() {
        this.addEventListener('mousemove', this.startParallax);
        this.addEventListener('mouseout', this.stopParallax);
      }
      startParallax(e) {
        const card = e.target.closest('.catalog-item');
        if (!card) return;

        const content = card.querySelector('.content');
        if (!content) return;

        const halfH = content.offsetHeight / 2;
        const halfW = content.offsetWidth / 2;

        content.style.transform = `
          rotateX(${-(e.offsetY - halfH) / 10}deg)
          rotateY(${(e.offsetX - halfW) / 10}deg)
        `;
      }
      stopParallax(e) {
        const card = e.target.closest('.catalog-item');
        if (!card) return;

        const content = card.querySelector('.content');
        if (!content) return;

        content.style.transform = 'rotate(0)';
      }
    }
    customElements.define('parallax-cards', parallaxCards);
  }
})();
