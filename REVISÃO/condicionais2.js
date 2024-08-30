
const readlineSync = require('readline-sync');

let notas = readlineSync.question("digite a sua nota:")

if(notas < 6) 
    {console.log("voce precisa fazer a recuperação!")}
   
else{console.log("voce passou de ano!")}



























