import './projetos.css';
import template from './projetos.html?raw';
class projetosSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    
  }
}

customElements.define('projetos-section', projetosSection);