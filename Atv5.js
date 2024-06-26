const prompt = require('prompt-sync')();

function exibirMensagemDeBoasVindas() {
  console.log('Bem-vindo(a)! Esperamos que você aproveite sua experiência no nosso site.');
}
exibirMensagemDeBoasVindas();

function verificarParOuImpar(numero) {
  return numero % 2 === 0;
}

const numero = parseInt(prompt('Digite um número para verificar se é par ou ímpar: '));
console.log(verificarParOuImpar(numero));

function calcularMedia(numeros) {
  if (numeros.length === 0) {
    return 0;
  }

  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }

  return soma / numeros.length;
}

const numerosParaMedia = prompt('Digite os números separados por vírgula para calcular a média: ')
  .split(',')
  .map(num => parseInt(num));
console.log(calcularMedia(numerosParaMedia));

function converterParaMaiusculas(texto) {
  return texto.toUpperCase();
}

const stringParaMaiusculas = prompt('Digite uma frase para converter para maiúsculas: ');
console.log(converterParaMaiusculas(stringParaMaiusculas));

function verificarPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

const numeroPrimo = parseInt(prompt('Digite um número para verificar se é primo: '));
console.log(verificarPrimo(numeroPrimo));

function inverterArray(array) {
  return array.reverse();
}

const elementosParaInverter = prompt('Digite os elementos do array separados por vírgula para inverter a ordem: ')
  .split(',')
  .map(elem => parseInt(elem));
console.log(inverterArray(elementosParaInverter));

function acrescentarPorcentagem(valor, porcentagem) {
  return valor + (valor * porcentagem / 100);
}

const valorParaAcrescentar = parseFloat(prompt('Digite o valor para acrescentar a porcentagem: '));
const porcentagemParaAcrescentar = parseFloat(prompt('Digite a porcentagem a ser acrescentada: '));
console.log(acrescentarPorcentagem(valorParaAcrescentar, porcentagemParaAcrescentar));

function verificarPalindromo(palavra) {
  const palavraInvertida = palavra.split('').reverse().join('');
  return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}

const palavraParaVerificar = prompt('Digite uma palavra para verificar se é um palíndromo: ');
console.log(verificarPalindromo(palavraParaVerificar));

function converterParaBinario(numero) {
  return numero.toString(2);
}

const numeroParaBinario = parseInt(prompt('Digite um número para converter para binário: '));
console.log(converterParaBinario(numeroParaBinario));

function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

const numeroFatorial = parseInt(prompt('Digite um número para calcular o fatorial: '));
console.log(calcularFatorial(numeroFatorial));
