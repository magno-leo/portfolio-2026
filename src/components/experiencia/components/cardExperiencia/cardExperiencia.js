import './cardExperiencia.css';
import {iconePorNome} from '../../../../utils/iconePorNome.js'
class cardExperienciaSection extends HTMLElement {
  connectedCallback() {
      if (this._rendered) return;
      
      const texto_data = this.getAttribute('texto-data')??'';
      const texto_titulo = this.getAttribute('texto-titulo')??'';
      const texto_tipo = this.getAttribute('texto-tipo')??'';
      const texto_skills = this.getAttribute('skills') ?? '';
      const cor = this.getAttribute('cor') ?? '';
      const status = this.getAttribute('status') ?? '';
      const descricao = this.innerHTML;
      let htmlSkills = '';
      texto_skills.split(',').forEach(skill => {
        const skillTrimmed = String(skill).trim();
        if (!skillTrimmed) return;
        htmlSkills += `<span class="skill-card-experiencia">${skillTrimmed}</span>`;
      });
      const templateHtml = `
      <container-borda-animada class="borda-card-experiencia">
      <div class="container-conteudo-card-experiencia">
        <div class="container-top-card-experiencia d-flex justify-content-between">
        <p class="data-card-experiencia">${texto_data}</p><p class="status">${status}</p>
        </div>
        <div class="icone-card-experiencia">${iconePorNome(texto_tipo.toLowerCase(),true)}</div>
        <span class="titulo-card-experiencia">${texto_titulo}</span>
        <span class="tipo-card-experiencia">${texto_tipo}</span>
        <div class="container-skills-card-experiencia">
        ${htmlSkills}
        </div>
        <div class="container-descricao-experiencia">${descricao}</div>
      </container-borda-animada>
      `
      this.innerHTML = templateHtml;
      if(cor){
          this.querySelector('.borda-card-experiencia svg rect').style.stroke = `rgb(${cor})`;
          this.querySelectorAll('.icone-card-experiencia svg path').forEach(path => path.style.fill =`rgb(${cor})`);
          this.querySelector('.data-card-experiencia').style.color =`rgb(${cor})`;
          this.querySelector('.status').style.color =`rgb(${cor})`;
          this.querySelectorAll('.skill-card-experiencia').forEach(card=>{
              card.style.borderColor = `rgb(${cor})`
          });
          this.querySelector('.tipo-card-experiencia').style.backgroundImage = `linear-gradient(to bottom right, rgb(${`${cor}`}),rgba(${cor},0.1))`
      }else{
        this.querySelectorAll('.icone-card-experiencia svg *').forEach(path => path.style.fill ='var(--verde-primario)');
      }
      this._rendered = true;
  }
}

customElements.define('card-experiencia-section', cardExperienciaSection);