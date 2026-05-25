function calcular() {
    alert("Botão funcionou!")
    let salario = parseFloat(salarioBruto.value)
    // ... resto do código
}

const salarioBruto = document.getElementById("salario")
const botao = document.getElementById("botao")
const resultadoDiv = document.getElementById("resultado")
let inss = 0

function calcular() {
    let salario = parseFloat(salarioBruto.value)
    
    if(salario <= 1621){
        inss = salario * 0.075
    }else if(salario <= 2902.84){
        inss = (salario - 1621) * 0.09 + 121.58
    }else if(salario <= 4354.27){
        inss = (salario - 2902.84) * 0.12 + 115.37 + 121.58
    }else if(salario <= 8475.55){
        inss = (salario - 4354.27) * 0.14 + 115.37 + 121.58 + 174.17
    }else{
        inss = 988.10
    }
    
    let liquido = salario - inss
    
    resultadoDiv.innerHTML = "INSS: R$ " + inss.toFixed(2) + "<br>Salário Líquido: R$ " + liquido.toFixed(2)
}

botao.addEventListener("click", calcular)
