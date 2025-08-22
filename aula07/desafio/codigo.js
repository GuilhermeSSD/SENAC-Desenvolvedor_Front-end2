const verificacao = "1234"
function mandamensagem(){
    let senha = document.getElementById("entradasenha").value;
    let email = document.getElementById("entradaemail").value
    if( senha === verificacao && email === "guilhermesdominhgues31@gmail.com"){
    document.getElementById("resultado").innerText = "acesso concedido"
}
    else{
   document.getElementById("resultado").innerText = "acesso negado"
}

}







