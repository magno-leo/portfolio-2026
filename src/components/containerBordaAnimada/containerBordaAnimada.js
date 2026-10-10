import './containerBordaAnimada.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class containerBordaAnimada extends HTMLElement {
  connectedCallback() {
    const html = `<div class="box-container-borda-animada">
    <svg class="borda-svg">
        <rect class="borda-rect" x="2" y="2" rx="8" ry="8" />
    </svg>
    <div class="conteudo-container-borda-animada">${this.innerHTML}</div>
    </div>`;
    this.innerHTML = html;
    requestAnimationFrame(() => {
      const svg = this.querySelector('.borda-svg');
      const elementoBorda = this.querySelector('.borda-rect');
      if (!svg || !elementoBorda) return;
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      if (width > 0 && height > 0){
        elementoBorda.setAttribute('width', width - 4);
        elementoBorda.setAttribute('height', height - 4);

        const comprimentoTotal = elementoBorda.getTotalLength(); 

        gsap.set(elementoBorda, {
          strokeDasharray: comprimentoTotal,
          strokeDashoffset: comprimentoTotal
        });

        gsap.to(elementoBorda, {
          strokeDashoffset: 0,       
          ease: "none",  
          scrollTrigger: {
            trigger: this, 
            start: "top 90%",          
            end: "bottom 70%",
            scrub: true
          }
        });
      };
    });
  }
}

customElements.define('container-borda-animada', containerBordaAnimada);