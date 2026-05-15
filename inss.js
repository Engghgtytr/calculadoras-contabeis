const salarioBruto = 3800
let inss = 0

if(salarioBruto <= 1621){
    inss = salarioBruto * 0.075
}else if(salarioBruto >= 1621 && salarioBruto <= 2902.84){
    inss = (salarioBruto - 1621)*0.09 + 121.58
}else if(salarioBruto > 2902.84 && salarioBruto <= 4354.27){
    inss = (salarioBruto - 2902.84)*0.12 + 115.37 + 121.58
}

console.log(inss.toFixed(2))