/*a) O que vai ser impresso no console?
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?*/

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false,
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//a) false, undefined
//b) porque altura não esta definida, por isso que o resultado é undefined