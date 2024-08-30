const numeros= [1,2,3,4,5,6]
console.log(numeros.length)//6

numeros.push(7)
console.log(numeros)//1,2,3,4,5,6,7

numeros.splice(3,2)
console.log(numeros)//1,2,3,6,7

console.log(numeros.length)//5
