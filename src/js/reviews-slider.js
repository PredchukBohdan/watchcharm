(() => {
  if (!customElements.get('reviews-slider')) {
    class Reviews extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.initSlider();
      }
      disconnectedCallback() {
        this.swiper.destroy();
      }
      initSlider() {
        this.swiper = new Swiper(this, {
          slidesPerView: 1,
          spaceBetween: 20,
          speed: 800,
          effect: 'coverflow',
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              effect: 'slide',
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
              effect: 'slide',
            },
          },
        });
      }
    }
    customElements.define('reviews-slider', Reviews);
  }
})();
