const bool1 = true 
const bool2 = false 
const bool3 = !bool2

let resultado = bool1 && bool2 
// true && false = false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
// true && false = false
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2) 
// !false %% true (true || false) = false
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
//boolean


let primeiroNumero = "100"
let segundoNumero = "43"

const soma = primeiroNumero + segundoNumero

console.log(soma)
console.log(Number("100") + Number("43"))
//os números estão entre aspas, o computador entende que é uma string e não um number,
// por isso que junta os numeros e não as somam.
//para funcionar a soma colocando aspas, precisa ter acompahando o Number()


