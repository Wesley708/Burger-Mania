import { hamburguer } from './dados.js';

const cardapioDiv = document.querySelector('.receitas-container');
let i = 0;
hamburguer.forEach(burguer => {
    const div = document.createElement('div');
    if(i % 2 == 0){
        div.className = 'receitas-box inverter';
    }else{
        div.className = 'receitas-box';
    };
    console.log(i);
    i++;
    
    
    div.innerHTML = `
        <div>
            <h2>${burguer.nome}</h2>
            <p>${burguer.ingredientes}</p>    
        </div>
        <div>
            <img class="hamburguer-img" src="${burguer.imagem}" alt="Imagem do ${burguer.nome}">
        </div>`;
    cardapioDiv.appendChild(div);
});

console.log(hamburguer[0].nome);