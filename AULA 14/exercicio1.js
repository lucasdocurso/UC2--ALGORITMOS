let array
console.log('a. ', array)// undefined

array = null
console.log('b. ', array)// null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//11

let i = 0
console.log('d. ', array[i])//3

array[i+1] = 19
console.log('e. ', array)//[3,19,5,6,7,8,9,10,11,12,13]

const valor = array[i+6]// 9
console.log('f. ', valor)