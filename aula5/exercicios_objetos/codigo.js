let pessoa ={
    nome:"Guilherme",
    idade:17,
    sapato:42,
    olhos:"Pretos",
    altura:1.67,
    peso:55,
    Escola:"etec",
    ano:2008,
  
    falar: function(){
        alert(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e estou estudando na ${this.Escola}`)
    }
}

pessoa.falar();

console.log(pessoa.nome);
console.log(pessoa.Escola);
console.log(pessoa.ano);
console.log(pessoa.sapato);
console.log(pessoa.peso);
console.log(pessoa.olhos);