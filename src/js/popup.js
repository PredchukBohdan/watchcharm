(() => {
  if (!customElements.get('media-popup')) {
    class Popup extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.setHtmlElements();
        this.togglePopup();
      }
      setHtmlElements() {
        this.imagesList = document.querySelector('.catalog-list');
      }
      togglePopup() {
        this.imagesList?.addEventListener('click', e => {
          if (e.target.closest('.catalog-item')) {
            const item = e.target.closest('.catalog-item');
            const img = item?.querySelector('img');
            this.openPopup(img);
          }
        });
        window.addEventListener('click', e => {
          if (
            e.target.closest('.media-close') ||
            e.target.closest('.media-over')
          ) {
            this.closePopup();
          }
        });
      }
      openPopup(image) {
        if (image) {
          const imgPopup = this.querySelector('img');
          imgPopup.src = image.dataset.popup;
          imgPopup.alt = image.alt;
          this.classList.add('is-open');
          document.body.classList.add('hidden');
        }
      }
      closePopup() {
        this.classList.remove('is-open');
        document.body.classList.remove('hidden');
      }
    }
    customElements.define('media-popup', Popup);
  }
})();
