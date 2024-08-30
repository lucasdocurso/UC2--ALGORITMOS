




const pessoa1 = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 function puxando(objeto) {
    const pessoa = {
        ...objeto,
        apelidos: ["capudo", "xavascudo", "cuzudo"],
    }
    console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1["apelidos"]}`)
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa["apelidos"]}`)
}
    puxando(pessoa1)
    


 