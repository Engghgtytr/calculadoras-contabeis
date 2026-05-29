const salarioInput = document.getElementById("salario-inss");
const btnCalcular = document.getElementById("btn-inss");
const resultadoDiv = document.getElementById("resultado-inss");

function calcularINSS() {
    let salario = parseFloat(salarioInput.value);
    let inss = 0;
    
    if (isNaN(salario) || salario <= 0) {
        resultadoDiv.innerHTML = '<p style="color: red;">❌ Digite um salário válido!</p>';
        return;
    }
    
    if (salario <= 1621) {
        inss = salario * 0.075;
    } else if (salario <= 2902.84) {
        inss = (salario - 1621) * 0.09 + 121.58;
    } else if (salario <= 4354.27) {
        inss = (salario - 2902.84) * 0.12 + 115.37 + 121.58;
    } else if (salario <= 8475.55) {
        inss = (salario - 4354.27) * 0.14 + 115.37 + 121.58 + 174.17;
    } else {
        inss = 988.10;
    }
    
    let salarioLiquido = salario - inss;
    
    resultadoDiv.innerHTML = `
        <p><strong>📊 Resultado INSS:</strong></p>
        <p>💰 Salário Bruto: <strong>R$ ${salario.toFixed(2)}</strong></p>
        <p>📉 Desconto INSS: <strong>R$ ${inss.toFixed(2)}</strong></p>
        <p>✅ Salário Líquido: <strong>R$ ${salarioLiquido.toFixed(2)}</strong></p>
        <p>📈 Alíquota Efetiva: <strong>${((inss / salario) * 100).toFixed(2)}%</strong></p>
    `;
}

btnCalcular.addEventListener("click", calcularINSS);