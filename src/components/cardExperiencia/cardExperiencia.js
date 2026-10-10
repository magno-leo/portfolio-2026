import './cardExperiencia.css';
import iconeCurso from '../../assets/icones/diplomado.png';
import iconeConquista from'../../assets/icones/trofeu.png';
import iconeTrabalho from '../../assets/icones/pasta.png';
class cardExperienciaSection extends HTMLElement {
  connectedCallback() {
    const texto_data = this.getAttribute('texto-data')??'';
    const texto_titulo = this.getAttribute('texto-titulo')??'';
    const texto_tipo = this.getAttribute('texto-tipo')??'';
    const icones = {
    conquista: iconeConquista,
    curso: iconeCurso,
    trabalho: iconeTrabalho
    };
    const texto_skills = this.getAttribute('skills') ?? '';
    let htmlSkills = '';
    texto_skills.split(',').forEach(skill => {
      const skillTrimmed = String(skill).trim();
      if (!skillTrimmed) return;
      htmlSkills += `<span class="skill-card-experiencia">${skillTrimmed}</span>`;
    });
    const templateHtml = `

    <container-borda-animada>
    <div class="container-conteudo-card-experiencia">
      <span class="data-card-experiencia">${texto_data}</span>
      <img class="icone-card-experiencia" src="${icones[texto_tipo.toLowerCase()]}">
      <span class="titulo-card-experiencia">${texto_titulo}</span>
      <span class="tipo-card-experiencia">${texto_tipo}</span>
      <div class="container-skills-card-experiencia">
      ${htmlSkills}
      </div>
      </div>
    </container-borda-animada>
    `
    this.innerHTML = templateHtml;
  }
}

customElements.define('card-experiencia-section', cardExperienciaSection);