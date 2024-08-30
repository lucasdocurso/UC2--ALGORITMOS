const personagens = ["ryu", "goku", "vulpix","drax"]
function quemSou(personagens) {
const indiceAleatorio = Math.floor(Math.random() *personagens.length);
return personagens[indiceAleatorio];
}
const personagemEscolhido = quemSou(personagens);
console.log("você é:", personagemEscolhido);