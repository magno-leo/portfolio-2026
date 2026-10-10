import './experiencia.css';
import template from './experiencia.html?raw';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
class experienciaSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    console.log(window.innerWidth >=992)
    if(window.innerWidth >=992){
      const track = this.querySelector(".container-conteudo-experiencia");
      const visibleTrack = this.querySelector(".container-visivel-experiencia");
      gsap.to(track, {
        x: () => -(track.scrollWidth - visibleTrack.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: visibleTrack,
          pin: true,
          scrub: 1.2, 
          pinSpacing: true,
          start: "center center",
          end: () => "+=" + (track.scrollWidth - visibleTrack.clientWidth),
          invalidateOnRefresh: true
        },
      });
    }
    
  }
}

customElements.define('experiencia-section', experienciaSection);