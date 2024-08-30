const readlineSync = require('readline-sync');
let numero
let soma = 0
while(numero !== 0) {
    numero = Number(readlineSync.question("digite um numero "))
    soma += numero// soma recebe 0 + 10
}
console.log(soma)





