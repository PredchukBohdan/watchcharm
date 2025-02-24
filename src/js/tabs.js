(() => {
  if (!customElements.get('tabs-component')) {
    class Tabs extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.setHtmlElements();
        this.initTabs();
      }
      setHtmlElements() {
        this.tabsWrapper = this.querySelector('.tabs-wrapper');
        this.tabs = this.querySelectorAll('.tabs-button');
        this.content = this.querySelector('.tabs-content');
        this.images = this.content?.querySelectorAll('img');
      }
      initTabs() {
        this.tabsWrapper?.addEventListener('click', e => {
          if (e.target.closest('.tabs-element')) {
            this.showContent(e.target.closest('.tabs-element'));
          }
        });
      }
      showContent(tab) {
        if (!tab) return;
        const type = tab.dataset.type;
        this.hideContent();
        tab.querySelector('.tabs-button').classList.add('active');
        this.images?.forEach(image => {
          image.id === type
            ? image.classList.add('active')
            : image.classList.remove('active');
        });
      }
      hideContent() {
        this.tabs?.forEach(elem => elem.classList.remove('active'));
      }
    }
    customElements.define('tabs-component', Tabs);
  }
})();
