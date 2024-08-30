
const palavras = ["oi", "sumido", "tudo", "bem"]
let mensagem = ("")
function junçãoDasStrings (palavras) {
    for(let palavra of palavras) //  ele tem a função de percorrer minha array
    mensagem = mensagem + palavra + " " ;
    console.log(mensagem)

}

junçãoDasStrings(palavras)
