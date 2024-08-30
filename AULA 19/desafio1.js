

const readlineSync = require('readline-sync');
function awnser(readlineSync) {
const pergunta1 = readlineSync.question("Qual o seu nome? ");
const pergunta2 = readlineSync.question("Qual a sua idade? ");
const pergunta3 = readlineSync.question(" Qual sua profissao?");

     dados = {
        nome: pergunta1,
        idade: pergunta2,
        profissao:pergunta3,
    }
}
awnser(readlineSync)
console.log(dados)
console.log(typeof(dados))

























