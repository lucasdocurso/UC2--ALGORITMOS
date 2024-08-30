let fruta = "Pêra"
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     break
    default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// 1) para mostrar o preço da fruta desejada

// 2) "o preço da fruta Maçã e R$ 2,25"

/*3) se tirarmos o "break" emcima do default ele só vai copiar no console que o valor vai ser "5"
ele discarta o valor original "5,5"*/