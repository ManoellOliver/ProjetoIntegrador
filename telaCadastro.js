// JavaScript - telaCadastro.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Restante do código...

      // Simulação de sucesso de cadastro
      successMessage.style.display = "block";
      form.reset();
  });
});
