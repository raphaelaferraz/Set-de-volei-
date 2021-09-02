//o prompt é uma função responsável por abrir um pop-up na página, na qual o usuário pode digitar algo. 

//para armazenar o valor digitado no prompt, guardamos esse valor em uma variável, que é: "nomeTimeA" e "nomeTimeB". 

//o console.log demonstra o dado armazenado nessa variável. 

const nomeTimeA = prompt('Digite aqui o nome do Time A:');
const nomeTimeB = prompt('Digite aqui o nome do Time B:');
//console.log(nomeTimeA);
//console.log(nomeTimeB);

//para modificar o HTML, especificamente o nome do time, pegando o valor digitado pelo o usuário, devemos manipular o DOM, com a função document.
    //document.getElementById('nomeTimeA');
    //document.getElementById('nomeTimeB');


//para conseguirmos alterar de fato com os valores da variável, devemos guardar o pedaço do HTML impresso pelo document (ou seja criar uma variável), e depois usar innerText para então, alterar o HTML de acordo com a variável criada.
const nomeTimeA_HTML = document.getElementById('nomeTimeA');
const nomeTimeB_HTML = document.getElementById('nomeTimeB');

nomeTimeA_HTML.innerText = nomeTimeA; 
nomeTimeB_HTML.innerText = nomeTimeB; 


// o mesmo caso de cima ocorre com os pontos, onde manipulamos a DOM para alterar os valores que serão exibidos na tela
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');

let pontoA = 0;
let pontoB = 0;

pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;



//Para conseguir alterar os textos dos sets, precisamos manipular o DOM guardar seu html em uma varável.
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

let setA = 0;
let setB = 0;



//para salvar todos os pontos, cria-se uma array
let listaDePontosTimeA = [];
let listaDePontosTimeB = [];

//cria-se uma variável para armazenar o total de pontos de cada time
let totalDePontosTimeA = 0;
let totalDePontosTimeB = 0; 



//Aqui é criado uma função que vai salvar todos os pontos do placar nas arrays criadas e depois vai zerar o placar. 
function salvarEZerarPlacarDoSetAnterior() {
    //adiciona os pontos nas Arrays
    listaDePontosTimeA.push(pontoA);
    listaDePontosTimeB.push(pontoB);

    //zera os pontos
    pontoA = 0;
    pontoB = 0;

    //exibe os pontos já zerados na tela
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
};



//Aqui é criado uma função para verificar o fim do jogo quando determinado time alcançar o número máximo de sets do vôlei de praia. 
function verificarFimDoJogo() {
    if(setA == 2){
        for (let ponto of listaDePontosTimeA) { //aqui é criado um laço para verificar cada item da Array. Nesse caso, vai verificar todos os pontos do Time A que foram salvos nessa array, e logo depois, irá somar com o total de pontos do time A + o ponto que estiver dentro da array, e o valor da soma será armazenado na variável "totalDePontosTimeA".
            totalDePontosTimeA = totalDePontosTimeA + ponto;
        }
        alert(`${nomeTimeA} ganhou o jogo fazendo ${totalDePontosTimeA} pontos!`); // depois que o laço for executado e realizar a soma, o Alert irá aparecer na tela com o nome do time digitado pelo o usuário, e com o total de pontos que aquele time fez.
    }
    if(setB == 2) {
        for (let ponto of listaDePontosTimeB) {
            totalDePontosTimeB = totalDePontosTimeB + ponto;
        }
        alert(`${nomeTimeB} venceu o jogo fazendo ${totalDePontosTimeB} pontos!`);
    }
};



//Aqui é criado uma função que verifica o fim do set de acordo com a quantidade de pontos que cada time fez, além disso, nessa função é chamada as funções de:
// salvar e zerar o set, e verificar o fim do jogo de acordo com a quantidade mínima de sets
function verificaFimDoSet() {
    if(pontoA >= 21 && pontoA - pontoB >= 2) {
        alert(`${nomeTimeA} venceu o set! `);
        setA = setA + 1; 
        setA_HTML.innerText = setA;
        salvarEZerarPlacarDoSetAnterior();
        verificarFimDoJogo();
    }
    if(pontoB >= 21 && pontoB - pontoA >= 2) {
        alert(`${nomeTimeB} venceu o set!`);
        setB = setB + 1;
        setB_HTML.innerText = setB;
        salvarEZerarPlacarDoSetAnterior();
        verificarFimDoJogo();
    }
};



//Aqui é criado uma função para que o pontoA_HTML seja clicável e toda vez que ele for clicado, será adicionado mais 1 na variável pontoA. Além disso, o HTML também é alterado pelo InnerText
pontoA_HTML.addEventListener('click', () => {
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificaFimDoSet();
});

pontoB_HTML.addEventListener('click', () => {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificaFimDoSet();
});


