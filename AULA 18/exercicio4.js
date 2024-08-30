
   const pessoa1 = {
       nome:"lucas", 
       idade: 16,
       musical:"rap"
    }
    function novoObjeto(objeto) {
    const pessoa2 = {
        ...objeto,
        comidas: ["churrasco", "pizza", "pastel"],
        melhora: {
            nome: "luiz",
            idade:17,
            comida:"pizza"}
    }
    
    

console.log(`O nome da pessoa é ${pessoa1.nome} e suas comidas preferidas são ${pessoa2.comidas[0]},${pessoa2.comidas[1]},
${pessoa2.comidas[2]}, Seu melhor amigo se chama ${pessoa2.melhora.nome} tem ${pessoa2.melhora.idade} anos`)
}
    novoObjeto(pessoa1)




