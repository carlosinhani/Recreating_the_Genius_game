let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul 

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// Cria ordem aleatoria de cores.
let shuffleOrder = () => {
   let colorOrder = Math.floor(Math.random() * 4); 
   order[order.length] = colorOrder;
   clickedOrder = [];

   for(let i in order) {
       let elementColor = createColorElement(order[i]);
       ligthColor(elementColor, Number(i) + 1);
   }
}


// Acende a proxima cor
let ligthColor = (element, number) => {
    number =  number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 200);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


//Checa se os botoes clicados são os mesmo da ordem gerado no jogo
let chekOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        chekOrder();
    },200);
}

//funcao que retorna a  cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo\nClique em Ok para Iniciar im novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de Inicio do Jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


// Inicio do Jogo
playGame();