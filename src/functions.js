// Requisito 1 - Crie a função verificaPalindromo

// split('') divide a palavra em um array de caracteres.
// reverse() inverte a ordem dos elementos no array
// join('') junta os caracteres do array de volta em uma string, formando a palavra invertida.
const verificaPalindromo = (palavra) => {
  let palindromo = palavra.split('').reverse().join('');
  return palavra === palindromo;
};

/* console.log( verificaPalindromo('arara'));
console.log( verificaPalindromo('cachorro')); */

// Requisito 2 - Crie a função indiceDoMaior

function indiceDoMaior(array) {
  let maiorValor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > array[maiorValor]) {
      maiorValor = index;
    }
  }
  return maiorValor;
}

/* console.log(indiceDoMaior[2, 3, 6, 7, 10, 1]); */

// Requisito 3 - Crie a função indiceDoMenor
const indiceDoMenor = (array) => {
  let menorValor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < array[menorValor]) {
      menorValor = index;
    }
  }
  return menorValor;
};

// Requisito 4 - Crie a função maiorPalavra

const maiorPalavra = (array) => {
  maisCaracteres = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maisCaracteres.length) {
      maisCaracteres = array[index];
    }
    /* console.log(maisCaracteres) */
    /*  console.log(  ` ${index}  -   ${array[index]}`); */
  }
  return maisCaracteres;
};

/* console.log(maiorPalavra(['HTML', 'CSS','JavaScript', 'GitHub', 'Unix'])); */

// Requisito 5 - Crie a função maisRepetido

function maisRepetido(array) {
  let contador = {};
  let maisFrequente = array[0];
  let maxContagem = 1;

  for (let index = 0; index < array.length; index += 1) {
    let elemento = array[index];
    if (contador[elemento] == null) {
      contador[elemento] = 1;
    } else {
      contador[elemento] += 1;
    }

    if (contador[elemento] > maxContagem) {
      maisFrequente = elemento;
      maxContagem = contador[elemento];
    }
  }
  return maisFrequente;
}

// Requisito 6 - Crie a função somatorio
function somatorio(numero) {
  if (numero < 0) {
    return 'ERRO';
  } {
    let soma = 0;
    for (let index = 1; index <= numero; index += 1) {
      soma += index;
    }
    return soma;
  }
}

// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1, palavra2) {
  if (palavra2.length > palavra1.length) {
    return false;
  }
  return palavra1.endsWith(palavra2);
}

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
