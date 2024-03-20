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

// Requisito 4 - Crie a função maiorPalavra

// Requisito 5 - Crie a função maisRepetido

// Requisito 6 - Crie a função somatorio

// Requisito 7 - Crie a função verificaFimPalavra

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
