import {animarDigitacao} from '../utils/animacaoDigitar.js';
window.addEventListener('DOMContentLoaded', 
    ()=>{
    document.querySelectorAll('.first-title').forEach(element => {
        animarDigitacao(element,element.parentElement.parentElement.getAttribute('texto-titulo'));
    });
});