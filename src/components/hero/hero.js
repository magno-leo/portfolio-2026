import './hero.css';
import template from './hero.html?raw';
import {animarDigitacao} from '../../utils/animacaoDigitar.js';
import fotoPerfil from '../../assets/hero/foto-perfil.jpeg';
import fotolado from '../../assets/hero/fotoperfilherolg.png';
class heroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    const nomeHero = this.querySelector('#nome-hero');
    const imagemhero = this.querySelector('#foto-perfil-hero');
    const perfilhero = this.querySelector('#foto-hero-lg');
    perfilhero.setAttribute('src',fotolado);
    imagemhero.setAttribute('src',fotoPerfil);
    animarDigitacao(nomeHero,'Leonardo Magno.');
  }
}

customElements.define('hero-section', heroSection);