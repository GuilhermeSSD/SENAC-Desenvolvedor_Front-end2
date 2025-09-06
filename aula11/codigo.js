document.addEventListener('DOMContentLoaded', function () {
    var botao = document.getElementById('btn-toggle');

    function toggleDark() {
        var ativado = document.body.classList.toggle('dark');

        botao.textContent = ativado ? "Desativar modo escuro" : "Ativar modo escuro";

        alert("Modo escuro " + (ativado ? "ativado" : "desativado"));
    }

    botao.addEventListener('click', toggleDark);
});
