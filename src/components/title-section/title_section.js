import template from './title_section.html?raw';
import './title_section.css';

class titleSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    const tituloBackground = this.querySelector('.background-title');const tituloPrincipal = this.querySelector('.first-title');
    const textoPrincipal = this.getAttribute('texto-titulo');
    tituloBackground.innerHTML = textoPrincipal;
    if(window.innerWidth <= 576 && textoPrincipal.toLowerCase() == 'experiência'){
      tituloBackground.style.fontSize = '30px'
      tituloBackground.style.top = '40%'
    }
  }
}

customElements.define('title-section', titleSection);