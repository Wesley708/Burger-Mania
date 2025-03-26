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
    
    
    
    div.innerHTML = `
    
        <div>
            <a href="/pages/receitas.html?id=${i}">
                <h2>${burguer.nome}</h2>
            </a>
            <a href="/pages/receitas.html?id=${i}">
                <p>${burguer.ingredientes}</p>
            </a>
        </div>
        <div>
            <a href="/pages/receitas.html?id=${i}">
            <img class="hamburguer-img" src="${burguer.imagem}" alt="Imagem do ${burguer.nome}">
            </a>
        </div>
    `;
    cardapioDiv.appendChild(div);
    i++;
});

console.log(hamburguer[0].nome);