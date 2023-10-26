  document.getElementById("homeBtn").addEventListener("click", function() {
    changeButtonColor("homeBtn");
  });
// Função para exibir uma mensagem de boas-vindas quando o formulário é enviado
function exibirMensagem() {
    var email = document.getElementById("email").value;
    var mensagem = "Bem-vindo, " + email + "! Você fez login com sucesso.";
    alert(mensagem);
}

// Adicionar um ouvinte de evento ao formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir que o formulário seja enviado
    exibirMensagem(); // Chamar a função para exibir a mensagem de boas-vindas
});
