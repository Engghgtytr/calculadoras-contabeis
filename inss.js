const salarioBruto = document.getElementById("Salario")
let inss = 0

if(salarioBruto <= 1621){
    inss = salarioBruto * 0.075
}else if(salarioBruto >= 1621 && salarioBruto <= 2902.84){
    inss = (salarioBruto - 1621)*0.09 + 121.58
}else if(salarioBruto > 2902.84 && salarioBruto <= 4354.27){
    inss = (salarioBruto - 2902.84)*0.12 + 115.37 + 121.58
}else if(salarioBruto > 4354.27 && salarioBruto <= 8475.55){
    inss = (salarioBruto - 4354.27)*0.14 + 115.37 + 121.58 + 174.17
}else{
    inss = 988.10
}
<button id="button">Calcule</button>

button.getElementById("button")
addEventListener("click")

console.log(inss.toFixed(2))