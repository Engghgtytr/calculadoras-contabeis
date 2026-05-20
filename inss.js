const salarioInput = document.getElementById("salario")
const botaoContainer = document.getElementById("button")
let inss = 0

const botao = document.createElement("button")
botao.textContent = "Calcular"
botaoContainer.appendChild(botao)

function calcular() {
    let salarioBruto = parseFloat(salarioInput.value)
    
    if(salarioBruto <= 1621){
        inss = salarioBruto * 0.075
    }else if(salarioBruto <= 2902.84){
        inss = (salarioBruto - 1621) * 0.09 + 121.58
    }else if(salarioBruto <= 4354.27){
        inss = (salarioBruto - 2902.84) * 0.12 + 115.37 + 121.58
    }else if(salarioBruto <= 8475.55){
        inss = (salarioBruto - 4354.27) * 0.14 + 115.37 + 121.58 + 174.17
    }else{
        inss = 988.10
    }
    
    console.log(inss.toFixed(2))
}

botao.addEventListener("click", calcular)