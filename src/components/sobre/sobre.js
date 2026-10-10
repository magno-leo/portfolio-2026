import './sobre.css';
import template from './sobre.html?raw';
import iconeMapa from '../../assets/icon-map.svg';
class sobreSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    const imgMapa = this.querySelector('.icone-mapa-sobre');
    imgMapa.setAttribute('src', iconeMapa);
  }
}

customElements.define('sobre-section', sobreSection);