const salarioBruto = 2800
let inss = 0

if(salarioBruto <= 1621){
    inss = salarioBruto * 0.075
}else if(salarioBruto >= 1621 && salarioBruto <= 2902.84){
    inss = (salarioBruto - 1621)*0.09 + 121.58
}

console.log(inss)