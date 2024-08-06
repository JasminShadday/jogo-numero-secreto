let listaDeNumerosSorteados = [];
let numeroLimite = 100 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
    //PODE SER:
    // let titulo = document.querySelector('h1'); // selecionamos o h1 do arquivo html 
    // titulo.innerHTML = 'Jogo do número secreto'; //alteramos o conteudo do elementos titulo do documento html
    // let paragrafo = document.querySelector('p');
    // paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
}
exibirMensagemInicial()


function verificarChute() {
    let chute = document.querySelector('input').value; // queremos pegar o valor 

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas'
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa} `
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //.=como vamos acessar o elemento
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número é menor');
        } else {
            exibirTextoNaTela('p', 'o número é maior');
        }
        tentativas++;
        limparCampo();
        exibirTextoNaTela()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite ){
        listaDeNumerosSorteados= []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){//ve se esse numero esta na lista
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);//colocando no final da lista 
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';//pegamos o valor e queremos deixar ele vazio
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}


// //DESAFIO 2
// // Criar uma função que exibe "Olá, mundo!" no console.
// function mensagemConsole(){
//     console.log('Olá, mundo!');
// }
// mensagemConsole()

// // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function parametro(nome){
//     console.log(`Olá ${nome}!`);
// }
// parametro('jasmin');

// // Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function calcularDobro(numero){
//     return numero *2;
// }
// let resultado = calcularDobro(4);
// console.log(resultado);

// // Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function numeroMedia (n1,n2,n3){
//     return (n1+n2+n3)/3;
// }
// let resultadoMedia = numeroMedia(5,5,5);
// console.log(resultadoMedia);

// // Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function maiorNumero(a,b) {
//     return a > b ? a : b;
//     // if (a > b){
//     //     return (`o número ${a} é maior`)
//     // }else {
//     //     return (`o número ${b} é maior`)
//     // }
// }
// let numeroMaior = maiorNumero(10,20)
// console.log(numeroMaior)

// // Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// function numeroMultiplicado(m){
//     return m*m;
// }
// let multiplicadoNumero = numeroMultiplicado(10);
// console.log(multiplicadoNumero);

// //DESAFIO 3

// //Crie uma lista vazia, com o nome listaGenerica.
// let listaGenerica = [];
// //Crie uma lista de linguagens de programação chamada linguagensDeProgramacao.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// //Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// // Lista ao final: ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']
// //Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// nomes = ['JavaScript', 'Python', 'Go'];
// console.log(nomes[0]);
// //Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// nomes = ['JavaScript', 'Python', 'Go'];
// console.log(nomes[1]);
// //Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
// nomes = ['JavaScript', 'Python', 'Go'];
// console.log(nomes[2]);