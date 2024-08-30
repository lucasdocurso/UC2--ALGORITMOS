const listaDeTarefas = []

const readlineSync = require('readline-sync');
const frase1 = readlineSync.question("qual a segunda tarefa do dia? ");
const frase2 = readlineSync.question("qual a segunda tarefa do dia? ");
const frase3 = readlineSync.question("qual a terceira tarefa do dia? ");

const caixa = [frase1,frase2,frase3]
console.log(caixa)
listaDeTarefas.push(frase1,frase2,frase3)

const pergunta = readlineSync.question("quantas tarefas ");

caixa.splice(pergunta, 1)
console.log(caixa)