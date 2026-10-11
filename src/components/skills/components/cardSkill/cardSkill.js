import './cardSkill.css';
import template from './cardSkill.html?raw';
import {iconePorNome} from '../../../../utils/iconePorNome.js'
class cardSkillSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    const texto = this.getAttribute('texto');
    const icone = (this.getAttribute('icone') ?? '').toLowerCase();
    this.querySelector('.group').innerHTML = this.getAttribute('data-group').replace(/,([^,]*)$/, ' e $1')
    this.querySelector('h5').innerHTML = texto;
    this.querySelector('button-degrade-verde').style.visibility = 'hidden';
    if(this.getAttribute('button').toLowerCase() == 'true'){
      this.querySelector('button-degrade-verde').style.visibility = 'visible';
    }
    const srcImage = iconePorNome(icone?icone:texto.toLowerCase());
    this.querySelector('.imagem-tecnologia-card').setAttribute('src',(srcImage === false?srcImage:srcImage));
  }
}

customElements.define('card-skill-section', cardSkillSection);