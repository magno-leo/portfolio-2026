import template from './formularioContato.html?raw';
import './formularioContato.css';
import {adicionarMensagem} from './configFirebase.js';
class formularioContato extends HTMLElement{
    connectedCallback(){
        this.innerHTML = template;
        const inputNome = this.querySelector('input[name="nome"]');
        const inputTel = this.querySelector('input[name="telefone"]');
        const inputEmail = this.querySelector('input[name="email"]');
        const inputMensagem = this.querySelector('textarea');
        const containersInputs = this.querySelectorAll('.container-input');
        const labelMensagem = this.querySelector('#label-text-area');
        containersInputs.forEach(container =>{
            container.addEventListener('focusout',(event)=>{
                if(event.target.value != ''){
                    
                    container.querySelector('label').style.left = '0';
                    container.querySelector('label').style.top = '0';
                    container.querySelector('label').style.color = 'var(--verde-primario)';
                    container.querySelector('label').style.transform = 'translateY(0)'
                    container.querySelector('.linha-bottom').style.width = '100%'
                }else{
                    container.querySelector('label').style = '';
                    container.querySelector('.linha-bottom').style = ''
                }
            });
        });
        inputMensagem.addEventListener('blur',()=>{
            if (inputMensagem.value){
                inputMensagem.style.borderColor = 'var(--verde-primario)';
                labelMensagem.style.color = 'var(--verde-primario)';
            }else{
                inputMensagem.style = '';
                labelMensagem.style = '';
            }
        });
        inputNome.addEventListener('input',()=>{
            const input = inputNome.value;
            inputNome.value = input.slice(0,19).replace(/[^a-zA-Z]/g,'');
        });
        inputTel.addEventListener('input',()=>{
            const input = inputTel.value;
            let telFormatado = input.slice(0,19).replace(/[a-z]/g,'');
            if(telFormatado[0]!= undefined && telFormatado[0]!='+'){
                telFormatado = '+'+telFormatado[0];
            }
            if(telFormatado[3]!= undefined && telFormatado[3]!=' '){
                telFormatado = telFormatado.slice(0,3)+' '+telFormatado[3];
            }
            if(telFormatado[4]!= undefined && telFormatado[4]!='('){
                telFormatado = telFormatado.slice(0,4)+'('+telFormatado[4];
            }
            if(telFormatado[7]!= undefined && telFormatado[7]!=')'){
                telFormatado = telFormatado.slice(0,7)+')'+telFormatado[7];
            }
            if(telFormatado[8]!= undefined && telFormatado[8]!=' '){
                telFormatado = telFormatado.slice(0,8)+' '+telFormatado[8];
            }
            if(telFormatado[14]!= undefined && telFormatado[14]!='-'){
                telFormatado = telFormatado.slice(0,14)+'-'+telFormatado[14];
            }
            inputTel.value = telFormatado; 

        });
        const regexEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let temporizadorValidacao;
        let emailCorreto = false;
        inputEmail.addEventListener('input',()=>{
            const input = inputEmail.value;
            const containerInputEmail = this.querySelector('.container-input:has(input[type="email"])');
            inputEmail.value = input.replace(/[^a-zA-Z0-9._@-]/g,'');
            clearTimeout(temporizadorValidacao);
            temporizadorValidacao = setTimeout(()=>{
                if(!regexEmail.test(input)){
                    containerInputEmail.querySelectorAll('input,label').forEach(element => {
                        emailCorreto = false;
                        element.style.color = 'red';
                    });
                    containerInputEmail.querySelector('.linha-bottom').style.backgroundColor = 'red';
                }else{
                    emailCorreto = true;
                    containerInputEmail.querySelector('input').style.color = 'var(--cor-texto-normal)';
                    containerInputEmail.querySelector('label').style.color = 'var(--verde-primario)';
                    containerInputEmail.querySelector('.linha-bottom').style.backgroundColor = 'var(--verde-primario)';
                }
            },2000);
        });
        this.addEventListener('submit',async (event)=>{
            event.preventDefault();
            if(emailCorreto){
                const dados = new FormData(this.querySelector('form'));
            
                const enviado = await adicionarMensagem(
                    dados.get('nome'),
                    dados.get('telefone'),
                    dados.get('email'),
                    dados.get('mensagem')
                );
                if(enviado){
                    containersInputs.forEach(container =>{
                        container.querySelector('input').value = '';
                        container.querySelector('label').style ='';
                        container.querySelector('.linha-bottom').style= '';
                    });
                    inputMensagem.style = '';
                    inputMensagem.value = '';
                    labelMensagem.style = '';
                }else{
                    document.querySelector('#dialog-form h5').innerHTML = 'Erro no envio ❌';
                }
                document.querySelector('#dialog-form').showModal();
                setTimeout(()=>{document.querySelector('#dialog-form').close()},3000);
            }
            
            
        });
    };
};
customElements.define('formulario-contato',formularioContato);