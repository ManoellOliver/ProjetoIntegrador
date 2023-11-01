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

function selectComputer(computerId) {
    // Mostra a seleção de data e hora quando um computador é selecionado
    document.getElementById('date-time-selection').style.display = 'block';

    // Configura a data mínima (hoje) e a data máxima (7 dias úteis a partir de hoje)
    var dataMin = new Date();
    var dataMax = new Date();
    var diasUteis = 0;
    
    while (diasUteis < 7) {
        dataMax.setDate(dataMax.getDate() + 1);
        if (dataMax.getDay() !== 0 && dataMax.getDay() !== 6) {
            diasUteis++;
        }
    }

    document.getElementById('data').min = dataMin.toISOString().split('T')[0];
    document.getElementById('data').max = dataMax.toISOString().split('T')[0];
}
