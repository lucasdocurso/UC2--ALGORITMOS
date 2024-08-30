comidas = ["sorvete","pizza","churrasco","pão","arroz"]
console.log(comidas)


console.log(`essas são minhas comidas favoritas: \n${comidas.join("\n")}`)

const readlineSync = require('readline-sync');
const comida1 = readlineSync.question("Qual minha comida favorita? ");
comidas[1] = comida1
console.log(comidas)
