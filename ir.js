const salarioBase = 7000
let ir = 0

if(salarioBase < 5000){
    ir = 0
}else if(salarioBase >= 5000 && salarioBase <= 7350){
    let reducao = 978.62 - (0.13314 * salarioBase)
    ir = salarioBase * 0.275 - 908.73 - reducao
}else {
    ir = salarioBase * 0.275 - 908.73
}

console.log(ir)
