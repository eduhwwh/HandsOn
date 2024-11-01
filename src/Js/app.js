function simular() {
    var role = document.getElementById('role').value;
    var consumo = parseFloat(document.getElementById('consumo').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(consumo) || consumo <= 0) {
        resultado.innerHTML = "Por favor, insira um valor de consumo válido.";
        return;
    }

    var valorUnitario;
    if (role === 'vendedor') {
        valorUnitario = 0.50; // Preço para vendedores
    } else if (role === 'comprador') {
        valorUnitario = 0.70; // Preço para compradores
    } else if (role === 'despachante') {
        valorUnitario = 0.60; // Preço para despachantes
    }

    var valorTotal = consumo * valorUnitario;
    var Energisa = 1.70;

    var Diferenca = Energisa * consumo;
    var Economia = Diferenca - valorTotal;

    resultado.innerHTML = `
        <h2>Resultado da Simulação</h2>
        <p><strong>Papel:</strong> ${role.charAt(0).toUpperCase() + role.slice(1)}</p>
        <p><strong>Consumo:</strong> ${consumo.toFixed(2)} kWh</p>
        <p><strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}</p>
        <div class="result-box">
            <h3>Economia Estimada</h3>
            <p><strong>Valor que paga atualmente:</strong> R$ ${Diferenca.toFixed(2)}</p>
            <p><strong>Passa a economizar:</strong> R$ ${Economia.toFixed(2)}</p>
        </div>
    `;
}

function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}
