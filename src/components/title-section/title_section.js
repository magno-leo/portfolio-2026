import template from './title_section.html?raw';
import './title_section.css';

class titleSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    const tituloBackground = this.querySelector('.background-title');const tituloPrincipal = this.querySelector('.first-title');
    const textoPrincipal = this.getAttribute('texto-titulo');
    tituloBackground.innerHTML = textoPrincipal;
  }
}

customElements.define('title-section', titleSection);