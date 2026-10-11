import './containerBordaAnimada.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class containerBordaAnimada extends HTMLElement {
  connectedCallback() {
    if (!this._markupInitialized) {
      const html = `<div class="box-container-borda-animada">
      <svg class="borda-svg">
          <rect class="borda-rect" x="2" y="2" rx="8" ry="8" />
      </svg>
      <div class="conteudo-container-borda-animada">${this.innerHTML}</div>
      </div>`;
      this.innerHTML = html;
      this._markupInitialized = true;
    }

    if (this._animationInitialized || this._sizeObserver) return;

    const svg = this.querySelector('.borda-svg');
    const elementoBorda = this.querySelector('.borda-rect');
    if (!svg || !elementoBorda) return;

    this._sizeObserver = new ResizeObserver(() => {
      const width = svg.clientWidth;
      const height = svg.clientHeight;
      if (width <= 0 || height <= 0) return;

      this._sizeObserver.disconnect();
      this._sizeObserver = null;
      this._animationInitialized = true;

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
    });
    this._sizeObserver.observe(svg);
  }
}

customElements.define('container-borda-animada', containerBordaAnimada);