const readlineSync = require('readline-sync');


const email = readlineSync.question("Qual seu email?");
const usuario = readlineSync.question("qual seu nome de usuario? ");


console.log(`seu email é ${email}, e seu nome de usuario é ${usuario}`)
