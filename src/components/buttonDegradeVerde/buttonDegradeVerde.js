import './buttonDegradeVerde.css';
const svgs = import.meta.glob('/src/assets/icones/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const achar = (mapa, nome) =>
  Object.entries(mapa).find(([caminho]) => caminho.includes(`/${nome}.`))?.[1];

class buttonDegradeVerde extends HTMLElement{
    connectedCallback(){
        const nome = this.getAttribute('icone');
        const texto = this.getAttribute('texto');
        const href = this.getAttribute('href')?? '';
        const download = this.getAttribute('download')?? '';
        let iconeHtml = '';
        if (nome) {
            const svg = achar(svgs, nome);

            if (svg) {
                iconeHtml = `<span class="botao-icone">${svg}</span>`;
            }
        }
        const templateHtml = 
        `
        
      <button class="container-button-degrade p-3 d-flex justify-content-center align-items-center gap-2">
        <a class="area-clicavel" href="${href}" download="${download}"><a/>
        ${iconeHtml}
        <span style='color: var(--cor-texto-normal);'>${texto}</span>
      </button>`
        this.innerHTML = templateHtml;
        
    };
};
customElements.define('button-degrade-verde', buttonDegradeVerde);