// Função para alterar cor do botão ao clicar
function changeButtonColor(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = "lightblue";
    button.style.color = "darkpurple";
  }
  
  // Adiciona evento de clique aos botões
  document.getElementById("cadastroBtn").addEventListener("click", function() {
    changeButtonColor("cadastroBtn");
  });
  
  document.getElementById("loginBtn").addEventListener("click", function() {
    changeButtonColor("loginBtn");
  });

  