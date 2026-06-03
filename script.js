const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent =
        "O Agrinho 2026 mostra que é possível produzir alimentos, proteger o meio ambiente e construir um futuro sustentável para todos!";
});