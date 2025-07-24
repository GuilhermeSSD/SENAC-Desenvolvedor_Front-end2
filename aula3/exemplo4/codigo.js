let temperatura =parseInt(prompt("Digite a temperatura"));
if(temperatura >= 50){
    alert("vc morreu")
}
else if(temperatura >= 20){
    alert("está calor")
}
else if(temperatura <= -50){
    alert("vc não está vivo")
}
else if(temperatura <= 0){
    alert("A TEMPERATURA ESTÁ NEGATIVA");
}
else{
    alert("Está frio");
}