const pessoa = {
	nome: "Bruno", 
  idade: 23, 
	profissao: "Instrutor"
}
const pessoa2 = {
    nome: "lucas",
    idade: 16,
    profissao: "vagabundo",
}

function minhaFuncao(pessoa) {
  const resultado = [`bruno ${pessoa.nome.length},${pessoa.idade},instrutor ${pessoa.profissao.length}  lucas ${pessoa2.nome.length}, ${pessoa2.idade}, vagabundo, ${pessoa2.profissao.length}`]

	// desenvolver sua logica
  return resultado
}

console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]