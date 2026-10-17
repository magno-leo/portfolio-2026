import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCE2TkhJntF99D21emsd5ErbxCBISn1dro",
  authDomain: "portfolio-2026-39c85.firebaseapp.com",
  databaseURL: "https://portfolio-2026-39c85-default-rtdb.firebaseio.com",
  projectId: "portfolio-2026-39c85",
  storageBucket: "portfolio-2026-39c85.firebasestorage.app",
  messagingSenderId: "1003757616639",
  appId: "1:1003757616639:web:456f09c218db187c5bbbca"

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function adicionarMensagem(nome,telefone,email,mensagem){
    try{
        const reference = ref(database,'mensagens');
        const id_message = push(reference);
        await set(id_message,{
            'nome':nome,
            'telefone':telefone,
            'email': email,
            'mensagem':mensagem
        });
        return true
    }catch{
        return false
    }
    
};