
function cliqueNoBotao(){
    const imagem = document.getElementById("imagem");
    if (imagem.style.display === "none"){
        imagem.style.display = "block"; // Tornar a imagem invisivel
    } else {
        imagem.style.display = "none"; // oculta a imagem se ja estiver visivel
    }
    // alert("Você clicou no botão!!!");
}
document.getElementById("meuBotão").addEventListener("click", cliqueNoBotao);
document.getElementById("primeiroBotao").addEventListener("click",function() {
    alert('click: Acionado quando um elemento é clicado')
});

//----------------------------------------------------------------------------------

document.getElementById("primeiroBotao").addEventListener("click",function() {
    alert('click: Acionado quando um elemento é clicado.')
});

 document.getElementById("segundoBotao").addEventListener("dblclick",function() {
    alert('dblclick: Adicionando um elemento quando é clicado duas vezes seguidas.')
});

 document.getElementById("terceiroBotao").addEventListener("mousedown",function() {
    alert('mousedown: Acionando quando o mouse é movido sobre o elemento.')
});

 document.getElementById("quartoBotao").addEventListener("mouseup",function() {
    alert('mouseup: Acionado quando o mouse é movido sobre o elemento')
});

 document.getElementById("quintoBotao").addEventListener("mousemover",function() {
    alert('mousemover: Acionado quando o mouse é movido sobre um elemento')
});
    
 document.getElementById("sextoBotao").addEventListener("mouseover",function() {
    alert('mouseover: Acionado quando o mouse entra em um elemento')
});

 document.getElementById("sétimoBotao").addEventListener("mouseout",function() {
   alert('click: Acionado.')
});

 document.getElementById("oitavoBotao").addEventListener("contextmenu",function(event) {
   event.preventDefault();
    alert('contextmenu:')
});

//-----------------------------------------------------------------------------------------------
//eventos de teclado

document.getElementById("keydownBtn").addEventListener("keydown",function() {
    alert('keydown: Acionado quando uma tecla é pressionada')
});

document.getElementById("keypressBtn").addEventListener("keypress",function() {
    alert('keypress: Acionado quando uma tecla é pressionada e liberada.')
});

document.getElementById("keyupBtn").addEventListener("keyup",function() {
    alert('keyup: Acionado quando uma tecla é liberada')
});

//-------------------------------------------------------------------------------------------------

//eventos de janela/documento

window.addEventListener("load", function(){
    alert("load: Acionando quando um recurso e seus recursos dependentes terminaram de carregar.")
});

window.addEventListener("unload", function(){
    alert("unload: Acionando quando a página está prestes a ser descarregada.")
});

window.addEventListener("resize", function(){
    alert("resize: Acionando quando a janela do navegador é redimensionada.")
});

window.addEventListener("scroll", function(){
    alert("scroll: Acionando quando o conteúdo de um elemento é rolado")
});

//---------------------------------------------------------------------------------------------------

//Eventos de tempo

document.getElementById("setTimeoutbtn").addEventListener("click", function() {
    setTimeout(function() {
        alert("setTimeout: Acionado após o intervalo de um tempo especificado.")
},2000);
});

document.getElementById("setIntervalbtn").addEventListener("click", function() {
    setIntervalout(function() {
        alert("setInterval: Acionado quando repetidamente em intervalo de tempo especificado.")
},2000);
});


