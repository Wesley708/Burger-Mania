import { hamburguer } from './dados.js';

const chamada = document.querySelector('.chamada');

chamada.style.backgroundImage = `url(../${hamburguer[1].imagem})`;

const div = document.createElement('div');

div.className = 'overlay';
div.innerHTML = `
        <div><h2>${hamburguer[0].nome}</h2></div>
        <div></div>
`;

chamada.appendChild(div);