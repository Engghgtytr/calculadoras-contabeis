const salarioIrInput = document.getElementById("salario-ir");
const dependentesSelect = document.getElementById("dependentes");
const pensaoSelect = document.getElementById("pensao");
const valorPensaoDiv = document.getElementById("campo-valor-pensao");
const valorPensaoInput = document.getElementById("valor-pensao");
const btnCalcularIr = document.getElementById("btn-ir");
const resultadoIrDiv = document.getElementById("resultado-ir");

// Mostrar/esconder campo de pensão
pensaoSelect.addEventListener("change", function() {
    if (this.value === "sim") {
        valorPensaoDiv.style.display = "block";
    } else {
        valorPensaoDiv.style.display = "none";
    }
});

function calcularIRPF() {
    let salarioBruto = parseFloat(salarioIrInput.value);
    let dependentes = parseInt(dependentesSelect.value);
    let pagaPensao = pensaoSelect.value === "sim";
    let valorPensao = pagaPensao ? parseFloat(valorPensaoInput.value) || 0 : 0;
    
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        resultadoIrDiv.innerHTML = '<p style="color: red;">❌ Digite um salário válido!</p>';
        return;
    }
    
    // 1. Calcular INSS (mesma lógica)
    let inss = 0;
    if (salarioBruto <= 1621) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2902.84) {
        inss = (salarioBruto - 1621) * 0.09 + 121.58;
    } else if (salarioBruto <= 4354.27) {
        inss = (salarioBruto - 2902.84) * 0.12 + 115.37 + 121.58;
    } else if (salarioBruto <= 8475.55) {
        inss = (salarioBruto - 4354.27) * 0.14 + 115.37 + 121.58 + 174.17;
    } else {
        inss = 988.10;
    }
    
    // 2. Base do IR = Salário Bruto - INSS - Pensão
    let baseIR = salarioBruto - inss - valorPensao;
    
    // 3. Dedução por dependente (R$ 189,90 por dependente em 2024/2025)
    let deducaoDependentes = dependentes * 189.90;
    let baseIRComDeducao = baseIR - deducaoDependentes;
    
    // Garantir que a base não fique negativa
    baseIRComDeducao = Math.max(0, baseIRComDeducao);
    
    // 4. Calcular IRPF (tabela 2024/2025)
    let irpf = 0;
    let aliquota = 0;
    let deducao = 0;
    
    if (baseIRComDeducao <= 2259.20) {
        irpf = 0;
        aliquota = 0;
        deducao = 0;
    } else if (baseIRComDeducao <= 2826.65) {
        irpf = baseIRComDeducao * 0.075 - 169.44;
        aliquota = 7.5;
        deducao = 169.44;
    } else if (baseIRComDeducao <= 3751.05) {
        irpf = baseIRComDeducao * 0.15 - 381.44;
        aliquota = 15;
        deducao = 381.44;
    } else if (baseIRComDeducao <= 4664.68) {
        irpf = baseIRComDeducao * 0.225 - 662.77;
        aliquota = 22.5;
        deducao = 662.77;
    } else {
        irpf = baseIRComDeducao * 0.275 - 896.96;
        aliquota = 27.5;
        deducao = 896.96;
    }
    
    // Garantir que IR não fique negativo
    irpf = Math.max(0, irpf);
    
    // 5. Salário líquido final
    let salarioLiquido = salarioBruto - inss - irpf - valorPensao;
    
    resultadoIrDiv.innerHTML = `
        <p><strong>📊 Resultado IRPF:</strong></p>
        <p>💰 Salário Bruto: <strong>R$ ${salarioBruto.toFixed(2)}</strong></p>
        <p>📉 Desconto INSS: <strong>R$ ${inss.toFixed(2)}</strong></p>
        <p>👨‍👩‍👧 Dependentes: <strong>${dependentes} (R$ ${deducaoDependentes.toFixed(2)} de dedução)</strong></p>
        ${pagaPensao ? `<p>💸 Pensão Alimentícia: <strong>R$ ${valorPensao.toFixed(2)}</strong></p>` : ''}
        <p>📊 Base de Cálculo IR: <strong>R$ ${baseIRComDeducao.toFixed(2)}</strong></p>
        <p>📈 Alíquota IRPF: <strong>${aliquota}% (dedução R$ ${deducao.toFixed(2)})</strong></p>
        <p>💸 Imposto de Renda: <strong>R$ ${irpf.toFixed(2)}</strong></p>
        <hr>
        <p style="font-size: 16px;"><strong>✅ Salário Líquido Final: R$ ${salarioLiquido.toFixed(2)}</strong></p>
    `;
}

btnCalcularIr.addEventListener("click", calcularIRPF);