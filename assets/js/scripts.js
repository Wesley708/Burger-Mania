
let hamburguer = [
    {
        nome: "Hamburger Classico Americano",
        Ingredientes: "Ingredientes: Carne moída, sal, pimenta, queijo cheddar, alface, tomate, cebola roxa, picles, ketchup, mostarda e maionese. Dica: Use carne com um pouco de gordura para um hambúrguer mais suculento.",
        imagem: "assets/img/classico-americano.jpg"},
    
    {   nome: "Hamburger De Frango Grelhado",
        Ingredientes: "Ingredientes: Peito de frango moído, alho, sal, pimenta, páprica, queijo muçarela, alface, tomate e maionese temperada. Dica: Adicione um toque de limão na carne para mais sabor!",
        imagem: "assets/img/frango-grelhado.jpg"
    },
    
    {   
        nome: "Hambúrguer Duplo com Bacon",
        Ingredientes: " Dois hambúrgueres de carne moída, queijo cheddar, fatias crocantes de bacon, picles, cebola caramelizada e molho barbecue. Dica: Passe o bacon na chapa antes para soltar sabor na grelha.",
        imagem: "assets/img/duplo-bacon.png"
    },

    {   
        nome: "Hambúrguer Vegetariano de Grão-de-Bico",
        Ingredientes: "Grão-de-bico cozido, farinha de aveia, alho, cebola, cominho, cenoura ralada e azeite. Dica: Grelhe com azeite para deixar a casquinha crocante.",
        imagem: "assets/img/grão-de-bico.jpg"
    },

    {   
        nome: "Hambúrguer de Costela Defumada",
        Ingredientes: " Costela moída, sal, pimenta, queijo provolone, cebola crispy, molho barbecue e rúcula. Dica: Deixe a costela moída descansar com temperos antes de grelhar.",
        imagem: "assets/img/costela-defumada.jpg"
    },

    {   
        nome: "Hambúrguer Caprese",
        Ingredientes: "Carne moída, queijo muçarela de búfala, tomate seco, rúcula e molho pesto. Dica: Sirva no pão ciabatta para um toque gourmet!",
        imagem: "assets/img/capreze.jpg"
    },

    {   
        nome: "Hambúrguer Apimentado Mexicano",
        Ingredientes: "Carne moída temperada com pimenta caiena, jalapeño, queijo cheddar, guacamole e nachos crocantes. Dica: Use pimenta fresca para mais ardência!",
        imagem: "assets/img/apimentado-mexicano.jpg"
    },

    {   
        nome: "Hambúrguer de Salmão",
        Ingredientes: "Salmão moído, dill, raspas de limão, pimenta, alface e molho de iogurte. Dica: Grelhe delicadamente para não desmontar.",
        imagem: "assets/img/salmão.jfif"
    },

    {   
        nome: "Hambúrguer de Porco com Maçã Caramelizada",
        Ingredientes: "Carne de porco moída, alho, pimenta-do-reino, maçã caramelizada, queijo brie e rúcula. Dica: A maçã caramelizada dá um sabor agridoce incrível!",
        imagem: "assets/img/hamburguer-porco.jpg"
    }


];



burguer.src = hamburguer[0].imagem;
console.log(hamburguer[0].imagem)

const cardapioDiv = document.querySelector('.receitas-container');

        hamburguer.forEach(burguer => {
            const div = document.createElement('div');
            div.className = 'receitas-box';
            div.innerHTML = `
    <div>
        <h2>${burguer.nome}</h2>
        <p>${burguer.Ingredientes}</p>    
    </div>
    <div>
        <img src="${burguer.imagem}" alt="${burguer.nome}">
    </div>
            `;
            cardapioDiv.appendChild(div);
        });
