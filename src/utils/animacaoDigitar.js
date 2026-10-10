import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger, TextPlugin);
export function animarDigitacao(element,text){
    
    gsap.to(element, {
            scrollTrigger: {
            trigger: element,            
            start: 'top 80%',         
            once: true,
            },
            duration: 2,                
            text: {
            value: text,    
            delimiter: '',            
            },
            ease: 'none',               
        });
};
