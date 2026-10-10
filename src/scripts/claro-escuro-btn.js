import logoLua from '../assets/lua.png';
export function importarBntDarkMode(){ 
    const btn_claro_escuro = document.querySelector('.button-light-dark-mode');
    const btn_close = document.querySelector('button.btn-close');
    if(localStorage.getItem('tema')=='claro'){
        document.body.classList.add('claro');
        btn_claro_escuro.classList.add('claro');
        btn_close.classList.remove('btn-close-white');
        
    }
    btn_claro_escuro.addEventListener('click',()=>{
        const claro = document.body.classList.toggle('claro');
        btn_claro_escuro.classList.toggle('claro');
        localStorage.setItem('tema',claro?'claro':'');
        btn_close.classList.toggle('btn-close-white');
    });
}