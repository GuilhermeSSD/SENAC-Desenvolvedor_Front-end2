function mostrarmensagem(){
    alert("Vc fez oque que vc não deveria ter feito e agora o seu nome será marcado");
    
    
}

function outramensagem(){
console.log("HI HI HI HA")
}

document.getElementById("maisumbutao").addEventListener("click", function() {
    alert("Ser de trevas");
})

document.getElementById("maisdoisbutao").addEventListener("click", function() {
    console.log("mais dois butão")
})

function mandamensagem(){
    let valor = document.getElementById("entrada").value;

    document.getElementById("resultado").innerText = valor
}