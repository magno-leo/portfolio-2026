import template from './header.html?raw';
import './header.css';
import iconLua from'../../assets/icone-lua.png';
import iconSol from'../../assets/icone-sol.png';
class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    const imgIconeLua = this.querySelector('.icone-lua-btn-header');
    imgIconeLua.setAttribute('src',iconLua);
    const imgIconeSol = this.querySelector('.icone-sol-btn-header');
    imgIconeSol.setAttribute('src',iconSol);
    const btn_claro_escuro = document.querySelector('.button-light-dark-mode');
    const btn_close = document.querySelector('button.btn-close');
    if(localStorage.getItem('tema')=='claro'){
        document.body.classList.add('claro');
        btn_claro_escuro.classList.add('claro');
        btn_close.classList.remove('btn-close-white');
  
        imgIconeSol.style.opacity = '1'    
    }else{
      imgIconeLua.style.opacity = '1'
    }
    btn_claro_escuro.addEventListener('click',()=>{
        const claro = document.body.classList.toggle('claro');
        btn_claro_escuro.classList.toggle('claro');
        localStorage.setItem('tema',claro?'claro':'');
        btn_close.classList.toggle('btn-close-white');
        if(claro){
          imgIconeLua.style.opacity = '0'
          imgIconeSol.style.opacity = '1'
        }else{
          imgIconeLua.style.opacity = '1'
          imgIconeSol.style.opacity = '0'
        }
    });
  }
}

customElements.define('custom-header', AppHeader);