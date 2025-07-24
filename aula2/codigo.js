 var forma = prompt("Qual a forma que vc deseja calcular a área?")


switch (forma) {
    case "quadrado":
        let lado = parseInt(prompt("Digite o lado do quadrado"));
        let resultadoquadrado = lado*lado;
        alert(`O resultado da operação é: ${resultadoquadrado}`);
        break;
    case "triangulo":
        let base = parseInt(prompt("Digite a base do triangulo"));
        let altura = parseInt(prompt("Digite a altura do triangulo"));
        let resultadotriangulo = (base*altura)/2;
        alert(`O resultado da operação é: ${resultadotriangulo}`);
        break;
      case "retangulo":
      let ladomenor = parseInt(prompt("Digite o menor lado do retangulo"));
      let ladomaior = parseInt(prompt("Digite o maior do retangulo"));
      let resultadoretangulo = ladomenor*ladomaior;
      alert(`O resultado da operação é: ${resultadoretangulo}`);
        break;
     case "losangulo":
        let diagonalmaior = parseInt(prompt("Digite a diagonal maior do losangulo"));
        let diagonalmenor = parseInt(prompt("Digite a diagonal menor do losangulo"));
        let resultadolosangulo = (diagonalmaior*diagonalmenor)/2;
        alert(`O resultado da operação é: ${resultadolosangulo}`);
        break;
     case "circulo":
     const pi = 3.14;
     let raio = parseFloat(prompt("Digite o raio"));
     let resultadocirculo = (raio*raio)*pi;
     alert(`O resultado da operação é: ${resultadocirculo}`);
        break;
    case "trapezio":
        let basemenor = parseInt(prompt("Digite a base menor do Trapésio"));
        let basemaior = parseInt(prompt("Digite a base maior do Trapésio"));
        let alturatrapesio = parseInt(prompt("Digite a altura do Trapésio"));
        let resultadotrapesio = ((basemenor*basemaior)*alturatrapesio)/2 ;
        alert(`O resultado da operação é: ${resultadotrapesio}`);
        break;
    case "soma":
       let numero1 = parseFloat(prompt("Digito o primeiro numero:"));
       let numero2 = parseFloat(prompt("Digito o segundo numero:"));
        soma = numero1 + numero2;
        alert(`O resulado da soma é:${soma}`);
        break;
        case "subtração":
            numero1 = parseFloat(prompt("Digito o primeiro numero:"));
            numero2 = parseFloat(prompt("Digito o segundo numero:"));
            subtracao = numero1 - numero2;
            alert(`O resulado da soma é:${subtracao}`);
        break;
        case"multiplicaçâo":
        numero1 = parseFloat(prompt("Digito o primeiro numero:"));
        numero2 = parseFloat(prompt("Digito o segundo numero:"));
        multiplicacao = numero1 * numero2;
        alert(`O resulado da soma é:${multiplicacao}`);
    break;
    case"divisão":
        numero1 = parseFloat(prompt("Digito o primeiro numero:"));
        numero2 = parseFloat(prompt("Digito o segundo numero:"));
        divisao = numero1 * numero2;
        alert(`O resulado da soma é:${divisao}`);
    break;

    default: 
  }

