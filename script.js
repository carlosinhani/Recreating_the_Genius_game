let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul 

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.gree');
const yellow = document.querySelector('.yellow');


let shuffleOrder = () => {
   let colorOrder = Math.floor(Math.random() * 4); 
   order[order.length] = colorOrder;
   clickedOrder = [];

   for(let i in order) {
       let elementColor = createColorElement(order[i]);
       ligthColor(elementColor, Number(i) + 1);
   }
}

let ligthColor = (element, number) => {
    number =  number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}