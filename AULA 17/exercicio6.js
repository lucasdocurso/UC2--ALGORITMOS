let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(let i = 0; i < numeros.length; i ++) {
    if (i % 2 === 0 &&  i % 3 !== 0) {console.log(i) }1//1 jeito de fazer
   
    
} 

for(let i = 2; i <= 20; i +=2) {
    if( i % 3 !== 0) {
        console.log(i); // 2 jeito de fazer
    }
}
