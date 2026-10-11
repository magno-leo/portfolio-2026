import './buttonDegradeVerde.css';
import {iconePorNome} from'../../utils/iconePorNome.js'

class buttonDegradeVerde extends HTMLElement{
    connectedCallback(){
        const nome = this.getAttribute('icone');
        const texto = this.getAttribute('texto');
        const href = this.getAttribute('href')?? '';
        const blank = Boolean(this.getAttribute('blank'));
        const raw = Boolean(this.getAttribute('raw'));
        const download = this.getAttribute('download')?? '';
        const icone =iconePorNome(nome,raw);
        const templateHtml = 
        `
      <button class="container-button-degrade p-3 d-flex justify-content-center align-items-center gap-2">
        <a class="area-clicavel" href="${href}" download="${download}"></a>
        <div class="container-icone-button">
        ${raw?icone:`<img src="${icone}">`}</div>
        <span style='color: var(--cor-texto-normal);'>${texto}</span>
      </button>`
        this.innerHTML = templateHtml;
        
        if(blank) this.querySelector('.area-clicavel').setAttribute('target','_blank');
    };
};
customElements.define('button-degrade-verde', buttonDegradeVerde);