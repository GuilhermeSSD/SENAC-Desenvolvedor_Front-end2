function enviar(){
  let nome = document.getElementById("nome").value
  let email = document.getElementById("E-mail").value
  let telefone = document.getElementById("numero").value
  let idade = document.getElementById("idade").value
  let escola = document.getElementById("estuda").value
  alert(`Deacordo com o formulario fornecido os seus dados são:\n
        O seu nome é: ${nome};\n
        O seu E-mail é: ${email};\n
        O seu número de telefone é: ${telefone};\n
        Você tem ${idade} anos;\n
        Você estuda no(a): ${escola}`)}