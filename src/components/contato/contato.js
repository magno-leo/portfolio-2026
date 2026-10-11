import './contato.css';
import template from './contato.html?raw';
import imgEmail from '../../assets/icones/email.png'
import imgGithub from '../../assets/icones/githubContato.png'
import imgLinkedin from '../../assets/icones/linkedin.png'
import imgWhatsapp from '../../assets/icones/whatsapp.png'
import { element } from 'three/tsl';
class contatoSection extends HTMLElement {
  connectedCallback() {
    
    this.innerHTML = template;
    const imagensLinks = [imgLinkedin,imgEmail,imgWhatsapp,imgGithub]
    const imagensContato = this.querySelectorAll('.imagem-contato');
    for (let i = 0; i < imagensContato.length; i++) {
        imagensContato[i].setAttribute('src', imagensLinks[i]);
        
    }
  }
}

customElements.define('contato-section', contatoSection);