//importando o módulo readline
const readline = require("readline");
//criando uma instãncia de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//solicitando ao usuário que insira sua idade
rl.question("qual seu nome? ", (nome) => {
    //exibindo a idade inserida pelo usuário
console.log("seu nome é:", nome);
//fechando a interface de leitura
rl.close();
});
