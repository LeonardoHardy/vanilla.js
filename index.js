const img = document.getElementById('img');
const botao = document.getElementById('botao');
let  colorindex = 0;

const trafficlight = (event) => {
    turnon [event.target.id]();
}
const nextindex = () => {
    if (colorindex < 2){
        colorindex++
    }else{
        colorindex = 0;
    }
}  
const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors [colorindex];
    turnon[color]();
    nextindex();  
}
const stopautomatico = () => {
    clearInterval (intervalid);
    
}
const turnon = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatico': () => intervalid = setInterval (changecolor, 1000)
}

botao.addEventListener ('click',trafficlight);
