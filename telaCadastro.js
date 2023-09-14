document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "As senhas não coincidem.";
    } else {
      document.getElementById("confirm-password-error").textContent = "";
      // Simulação de sucesso de cadastro
      successMessage.style.display = "block";
      form.reset();
    }
  });
});
