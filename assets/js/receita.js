import { hamburguer } from './dados.js';


function obterParametro(nome) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nome);
      }

const receitaId = obterParametro("id");

const chamada = document.querySelector('.chamada');

chamada.style.backgroundImage = `url(../${hamburguer[ receitaId ].imagem})`;

const div = document.createElement('div');

div.className = 'overlay-receita';
div.innerHTML = `
        <div><h2>${hamburguer[ receitaId ].nome}</h2></div>
        <div>
        </div>
`;
chamada.appendChild(div);

const receitaContainer = document.querySelector('.receitas-container');
const receitaDiv = document.createElement('div');
receitaDiv.className = 'receita';
receitaDiv.innerHTML = `
        <div><pre>${hamburguer[ receitaId ].receita}</pre></div>`


receitaContainer.appendChild(receitaDiv);


console.log(receitaId);