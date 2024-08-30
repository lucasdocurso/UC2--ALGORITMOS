let maior = 0
const numeros = [1,2,3,4,5]
function maiorNumero(array1) {
    for(let i = 0; i < array1.length; i ++) {
    if (array1[i] > maior) {
   maior = array1[i]
    }

    }
    return maior


    }
    console.log(maiorNumero(numeros))

