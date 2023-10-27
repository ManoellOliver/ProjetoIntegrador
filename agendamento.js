// Função para selecionar um computador
function selectComputer(pcId) {
    const pcRadio = document.querySelector(`input[type="radio"][id="${pcId}"]`);
    const pcLabel = document.querySelector(`label[for="${pcId}"]`);
    
    // Limpar seleções anteriores
    const selectedRadios = document.querySelectorAll('input[type="radio"]');
    selectedRadios.forEach(radio => {
        const label = document.querySelector(`label[for="${radio.id}"]`);
        label.classList.remove('selected');
    });
    
    // Selecionar o computador clicado
    pcRadio.checked = true;
    pcLabel.classList.add('selected');
}

// Função para validar e enviar o formulário
function submitForm() {
    const selectedPC = document.querySelector('input[type="radio"]:checked');

    if (!selectedPC) {
        alert('Por favor, selecione um computador para agendar.');
    } else {
        // Aqui você pode enviar os dados do agendamento para o servidor ou fazer o que for necessário
        alert('Agendamento bem-sucedido! Computador selecionado: ' + selectedPC.id);
    }
}
