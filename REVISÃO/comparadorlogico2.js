
let numero = 15;
let condicao1 = numero > 10;  // Verifica se o número é maior que 10
let condicao2 = numero % 2 === 0;  // Verifica se o número é par
let condicao3 = numero !== 20;  // Verifica se o número é diferente de 20

let resultado = condicao1 && (condicao2 || condicao3);

console.log(resultado);
