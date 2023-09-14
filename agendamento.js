// Função para alternar a seleção de um PC
function toggleSelection(pcId) {
    const pcLabel = document.querySelector(`label[for=${pcId}]`);
    const checkbox = document.getElementById(pcId);
    
    checkbox.checked = !checkbox.checked; // Alternar a seleção
    pcLabel.classList.toggle('selected-pc', checkbox.checked); // Destacar ou desfazer destaque
}

// Função para validar e enviar o formulário
function submitForm() {
    const selectedPCs = document.querySelectorAll('input[type="checkbox"]:checked');

    if (selectedPCs.length === 0) {
        alert('Por favor, selecione pelo menos um PC para agendar.');
    } else {
        // Aqui você pode enviar os dados do agendamento para o servidor ou fazer o que for necessário
        alert('Agendamento bem-sucedido! Dados a serem enviados: ' + Array.from(selectedPCs, pc => pc.name).join(', '));
    }
}
