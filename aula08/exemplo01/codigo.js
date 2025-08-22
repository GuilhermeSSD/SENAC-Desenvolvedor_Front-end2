
    


function adicionar() {
    let valor = document.getElementById("entrada").value;

    if (valor.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = valor;

        li.addEventListener("mouseover", function(){
            this.style.backgroundColor = "gray";
        });
        li.addEventListener("mouseout", function(){
            this.style.backgroundColor = "";
        });

        document.getElementById("lista").appendChild(li);
        document.getElementById("entrada").value = "";
    }
}

 //------------------------------------------------------------------------------
let itens = document.querySelectorAll("#lista li");
itens.forEach(function(item) {
    item.addEventListener("mouseover", function(){
        this.style.backgroundColor = "gray";
    });
    item.addEventListener("mouseout", function(){
        this.style.backgroundColor = "";
    });
});
 //------------------------------------------------------------------------------
 
function apagar() {
    let lista = document.getElementById("lista");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
}

function apagarprimeiro() {
    let lista = document.getElementById("lista");
    if (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}
