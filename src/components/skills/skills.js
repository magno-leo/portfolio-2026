import './skills.css';
import template from './skills.html?raw';
import './components/cardSkill/cardSkill.js';
import { ScrollTrigger } from 'gsap/all';
class skillsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
    let listaFiltros = [];
    const acionadoresFiltroMobile = this.querySelectorAll('.dropdown-item');
    const acionadoresCheckbox = this.querySelectorAll('.container-arredondado-glassmorphism[type="checkbox"]');
    const containerFiltros = this.querySelector('.container-filtros');
    acionadoresFiltroMobile.forEach(element => {
      element.addEventListener('click', event => {
        const dataGroup = event.currentTarget.getAttribute('data-group').toLowerCase();
        if(dataGroup == 'todos'){
            listaFiltros = filtrosExistentes;
        }else if(containerFiltros.querySelector('.container-filtro-adicionado[data-group="Todos"]')){
            containerFiltros.querySelector('.container-filtro-adicionado[data-group="Todos"]').remove();
            listaFiltros = [];
        }
        adicionarFiltroMobile(event); 
      });
    });

    containerFiltros.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;
        const filtro = event.target.closest('.container-filtro-adicionado');
        if (!filtro) return;
        removerFiltroMobile(filtro);
    });
    function adicionarFiltroMobile(event){
        const dataGroup = event.currentTarget.getAttribute('data-group').toLowerCase() ?? '';
        if(dataGroup =='todos'){
            containerFiltros.innerHTML =`
            <div class="container-filtro-adicionado" data-group="Todos">
                <p>Todos</p>
                <span>x</span>
            </div>    
        `;
        }else{
            adicionarFiltro(event);
            containerFiltros.innerHTML+=`
                <div class="container-filtro-adicionado" data-group="${dataGroup}">
                    <p>${dataGroup}</p>
                    <span>x</span>
                </div>    
            `;
        };
        atualizarFiltros();
        
    };
   
    function removerFiltroMobile(filtro){
        const dataGroup = filtro.getAttribute('data-group');
        if (dataGroup) {
            if(dataGroup.toLowerCase() ==='todos'){
                listaFiltros = [];
            }else{
                const index = listaFiltros.indexOf(dataGroup.toLowerCase());
            if (index !== -1) listaFiltros.splice(index, 1);
            };
        }

        filtro.remove();
        atualizarFiltros();
    }
    const filtrosNormais = this.querySelectorAll('.container-arredondado-glassmorphism[type="checkbox"]:not([data-group="Todos"])')
    const filtrosExistentes =  Array.from(filtrosNormais).map(filtro => filtro.getAttribute('data-group').toLowerCase());
    
    listaFiltros = filtrosExistentes;
    const filtroTudo = this.querySelector('.container-arredondado-glassmorphism[data-group="Todos"]')
    acionadoresCheckbox.forEach(checkbox=>{     
        checkbox.addEventListener('change',(event)=>{
            if(checkbox.checked == true){
                if(checkbox === filtroTudo){
                    filtrosNormais.forEach(element =>{
                        element.checked = false;
                    });
                    listaFiltros = filtrosExistentes;
                }else{
                    if(filtroTudo.checked) listaFiltros = [];
                    filtroTudo.checked = false;
                    adicionarFiltro(event);
                }
                
            }else{
                if(checkbox === filtroTudo ){
                    listaFiltros = [];
                }else{
                    listaFiltros.splice(listaFiltros.indexOf(checkbox.getAttribute('data-group').toLowerCase()),1);
                }
                
            };
            atualizarFiltros();
        });
    });
    const atualizarFiltros = () => {
        const cards = this.querySelectorAll('card-skill-section');
        cards.forEach(card => {
            const dataGroup = card.getAttribute('data-group').toLowerCase().split(',') ?? '';  
            card.hidden = !dataGroup.some(filtro => listaFiltros.includes(filtro.trim()))
        });
        ScrollTrigger.refresh()
    };
    const adicionarFiltro = (event) =>{
        const dataGroup = event.currentTarget.getAttribute('data-group');
        if (!dataGroup || listaFiltros.includes(dataGroup.toLowerCase())) return;
        listaFiltros.push(dataGroup.toLowerCase());
        atualizarFiltros();
        
    };
    atualizarFiltros();
  }
}

customElements.define('skills-section', skillsSection);