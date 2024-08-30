const filmes = {
    nome:"lucas florão o filme",
     elenco:["andreia", "lucas", "alcione"],
      ano:"2024",
      personagens:[
        {autor:"andreia", personagem: "ambrieta" },
        {autor:"lucas", personagem: "luqueta"},
        {autor:"alcione", personagem: "alcionieta"}
 ]
}
filmes.personagens[0].autor = "xuxa"
console.log(filmes)
