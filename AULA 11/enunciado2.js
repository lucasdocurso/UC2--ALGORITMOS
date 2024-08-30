let textoDoUsuario = "cenoura"

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// 1)se eu colocar uma string diferente da que está no return da false
//2)todas as respostas dão true porque ele capta a palavra cenoura em todas elas
