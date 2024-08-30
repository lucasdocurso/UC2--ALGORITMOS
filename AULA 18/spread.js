const usuário = {
    nome: "prof",
    idade: 25,
    email: "profsenac@rs",
    cidade:"sp"
}
const novoUsuario = {
    ... usuário,
    nome:"lucas",
    idade:"16"
}
console.log(novoUsuario)