let texto1 = prompt("escreva o primeiro texto do p1")
let texto2 = prompt("escreva o primeiro texto do p2")
let texto3 = prompt("escreva o primeiro texto do p3")
let texto4 = prompt("escreva o primeiro texto do p4")
let texto5 = prompt("escreva o primeiro texto do p5")
let texto6 = prompt("escreva o primeiro texto do p6")
let paragrafo = document.getElementsByTagName("p");
 
 
paragrafo[0].innerText= texto1
paragrafo[1].innerText= texto2
paragrafo[2].innerText= texto3
paragrafo[3].innerText= texto4
paragrafo[4].innerText= texto5
paragrafo[5].innerText= texto6
 
document.getElementById("fundo").style.backgroundColor = "blue";
alert(paragrafo)
paragrafo[1,2,3,4,5].style.Color = "red"